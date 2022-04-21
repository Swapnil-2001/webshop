import Directory from "../../components/directory/directory.component";

const categories = [
  {
    id: 1,
    title: "iPhone",
    imageUrl:
      "https://assets.mspimages.in/wp-content/uploads/2022/04/iphone_13_pro_max-1.jpg",
  },
  {
    id: 2,
    title: "iPad",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "Macbook",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "Airpod",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "Watch",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

const Home = () => {
  return <Directory categories={categories} />;
};

export default Home;
