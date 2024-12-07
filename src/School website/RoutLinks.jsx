import { NavLink } from "react-router-dom";
import "../index.css";
const RouteLinks = () => {
  return (
    <div
      className="link bg-white space-x-5 mt-3 p-3"
      style={{ marginLeft: "40rem", position: "fixed", top: "0" }}
    >
      <NavLink to="/" className="nav">
        Home
      </NavLink>
      <NavLink to="/About" className="nav">
        About
      </NavLink>
      <NavLink to="/Academics" className="nav">
        Academics
      </NavLink>
      <NavLink to="/Events" className="nav">
        Events
      </NavLink>
      <NavLink to="/Schedule" className="nav">
        Schedule
      </NavLink>
      <NavLink to="/Contact" className="nav">
        Contact
      </NavLink>
      <NavLink to="/Resources" className="nav">
        Resources
      </NavLink>
    </div>
  );
};
export default RouteLinks;
