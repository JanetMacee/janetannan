import { Helmet } from "react-helmet";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Welcome to Selby Unigue</title>
        <link rel="icon" type="image/png" href="./src/assets/logo.png"></link>
      </Helmet>
      <div
        className="ml-10 text-white absolute top-3"
        style={{ display: "flex" }}
      >
        <div>
          <img src="./src/assets/logo.png" alt="logo" />
        </div>
        <div style={{ position: "absolute", left: "100px" }}>
          <h1>
            <span className="uppercase font-bold leading-none">Selby</span>{" "}
            <br /> Unique Institute
          </h1>
        </div>
      </div>
      <div>
        <Welcome />
      </div>
      <div>
        <Content />
      </div>
    </>
  );
};
const Welcome = () => {
  return (
    <>
      <div style={{ display: "flex", marginLeft: "200px", marginTop: "100px" }}>
        <div>
          <img
            src="./src/assets/max-titov.jpg"
            alt="student"
            style={{ width: "100%", height: "50vh" }}
          />
        </div>
        <div style={{ position: "absolute", left: "500px", color: "white" }}>
          <h2 className="font-bold uppercase text-lg selby">
            Welcome To<span className="text-blue-400 uni"> Selby Unique</span>
          </h2>
          <p>
            Let us think of education as the means of developing our greatest
            abilities,because in
            <br />
            each of us there is a private hope and dream which,fulfilled,can be
            translated into
            <br />
            benefit for everyone and greater strength for our nation.
          </p>
          <button
            type="button"
            className="bg-yellow-400 text-white rounded-sm p-1 mt-2 font-bold outline-none"
          >
            TAKE A TOUR
          </button>
        </div>
      </div>
      <div
        style={{
          marginLeft: "150px",
          display: "flex",
          height: "14rem",
          position: "absolute",
          top: "25rem",
        }}
        className="sct"
      >
        <div className="student">
          <h3 className="py-20 text-white ml-5">
            <span
              style={{
                fontWeight: "bolder",
                fontSize: "20px",
                textTransform: "uppercase",
              }}
            >
              student
            </span>
            <br />
            events
          </h3>
        </div>
        <div className="classroom">
          <h3 className="py-20 text-white ml-5">
            <span
              style={{
                fontWeight: "bolder",
                fontSize: "20px",
                textTransform: "uppercase",
              }}
            >
              classroom
            </span>
            <br />
            stories
          </h3>
        </div>
        <div className="teacher">
          <h3 className="py-20 text-white ml-5">
            <span
              style={{
                fontWeight: "bolder",
                fontSize: "20px",
                textTransform: "uppercase",
              }}
            >
              teachers
            </span>
            <br />
            profile
          </h3>
        </div>
      </div>
    </>
  );
};
const Content = () => {
  return (
    <>
      <div
        style={{
          paddingTop: "17rem",
          paddingLeft: "9.5rem",
        }}
        className="bg-gray-100 grandmaster"
      >
        {" "}
        {/*main div*/}
        <div>
          <div>
            <p>Grandmaster Talk</p>
            <h3 className="uppercase font-bold" style={{ fontSize: "20px" }}>
              education is the <br /> most powerful weapon
            </h3>
            <p>
              Our students are talented,hard working and full of good ideas.We
              encourage and <br />
              empower them to bring their ideasto life.Hands-on opportunities
              are what we&apos;re all
              <br />
              about.Our students are busy doing things that matter.Take a look
              at the
              <br />
              opportunities you&apos;ll have at selby Unigue.The task of the
              modern educator is not To
              <br /> cut down jungles,but to irrigate deserts.
            </p>
            <h3>signature</h3>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "17px",
                paddingBottom: "5rem",
              }}
            >
              {" "}
              Macee Khalid
            </p>
          </div>
        </div>
        {/*<div style={{ position: "absolute", left: "55em" }}>
          <div style={{}}>
            <img src="./src/assets/men clothes.jpg" alt="men" />
          </div>
          <div style={{}}>
            <img src="./src/assets/men clothes.jpg" alt="men" />
            <img src="./src/assets/men clothes.jpg" alt="men" />
          </div>
        </div>*/}
      </div>
      <div className="py-10 ">
        <h3 className="uppercase font-bold text-center">
          we have faith in our studnt future
        </h3>
        <p className="text-center">
          Our studentsbare talented,hard working and full of good ideas.We
          encourage and empower them to
          <br /> bring their ideas to life.Hands-on opportunities are what
          we&apos;re all about
        </p>
        <div
          className="flex my-20 text-center"
          style={{ marginLeft: "9.5rem", marginRight: "9.5rem" }}
        >
          <div className="me">
            <img
              src="./src/assets/men clothes.jpg"
              alt="empower"
              style={{ marginLeft: "7rem" }}
            />
            <h3>Empower</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              itaque.
            </p>
          </div>
          <div className="me">
            <img
              src="./src/assets/men clothes.jpg"
              alt="Engage"
              style={{ marginLeft: "7rem" }}
            />
            <h3>Empower</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, voluptatem.
            </p>
          </div>
          <div className="me">
            <img
              src="./src/assets/men clothes.jpg"
              alt="Engage"
              style={{ marginLeft: "7rem" }}
            />
            <h3>Empower</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, voluptatem.
            </p>
          </div>
          <div className="me">
            <img
              src="./src/assets/men clothes.jpg"
              alt="Engage"
              style={{ marginLeft: "7rem" }}
            />
            <h3>Empower</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, voluptatem.
            </p>
          </div>
        </div>
        <div
          className=" flex more justify-center pt-3 pb-3"
          style={{ marginLeft: "9.5rem", marginRight: "9.5rem" }}
        >
          <div>
            <img src="./src/assets/men clothes,jpg" alt="" />
          </div>
          <div>
            <h3 className="uppercase font-bold text-white">
              our students are talented
            </h3>
            <p className="text-white">
              passionate,hard-working and full of good ideas.
            </p>
          </div>
          <div>
            <button
              className="bg-yellow-400 text-white rounded-sm p-1 mt-2 font-bold"
              style={{ marginLeft: "20rem" }}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-10 ">
          <div>
            <h3 className="uppercase font-bold text-center">
              Academic calender
            </h3>
            <p className="text-center">
              Our students are talented,hard-working and full of good ideas.We
              encourage and empower them to <br />
              bring their ideas to life .Hand-on opportunities are what
              we&apos;re all about{" "}
              <a href="#" className="text-blue-800">
                View Full calender
              </a>
            </p>
          </div>
        </div>
        <div className="mt-10 achieve text-white pt-3 pb-3">
          <h3 className="text-center uppercase">
            our teachers and students achievements
          </h3>
          <div className="flex justify-center space-x-10 pt-3">
            <div>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginLeft: "25px",
                }}
              >
                1954
              </span>
              <p className="uppercase">year founded</p>
            </div>
            <div>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginLeft: "40px",
                }}
              >
                1954
              </span>
              <p className="uppercase">certified teachers</p>
            </div>
            <div>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginLeft: "50px",
                }}
              >
                2000
              </span>
              <p className="uppercase">graduated students</p>
            </div>
            <div>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginLeft: "37px",
                }}
              >
                1954
              </span>
              <p className="uppercase">awards winners</p>
            </div>
          </div>
        </div>
        <div className="pt-3">
          <h3 className="uppercase text-center">our latest news</h3>
          <div
            className="pt-3 flex  space-x-4 cursor-pointer"
            style={{ width: "75.99%", marginLeft: "9.5rem" }}
          >
            <div
              style={{
                backgroundColor: "white",
                boxShadow: "0px 0px 2px",
                paddingTop: "5px",
              }}
            >
              <h4 className="text-center">Admin Selby</h4>
              <img
                src="./src/assets/photo1.jpg"
                alt=""
                style={{ height: "28vh", width: "100%" }}
              />
              <h3 className="text-center font-bold">
                Apply for a community
                <br />
                Scholarships
              </h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                consequuntur!
              </p>
              <button className="text-orange-500 ml-20 pb-10 font-bold">
                Read More
              </button>
            </div>
            <div
              style={{
                backgroundColor: "white",
                boxShadow: "0px 0px 2px",
                paddingTop: "5px",
              }}
            >
              <h4 className="text-center">Admin Selby</h4>
              <img
                src="./src/assets/men clothes.jpg"
                alt=""
                style={{ height: "28vh", width: "100%" }}
              />
              <h3 className="text-center font-bold">
                Students were on a trip
                <br />
                istanbul,Turkey
              </h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                consequuntur!
              </p>
              <button className="text-orange-500 ml-20 pb-10 font-bold">
                Read More
              </button>
            </div>
            <div
              style={{
                backgroundColor: "white",
                boxShadow: "0px 0px 2px",
                paddingTop: "5px",
              }}
            >
              <h4 className="text-center">Admin Selby</h4>
              <img
                src="./src/assets/men clothes.jpg"
                alt=""
                style={{ height: "28vh", width: "100%" }}
              />
              <h3 className="text-center font-bold">
                Students were on a trip
                <br />
                istanbul,Turkey
              </h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                consequuntur!
              </p>
              <button className="text-orange-500 ml-20 pb-10 font-bold">
                Read More
              </button>
            </div>
            <div
              style={{
                backgroundColor: "white",
                boxShadow: "0px 0px 2px",
                paddingTop: "5px",
              }}
            >
              <h4 className="text-center">Admin Selby</h4>
              <img
                src="./src/assets/men clothes.jpg"
                alt=""
                style={{ height: "28vh", width: "100%" }}
              />
              <h3 className="text-center font-bold">
                Students were on a trip
                <br />
                istanbul,Turkey
              </h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                consequuntur!
              </p>
              <button className="text-orange-500 ml-20 pb-10 font-bold">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="flex pt-10">
          <div>
            <img
              src="./src/assets/men clothes.jpg"
              style={{ width: "100rem", height: "50vh" }}
            />
            <h3
              className="uppercase mt-10 font-medium"
              style={{ marginLeft: "9.5rem" }}
            >
              watch our video
            </h3>
            <p
              style={{
                marginLeft: "9.5rem",
                paddingTop: "2rem",
                fontSize: "1rem",
              }}
            >
              From the teachers,to the assistants,to the students,thereb is such
              a<br />
              family atmosphere that perfect for nurturing academic ability
              Lorem <br />
              ipsum dolor sit, amet consectetur adipisicing elit. Quo,
              exercitationem.
            </p>
            <button
              className="bg-orange-500 border py-2 px-4 mt-5 rounded-lg text-white font-bold"
              style={{ marginLeft: "9.5rem" }}
            >
              Learn More
            </button>
          </div>
          <div>
            <div className="flex">
              <div>
                <img
                  src="./src/assets/men clothes.jpg"
                  alt=""
                  style={{ width: "50rem", height: "25vh" }}
                />
                <img
                  src="./src/assets/men clothes.jpg"
                  alt=""
                  style={{ width: "50rem", height: "25vh" }}
                />
              </div>
              <div>
                <img
                  src="./src/assets/men clothes.jpg"
                  alt=""
                  style={{ width: "50rem", height: "25vh" }}
                />
                <img
                  src="./src/assets/men clothes.jpg"
                  alt=""
                  style={{ width: "50rem", height: "25vh" }}
                />
              </div>
            </div>
            <img
              src="./src/assets/men clothes.jpg"
              alt=""
              style={{ width: "30rem", height: "40vh", paddingTop: "30px" }}
            />
          </div>
        </div>
        <Newsletter />
      </div>
    </>
  );
};
import { useState } from "react";
import Footer from "../footer";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const handle = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <form>
        <div
          className="flex more justify-center mt-10 py-5 text-white gap-20"
          style={{ marginLeft: "9.5rem", marginRight: "9.5rem" }}
        >
          <div>
            <h3 className="uppercase font-bold">
              get the latestnews from selby
            </h3>
            <p>join our Newsletter</p>
          </div>
          <div>
            <input
              className="outline-none text-black py-3 px-5 rounded-lg"
              type="email"
              value={email}
              placeholder="Enter your e-mail address"
              onChange={handle}
            />
            <button
              type="button"
              className="ml-5 bg-orange-500 rounded-lg py-3 px-5 outline-none font-bold"
            >
              subscribe
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};
export default Home;
