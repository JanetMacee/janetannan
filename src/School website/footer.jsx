import "../index.css";
const Footer = () => {
  return (
    <div>
      <div
        className="flex moreee gap-5 pl-10 py-5"
        style={{ width: "25%", position: "absolute", top: "17rem" }}
      >
        <div>
          <img
            src="./src/assets/men clothes.jpg"
            alt="logo"
            style={{ width: "8rem", height: "8vh" }}
          />
        </div>
        <div className="uppercase text-white">
          <h3 className="font-bold">selby</h3>
          <p>senior high school</p>
        </div>
      </div>
      <div className="flex justify-center more mt-10 gap-10 py-5">
        <div className="text-white uppercase">
          <h3 className="font-bold ">about</h3>
          <p>contact us</p>
          <p>location</p>
        </div>
        <div className="text-white uppercase">
          <h3 className="font-bold ">home</h3>
          <p>students</p>
          <p>teachers</p>
        </div>
        <div className="text-white uppercase">
          <h3 className="font-bold ">blog</h3>
          <p>latest news</p>
          <p>resources</p>
        </div>
        <div className="text-white uppercase">
          <h3 className="font-bold ">academic</h3>
          <p>calendar</p>
          <p>events</p>
        </div>
      </div>
      <div className="flex justify-center moree py-5 text-white">
        <h3 className=" capitalize">
          copyright 2024 |
          <span style={{ textTransform: "uppercase" }}>
            all rights reserved
          </span>
        </h3>
      </div>
    </div>
  );
};
export default Footer;
