import Footer from "../Footer/Footer";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="About py-5">
        <h1 className="text-white text-center font-bold text-xl ">About Us</h1>
        <div className="flex justify-center items-center gap-7 py-10">
          <div>
            <h1 className="font-bold text-white">The Perfection</h1>
            <p className=" text-white">
              MaceeMarketHub provide, it&apos;s customers
              <br /> with the best and quality stuffs
            </p>
          </div>
          <div className="grid place-items-center">
            <img src="" alt="" />
            <h3 className="font-bold text-white">Free Shipping</h3>
            <p className=" text-white">
              We do free shipping for all our buyers
              <br />
              So dont worry about where you <br />
              Just order
            </p>
          </div>
          <div
            style={{ border: "1px solid yellow" }}
            className="grid place-items-center p-10"
          >
            <img src="" alt="" />
            <h3 className="font-bold text-white">24/7 support</h3>
            <p className="text-white">
              We provide 24/7 support to our customers
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="grid place-items-center">
            <h1 className="font-bold text-2xl text-yellow-500">13</h1>
            <p className="text-blue-400 font-bold">Years of Experience</p>
          </div>
          <div className="grid place-items-center">
            <h1 className="font-bold text-2xl text-yellow-500">20</h1>
            <p className="text-blue-400 font-bold">Product</p>
          </div>
          <div className="grid place-items-center">
            <h1 className="font-bold text-2xl text-yellow-500">100+</h1>
            <p className="text-blue-400 font-bold">Happy Customers</p>
          </div>
          <div className="grid place-items-center">
            <h1 className="font-bold text-2xl text-yellow-500">11</h1>
            <p className="text-blue-400 font-bold">Outlets</p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-gray-700 mt-10">
          <div>
            <img
              src="../src/assets/men clothes.jpg"
              alt=""
              className="w-80 h-40"
            />
          </div>
          <div className="pl-10">
            <h1 className="text-white font-bold text-xl">
              The New Fresh
              <br />
              Sensation
            </h1>
            <p></p>
            <button
              type="button"
              className="border-0 outline-none bg-blue-500 hover:bg-blue-700 py-2 px-3 rounded-lg font-bold text-lg text-white"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="text-white bg-gray-400 pt-20">
          <h1 className="text-center font-bold text-2xl pb-10">
            Peaks & Benefits
          </h1>
          <div className="flex justify-center items-center gap-20 pb-10">
            <div className="text-center">
              <img
                src="../src/assets/men clothes.jpg"
                alt=""
                className="w-40"
              />
              <h2 className="text-bold text-xl">Quick Payment</h2>
              <p></p>
            </div>
            <div className="text-center">
              <img
                src="../src/assets/men clothes.jpg"
                alt=""
                className="w-40"
              />
              <h2 className="text-bold text-xl">Affordable prices</h2>
              <p></p>
            </div>
            <div className="text-center">
              <img
                src="../src/assets/men clothes.jpg"
                alt=""
                className="w-40"
              />
              <h2 className="text-bold text-xl">Big Deals</h2>
              <p></p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default About;
