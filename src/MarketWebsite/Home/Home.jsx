import Footer from "../Footer/Footer";
import HeroSection from "./HeroSection";
import OverViewSection from "./overViewSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Welcome to MaceeMarketHub</title>
        <link rel="icon" type="image/png" href="./src/assets/logo.png"></link>
      </Helmet>
      <HeroSection />
      <OverViewSection />
      <Footer />
    </>
  );
};
export default Home;
