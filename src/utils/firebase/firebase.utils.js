import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  doc, // for getting a document instance
  getDoc, // for accessing the data in that instance
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrVTj4dn6hpYbk6ph8ntfYG32fEzyQ5Pw",
  authDomain: "applestore-d98eb.firebaseapp.com",
  projectId: "applestore-d98eb",
  storageBucket: "applestore-d98eb.appspot.com",
  messagingSenderId: "237541602049",
  appId: "1:237541602049:web:a301c0f68a194349816100",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); // might be more than one instance

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(); // never need more than one for a single application
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(); // points to our database inside the console

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid); // use as unique id to get a document ref
  // gives the document reference inside db under "users" collection with uid

  // snapshot points to a specific place in the collection
  const userSnapshot = await getDoc(userDocRef); // allows us to check if an instance exists,
  // and to access the data
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("There was an error creating the user: ", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
