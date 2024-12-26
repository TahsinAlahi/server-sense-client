import AboutUs from "../components/AboutUs";
import FeaturedServices from "../components/FeaturedServices";
import Header from "../components/Header";
import Partners from "../components/Partners";
import Subscribe from "../components/Subscribe";
import UserCount from "../components/UserCount";

function HomePage() {
  return (
    <>
      <Header />
      <FeaturedServices />
      <Partners />
      <AboutUs />
      <UserCount />
      <Subscribe />
    </>
  );
}

export default HomePage;
