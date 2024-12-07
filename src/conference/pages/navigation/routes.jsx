import { Routes, Route } from "react-router-dom";
import Home from "../Home/HomePage/home";
import Links from "./links";
import Accomodation from "../accomodation/accomodation";
import Schedule from "../schedule/schedule";
import Register from "../registration/register";
import Speaker1 from "../aboutconference/speaker1";
import Speaker2 from "../aboutconference/speaker2";
import Organizer1 from "../aboutconference/organizer1";
import Organizer2 from "../aboutconference/organizer2";
const Routers = () => {
  return (
    <>
      <Links />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/register" element={<Register />} />
        <Route path="/speaker1" element={<Speaker1 />} />
        <Route path="/speaker2" element={<Speaker2 />} />
        <Route path="/organizer1" element={<Organizer1 />} />
        <Route path="/organizer2" element={<Organizer2 />} />
      </Routes>
    </>
  );
};
export default Routers;
