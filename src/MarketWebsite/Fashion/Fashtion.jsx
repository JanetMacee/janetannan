import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const Fashion = () => {
  return (
    <>
      <Helmet>
        <title>Fashion</title>
        <link rel="icon" type="image/png" href="./src/assets/logo.png"></link>
      </Helmet>
      <div className="bg-green-300 rounded-2xl mx-1">
        <div className="flex justify-center items-center gap-80">
          <div>
            <h1 className="font-bold text-5xl pb-5">
              Quality Electronics
              <br />
              Big Discount
            </h1>
            <p className="pb-5">Save up to 50% off on your first order</p>
            <div>
              {" "}
              <input
                type="email"
                placeholder="Your Email Adderss"
                className="p-3 font-bold text-lg rounded-full outline-none"
              />
              <button
                type="button"
                className="bg-blue-700 rounded-full p-3 font-bold text-lg absolute left-80"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <img src="../src/assets/men clothes.jpg" alt="" className="w-80" />
          </div>
        </div>
      </div>
      <div className="pt-10">
        <h2 className="font-bold text-xl">Featured Categories</h2>
        <div className="flex justify-center items-center gap-5 pt-5">
          <div className="bg-blue-300 pt-5 px-5 pb-2 rounded-lg place-items-center grid">
            <img src="../src/assets/men clothes.jpg" alt="" className="w-10" />
            <h4 className="font-bold text-lg">Fans</h4>
            <p>11 items</p>
          </div>
          {/*2nd*/}
          <div className="bg-yellow-200 pt-5 px-5 pb-2 rounded-lg place-items-center grid">
            <img src="../src/assets/men clothes.jpg" alt="" className="w-10" />
            <h4 className="font-bold text-lg">Phones</h4>
            <p>8 items</p>
          </div>
          {/*3rd*/}
          <div className="bg-green-200 pt-5 px-5 pb-2 rounded-lg place-items-center grid">
            <img src="../src/assets/men clothes.jpg" alt="" className="w-10" />
            <h4 className="font-bold text-lg">Tv Sets</h4>
            <p>3 items</p>
          </div>
          {/*4th*/}
          <div className="bg-pink-200 pt-5 px-5 pb-2 rounded-lg place-items-center grid">
            <img src="../src/assets/men clothes.jpg" alt="" className="w-10" />
            <h4 className="font-bold text-lg">Radios</h4>
            <p>11 items</p>
          </div>
          {/*5th*/}
          <div className="bg-violet-200 pt-5 px-5 pb-2 rounded-lg place-items-center grid">
            <img src="../src/assets/men clothes.jpg" alt="" className="w-10" />
            <h4 className="font-bold text-lg">Irons</h4>
            <p>14 items</p>
          </div>
          {/*7*/}
          <div className="bg-red-200 pt-5 px-5 pb-2 rounded-lg place-items-center grid">
            <img src="../src/assets/men clothes.jpg" alt="" className="w-10" />
            <h4 className="font-bold text-lg">Fridge</h4>
            <p>11 items</p>
          </div>
          {/*8th*/}
          <div className="bg-gray-200 pt-5 px-5 pb-2 rounded-lg place-items-center grid">
            <img src="../src/assets/men clothes.jpg" alt="" className="w-10" />
            <h4 className="font-bold text-lg">Heaters</h4>
            <p>11 items</p>
          </div>
          {/*9th*/}
          <div className="bg-lime-200 pt-5 px-5 pb-2 rounded-lg place-items-center grid">
            <img src="../src/assets/men clothes.jpg" alt="" className="w-10" />
            <h4 className="font-bold text-lg">Drives</h4>
            <p>11 items</p>
          </div>
          {/*10th*/}
          <div className="bg-indigo-200 pt-5 px-5 pb-2 rounded-lg place-items-center grid">
            <img src="../src/assets/men clothes.jpg" alt="" className="w-10" />
            <h4 className="font-bold text-lg">Speakers</h4>
            <p>11 items</p>
          </div>
          {/*11th*/}
          <div className="bg-purple-200 pt-5 px-5 pb-2 rounded-lg place-items-center grid">
            <img src="../src/assets/men clothes.jpg" alt="" className="w-10" />
            <h4 className="font-bold text-lg">latops</h4>
            <p>11 items</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10">
        <div className="flex justify-center items-center bg-orange-300 p-10 my-5 rounded-lg gap-5">
          <div>
            <h2 className="font-bold text-xl">
              Everyday quality & <br />
              Affordable with our
              <br />
              Products
            </h2>
            <button
              type="button"
              className="border-0 outline-none bg-blue-500 hover:bg-blue-700 py-2 px-3 rounded-lg font-bold text-lg text-white"
            >
              {" "}
              Shop Now
            </button>
          </div>
          <div>
            <img src="../src/assets/men clothes.jpg" alt="" className="w-20" />
          </div>
        </div>
        {/*2nd*/}
        <div className="flex justify-center items-center bg-pink-300 p-10 my-5 rounded-lg gap-5">
          <div>
            <h2 className="font-bold text-xl">
              Everyday quality & <br />
              Affordable with our
              <br />
              Products
            </h2>
            <button
              type="button"
              className="border-0 outline-none bg-blue-500 hover:bg-blue-700 py-2 px-3 rounded-lg font-bold text-lg text-white"
            >
              {" "}
              Shop Now
            </button>
          </div>
          <div>
            <img src="../src/assets/men clothes.jpg" alt="" className="w-20" />
          </div>
        </div>
        {/*3rd*/}
        <div className="flex justify-center items-center bg-green-300 p-10 my-5 rounded-lg gap-5">
          <div>
            <h2 className="font-bold text-xl">
              Everyday quality & <br />
              Affordable with our
              <br />
              Products
            </h2>
            <button
              type="button"
              className="border-0 outline-none bg-blue-500 hover:bg-blue-700 py-2 px-3 rounded-lg font-bold text-lg text-white"
            >
              {" "}
              Shop Now
            </button>
          </div>
          <div>
            <img src="../src/assets/men clothes.jpg" alt="" className="w-20" />
          </div>
        </div>
      </div>
      <div className="pb-5">
        <h2 className="font-bold text-lg">Popular Products</h2>
        <div className="flex mx-5 pt-5 gap-4 flex-wrap">
          <div
            className="bg-white rounded-lg grid place-items-center p-2 cursor-pointer"
            style={{ boxShadow: "0px 0px 2px 0px" }}
          >
            <button
              className="bg-green-500 rounded-tl-lg rounded-br-2xl p-2 ml-10  bottom-2"
              style={{ position: "relative", right: "70.9px" }}
            >
              13%
            </button>
            <img src="../src/assets/men clothes.jpg" alt="" className="w-20" />
            <h3 className="font-bold text-lg">Ceilling Fans</h3>
            <p>
              By <strong className="text-green-400">MaceeGudgets</strong>
            </p>
            <p className="text-green-400">
              <span className="underline">$28.88</span>{" "}
              <del className="text-gray-400">$52.80</del>
            </p>
          </div>
          <div
            className="bg-white rounded-lg grid place-items-center p-2 cursor-pointer"
            style={{ boxShadow: "0px 0px 2px 0px" }}
          >
            <button
              className="bg-green-500 rounded-tl-lg rounded-br-2xl p-2 ml-10  bottom-2"
              style={{ position: "relative", right: "70.9px" }}
            >
              13%
            </button>
            <img src="../src/assets/men clothes.jpg" alt="" className="w-20" />
            <h3 className="font-bold text-lg">Ceilling Fans</h3>
            <p>
              By <strong className="text-green-400">MaceeGudgets</strong>
            </p>
            <p className="text-green-400">
              <span className="underline">$28.88</span>{" "}
              <del className="text-gray-400">$52.80</del>
            </p>
          </div>
          <div
            className="bg-white rounded-lg grid place-items-center p-2 cursor-pointer"
            style={{ boxShadow: "0px 0px 2px 0px" }}
          >
            <button
              className="bg-green-500 rounded-tl-lg rounded-br-2xl p-2 ml-10  bottom-2"
              style={{ position: "relative", right: "70.9px" }}
            >
              13%
            </button>
            <img src="../src/assets/men clothes.jpg" alt="" className="w-20" />
            <h3 className="font-bold text-lg">Ceilling Fans</h3>
            <p>
              By <strong className="text-green-400">MaceeGudgets</strong>
            </p>
            <p className="text-green-400">
              <span className="underline">$28.88</span>{" "}
              <del className="text-gray-400">$52.80</del>
            </p>
          </div>
          <div
            className="bg-white rounded-lg grid place-items-center p-2 cursor-pointer"
            style={{ boxShadow: "0px 0px 2px 0px" }}
          >
            <button
              className="bg-green-500 rounded-tl-lg rounded-br-2xl p-2 ml-10  bottom-2"
              style={{ position: "relative", right: "70.9px" }}
            >
              13%
            </button>
            <img src="../src/assets/men clothes.jpg" alt="" className="w-20" />
            <h3 className="font-bold text-lg">Ceilling Fans</h3>
            <p>
              By <strong className="text-green-400">MaceeGudgets</strong>
            </p>
            <p className="text-green-400">
              <span className="underline">$28.88</span>{" "}
              <del className="text-gray-400">$52.80</del>
            </p>
          </div>
          <div
            className="bg-white rounded-lg grid place-items-center p-2 cursor-pointer"
            style={{ boxShadow: "0px 0px 2px 0px" }}
          >
            <button
              className="bg-green-500 rounded-tl-lg rounded-br-2xl p-2 ml-10  bottom-2"
              style={{ position: "relative", right: "70.9px" }}
            >
              13%
            </button>
            <img src="../src/assets/men clothes.jpg" alt="" className="w-20" />
            <h3 className="font-bold text-lg">Ceilling Fans</h3>
            <p>
              By <strong className="text-green-400">MaceeGudgets</strong>
            </p>
            <p className="text-green-400">
              <span className="underline">$28.88</span>{" "}
              <del className="text-gray-400">$52.80</del>
            </p>
          </div>
          <div
            className="bg-white rounded-lg grid place-items-center p-2 cursor-pointer"
            style={{ boxShadow: "0px 0px 2px 0px" }}
          >
            <button
              className="bg-green-500 rounded-tl-lg rounded-br-2xl p-2 ml-10  bottom-2"
              style={{ position: "relative", right: "70.9px" }}
            >
              13%
            </button>
            <img src="../src/assets/men clothes.jpg" alt="" className="w-20" />
            <h3 className="font-bold text-lg">Ceilling Fans</h3>
            <p>
              By <strong className="text-green-400">MaceeGudgets</strong>
            </p>
            <p className="text-green-400">
              <span className="underline">$28.88</span>{" "}
              <del className="text-gray-400">$52.80</del>
            </p>
          </div>
          <div
            className="bg-white rounded-lg grid place-items-center p-2 cursor-pointer"
            style={{ boxShadow: "0px 0px 2px 0px" }}
          >
            <button
              className="bg-green-500 rounded-tl-lg rounded-br-2xl p-2 ml-10  bottom-2"
              style={{ position: "relative", right: "70.9px" }}
            >
              13%
            </button>
            <img src="../src/assets/men clothes.jpg" alt="" className="w-20" />
            <h3 className="font-bold text-lg">Ceilling Fans</h3>
            <p>
              By <strong className="text-green-400">MaceeGudgets</strong>
            </p>
            <p className="text-green-400">
              <span className="underline">$28.88</span>{" "}
              <del className="text-gray-400">$52.80</del>
            </p>
          </div>
          <div
            className="bg-white rounded-lg grid place-items-center p-2 cursor-pointer"
            style={{ boxShadow: "0px 0px 2px 0px" }}
          >
            <button
              className="bg-green-500 rounded-tl-lg rounded-br-2xl p-2 ml-10  bottom-2"
              style={{ position: "relative", right: "70.9px" }}
            >
              13%
            </button>
            <img src="../src/assets/men clothes.jpg" alt="" className="w-20" />
            <h3 className="font-bold text-lg">Ceilling Fans</h3>
            <p>
              By <strong className="text-green-400">MaceeGudgets</strong>
            </p>
            <p className="text-green-400">
              <span className="underline">$28.88</span>{" "}
              <del className="text-gray-400">$52.80</del>
            </p>
          </div>
          <div
            className="bg-white rounded-lg grid place-items-center p-2 cursor-pointer"
            style={{ boxShadow: "0px 0px 2px 0px" }}
          >
            <button
              className="bg-green-500 rounded-tl-lg rounded-br-2xl p-2 ml-10  bottom-2"
              style={{ position: "relative", right: "70.9px" }}
            >
              13%
            </button>
            <img src="../src/assets/men clothes.jpg" alt="" className="w-20" />
            <h3 className="font-bold text-lg">Ceilling Fans</h3>
            <p>
              By <strong className="text-green-400">MaceeGudgets</strong>
            </p>
            <p className="text-green-400">
              <span className="underline">$28.88</span>{" "}
              <del className="text-gray-400">$52.80</del>
            </p>
          </div>
          <div
            className="bg-white rounded-lg grid place-items-center p-2 cursor-pointer"
            style={{ boxShadow: "0px 0px 2px 0px" }}
          >
            <button
              className="bg-green-500 rounded-tl-lg rounded-br-2xl p-2 ml-10  bottom-2"
              style={{ position: "relative", right: "70.9px" }}
            >
              13%
            </button>
            <img src="../src/assets/men clothes.jpg" alt="" className="w-20" />
            <h3 className="font-bold text-lg">Ceilling Fans</h3>
            <p>
              By <strong className="text-green-400">MaceeGudgets</strong>
            </p>
            <p className="text-green-400">
              <span className="underline">$28.88</span>{" "}
              <del className="text-gray-400">$52.80</del>
            </p>
          </div>

          <div
            className="bg-white rounded-lg grid place-items-center p-2 cursor-pointer"
            style={{ boxShadow: "0px 0px 2px 0px" }}
          >
            <button
              className="bg-green-500 rounded-tl-lg rounded-br-2xl p-2 ml-10  bottom-2"
              style={{ position: "relative", right: "70.9px" }}
            >
              13%
            </button>
            <img src="../src/assets/men clothes.jpg" alt="" className="w-20" />
            <h3 className="font-bold text-lg">Ceilling Fans</h3>
            <p>
              By <strong className="text-green-400">MaceeGudgets</strong>
            </p>
            <p className="text-green-400">
              <span className="underline">$28.88</span>{" "}
              <del className="text-gray-400">$52.80</del>
            </p>
          </div>

          <div
            className="bg-white rounded-lg grid place-items-center p-2 cursor-pointer"
            style={{ boxShadow: "0px 0px 2px 0px" }}
          >
            <button
              className="bg-green-500 rounded-tl-lg rounded-br-2xl p-2 ml-10  bottom-2"
              style={{ position: "relative", right: "70.9px" }}
            >
              13%
            </button>
            <img src="../src/assets/men clothes.jpg" alt="" className="w-20" />
            <h3 className="font-bold text-lg">Ceilling Fans</h3>
            <p>
              By <strong className="text-green-400">MaceeGudgets</strong>
            </p>
            <p className="text-green-400">
              <span className="underline">$28.88</span>{" "}
              <del className="text-gray-400">$52.80</del>
            </p>
          </div>
          <div
            className="bg-white rounded-lg grid place-items-center p-2 cursor-pointer"
            style={{ boxShadow: "0px 0px 2px 0px" }}
          >
            <button
              className="bg-green-500 rounded-tl-lg rounded-br-2xl p-2 ml-10  bottom-2"
              style={{ position: "relative", right: "70.9px" }}
            >
              13%
            </button>
            <img src="../src/assets/men clothes.jpg" alt="" className="w-20" />
            <h3 className="font-bold text-lg">Ceilling Fans</h3>
            <p>
              By <strong className="text-green-400">MaceeGudgets</strong>
            </p>
            <p className="text-green-400">
              <span className="underline">$28.88</span>{" "}
              <del className="text-gray-400">$52.80</del>
            </p>
          </div>
          <div
            className="bg-white rounded-lg grid place-items-center p-2 cursor-pointer"
            style={{ boxShadow: "0px 0px 2px 0px" }}
          >
            <button
              className="bg-green-500 rounded-tl-lg rounded-br-2xl p-2 ml-10  bottom-2"
              style={{ position: "relative", right: "70.9px" }}
            >
              13%
            </button>
            <img src="../src/assets/men clothes.jpg" alt="" className="w-20" />
            <h3 className="font-bold text-lg">Ceilling Fans</h3>
            <p>
              By <strong className="text-green-400">MaceeGudgets</strong>
            </p>
            <p className="text-green-400">
              <span className="underline">$28.88</span>{" "}
              <del className="text-gray-400">$52.80</del>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Fashion;
