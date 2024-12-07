import { Routes, Route } from "react-router-dom";
import {
  Home,
  Academics,
  Events,
  Schedule,
  Contact,
  Resources,
  About,
} from "./LinkPages";
import RouteLinks from "./RoutLinks";
const RoutesRoute = () => {
  return (
    <>
      <RouteLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route
          path="Academics"
          element={
            <div className="mt-20 flex">
              <div className="bg-red-500">
                <Academics url={<img src="./src/assets/men clothes.jpg" />} />
              </div>
              <div>
                <Academics url={<img src="./src/assets/men clothes.jpg" />} />
              </div>
            </div>
          }
        />
        <Route path="Events" element={<Events />} />
        <Route path="Schedule" element={<Schedule />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Resources" element={<Resources />} />
      </Routes>
    </>
  );
};
export default RoutesRoute;
