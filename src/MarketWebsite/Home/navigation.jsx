import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
const Navigation = () => {
  const [fans, setFans] = useState("");
  const navigate = useNavigate();
  const handleSelect = (e) => {
    setFans(e.target.value);
  };
  return (
    <>
      <div className="flex gap-20 bg-blue-500 pl-20 py-2">
        <div>
          <img
            src="../src/assets/logo.png"
            alt="logo"
            className="h-20 rounded-full"
          />
        </div>
        <div>
          <input
            type="search"
            placeholder="Type to search"
            className="rounded-lg py-2 px-5 font-bold outline-none"
            style={{ marginLeft: "5rem", marginTop: "20px" }}
          />
        </div>
        <div>
          <ul
            className="flex gap-5 font-bold"
            style={{ marginLeft: "5rem", marginTop: "20px" }}
          >
            <li>
              <select
                className="text-center outline-none bg-transparent border-0 appearance-none relative"
                onChange={handleSelect}
              >
                <option value="">Features</option>
                <option value={fans}>
                  <p onClick={() => navigate("Electronics")}>Electronics</p>
                </option>
                <option value={fans}>
                  <p>Fashion</p>
                </option>
                <option value={fans}>
                  <p>Home and Garden</p>
                </option>
              </select>
            </li>
            <NavLink to="/">Home</NavLink>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/About">AboutUs</NavLink>
            </li>
            <li>
              <NavLink to="/SignUp">SignUp</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navigation;
