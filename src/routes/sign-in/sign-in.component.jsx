import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    } catch (error) {
      console.log("There was an error while creating an user: " + error);
    }
  };

  return (
    <>
      <div>Sign In</div>
      <button onClick={logGoogleUser}>Sign In With Google</button>
      <SignUpForm />
    </>
  );
};

export default SignIn;
