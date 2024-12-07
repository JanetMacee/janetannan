import { NavLink } from "react-router-dom";
import "./links.css";
const Links = () => {
  return (
    <div
      className="bg-blue-500 space-x-5 font-bold py-3 fixed top-0 px-10"
      style={{ width: "25%", marginLeft: "75%" }}
    >
      <NavLink to="/" className="nav">
        Home
      </NavLink>
      <NavLink to="/accomodation" className="nav">
        Accomodation
      </NavLink>
      <NavLink to="/schedule" className="nav">
        Schedule
      </NavLink>
    </div>
  );
};
export default Links;
