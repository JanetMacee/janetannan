import { Link } from "react-router-dom";
const RegisterButton = () => {
  return (
    <>
      <button className="rounded-lg text-white bg-green-500 px-2 py-3"><Link to="/Register" className="register-button">
        Register Now
      </Link></button>
    </>
  );
};
export default RegisterButton;
