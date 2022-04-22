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
    imageUrl:
      "https://cdn.pocket-lint.com/r/s/1200x/assets/images/160390-tablets-review-apple-ipad-air-2022-review-great-becomes-greater-image1-4n9wextkpq.jpg",
  },
  {
    id: 3,
    title: "Macbook",
    imageUrl:
      "https://www.cnet.com/a/img/resize/bd50fa78980c0143b026b99e0af82eb67546906e/2021/10/23/91f7ed14-0d9c-4cba-9715-3e50ef822252/macbook-pro-2021-cnet-review-14.jpg?auto=webp&fit=crop&height=528&width=940",
  },
  {
    id: 4,
    title: "Airpod",
    imageUrl:
      "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_47/3430054/201120-2x1-airpods-pro-evergreen-ew-546p.jpg",
  },
  {
    id: 5,
    title: "Watch",
    imageUrl:
      "https://9to5mac.com/wp-content/uploads/sites/6/2020/02/how-to-see-all-apple-watch-apps.jpeg?quality=82&strip=all&w=1000",
  },
];

const Home = () => {
  return <Directory categories={categories} />;
};

export default Home;
