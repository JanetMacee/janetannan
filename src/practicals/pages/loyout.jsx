import { Outlet, Link } from "react-router-dom";
const Loyout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Info">Info</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Loyout;
