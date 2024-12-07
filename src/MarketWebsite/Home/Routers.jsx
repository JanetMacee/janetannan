import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "../contact/contact";
import Navigation from "./navigation";
import About from "../About/About";
import Nomatch from "../Nomatch";
import Electronics from "../Electronics/Electronics";
import Fashion from "../Fashion/Fashtion";
import HomeGarden from "../HomeGarden/HomeGarden";
import SignUp from "../Signup/signup";
import Login from "../Login/Login";
const Router = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="About" element={<About />} />
        <Route path="Electronics" element={<Electronics />} />
        <Route path="Fashion" element={<Fashion />} />
        <Route path="HomeGarden" element={<HomeGarden />} />
        <Route path="SignUp" element={<SignUp />}></Route>
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </>
  );
};
export default Router;
