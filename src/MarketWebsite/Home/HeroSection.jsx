import "./Home.css";
const HeroSection = () => {
  return (
    <>
      <div className="Hero pt-40">
        <h1 className="font-bold text-2xl text-white text-center pb-3">
          Unlock the Power of MaceeMarketHub
        </h1>
        <h3 className="font-bold text-lg text-white text-center pb-3">
          Discover the ultimate market platform
        </h3>
        <div className="grid place-items-center">
          <button
            className="border-0 outline-none bg-blue-500 hover:bg-blue-700 py-2 px-3 rounded-lg font-bold text-lg text-white
        "
          >
            Discover More
          </button>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
