import "./Home.css";
import { useNavigate } from "react-router-dom";
const OverViewSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h3 className="container text-center">
          Welcome to MaceeMarketHub, <br /> your ultimate platform for seamless
          market experiences. <br /> MaceeMarketHub is a cutting-edge solution
          designed to revolutionize the way businesses and individuals connect
          interact, and thrive in <br /> the market. Our innovative platform
          empowers users to explore, discover, and leverage market opportunities
          with ease.
        </h3>
      </div>
      <div>
        <h1 className="font-bold text-center text-lg text-gray-700 pb-5">
          FEATURED PRODUCTS
        </h1>
        <div className="flex justify-center items-center gap-10 mb-10 ">
          <div
            className="bg-gray-500 rounded-t-lg cursor-pointer"
            onClick={() => navigate("Electronics")}
          >
            <img
              src="../src/assets/men clothes.jpg"
              alt="img1"
              className="rounded-lg"
              style={{ height: "70vh" }}
            />
            <p className="text-center font-bold text-lg text-white">
              Our Electronics
            </p>
            <p className="text-white font-bold text-sm text-center">
              Discover top-quality electronics from
              <br /> trusted suppliers
            </p>
          </div>
          <div
            className="bg-gray-500 rounded-t-lg cursor-pointer"
            onClick={() => navigate("Fashion")}
          >
            <img
              src="../src/assets/men clothes.jpg"
              alt="img2"
              className="rounded-lg"
              style={{ height: "70vh" }}
            />
            <p className="text-center font-bold text-lg text-white">
              Our Fashion
            </p>
            <p className="text-white font-bold text-sm text-center">
              Explore trending fashion products from
              <br /> emerging and established brands
            </p>
          </div>
          <div
            className="bg-gray-500 rounded-t-lg cursor-pointer"
            onClick={() => navigate("HomeGarden")}
          >
            <img
              src="../src/assets/men clothes.jpg"
              alt="img3"
              className="rounded-lg"
              style={{ height: "70vh" }}
            />
            <p className="text-center font-bold text-lg text-white">
              Our Home and Garden
            </p>
            <p className="text-white font-bold text-sm text-center">
              Find unique home and garden products
              <br /> to elevate your space
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default OverViewSection;
