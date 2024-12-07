import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h3 className="bg-blue-300 text-center text-lg font-bold text-white">
          &copy;2024 information
        </h3>
        <div className="bg-blue-400 flex justify-center items-center text-white font-bold text-lg gap-10">
          <div className="text-center">
            <h2 className="text-gray-800">Contact Us</h2>
            <ul>
              <li>Address:123 Main St</li>
              <li>Phone:+233-200-410-725</li>
              <li>
                <a href="#" className="hover:text-gray-800 cursor-pointer">
                  Email:MaceeMarket@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h2 className="text-gray-800">Useful Links</h2>
            <ul>
              <li>
                <p
                  onClick={() => navigate("/")}
                  className="hover:text-gray-800 cursor-pointer"
                >
                  Home
                </p>
              </li>
              <li>
                <p
                  onClick={() => navigate("/About")}
                  className="hover:text-gray-800 cursor-pointer"
                >
                  About Us
                </p>
              </li>
              <li>
                <p
                  onClick={() => navigate("/SignUp")}
                  className="hover:text-gray-800 cursor-pointer"
                >
                  SignUp
                </p>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h2 className="text-gray-800">Stay Connected</h2>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-800 cursor-pointer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 cursor-pointer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 cursor-pointer">
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
