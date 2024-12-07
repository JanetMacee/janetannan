import Footer from "../footer";

const About = () => {
  return (
    <div>
      <div>
        <div>
          <h1 className="text-white text-center my-20 font-bold">About Us</h1>
        </div>
        <div className="flex bg-white py-10 my-10 gap-10" style={{}}>
          <div style={{ marginLeft: "13.5rem" }}>
            <img
              src="./src/assets/men clothes.jpg"
              alt=""
              style={{ width: "450vh", height: "37vh" }}
            />
          </div>
          <div style={{ marginRight: "9.5rem" }}>
            <h3 className="text-blue-300">About us</h3>
            <h2 className="text-black font-bold" style={{ fontSize: "20px" }}>
              We Have The Best Instructors
              <br />
              Available In Selby Unique
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              dicta aliquid, non laboriosam rem ex.
            </p>
            <div className="flex my-5">
              <div className="flex">
                <div>
                  <img src="./src/assets/men clothes.jpg" alt="" />
                </div>
                <div>
                  <h5 style={{ position: "absolute", left: "45rem" }}>
                    Online Tutoring
                  </h5>
                </div>
              </div>
              <div className="flex">
                <div>
                  <img src="./src/assets/men clothes.jpg" alt="" />
                </div>
                <div>
                  <h5 style={{ position: "absolute", left: "59.9rem" }}>
                    9+ courses
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex my-5">
              <div className="flex">
                <div>
                  <img src="./src/assets/men clothes.jpg" alt="" />
                </div>
                <div>
                  <h5 style={{ position: "absolute", left: "45rem" }}>
                    Online Tutoring
                  </h5>
                </div>
              </div>
              <div className="flex">
                <div>
                  <img src="./src/assets/men clothes.jpg" alt="" />
                </div>
                <div>
                  <h5 style={{ position: "absolute", left: "59.9rem" }}>
                    9+ courses
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*testimonials*/}
      <div
        className="bg-gray-100 pt-10"
        style={{ position: "relative", bottom: "2.5rem" }}
      >
        <h3 className="text-blue-300 text-center">Testimonials</h3>
        <h2 className="font-bold text-xl pt-2 text-center">
          What Did Our Students Say About Us?
        </h2>
        <p className="text-center">
          In selby <span>unique institute </span> we do our maximum best and
          provide our prestigious students with <br /> nothing but the best of
          everything they need.Listen to our students.
        </p>
        {/*1st testmonial*/}
        <div
          className="flex gap-5"
          style={{ marginLeft: "13.5rem", marginRight: "9.3rem" }}
        >
          <div className="bg-white p-5 my-8">
            <p>
              I love my time at selby unique.The supportive teachers and
              engaging curriculum <br /> helped me grow academically and
              personally
            </p>
            <div className="flex pt-7" style={{}}>
              <div className="">
                <img
                  src="./src/assets/men clothes.jpg"
                  alt=""
                  className="rounded-full"
                  style={{ width: "15%" }}
                />
              </div>
              <div style={{ position: "absolute", right: "57rem" }}>
                <h2 className="font-bold">Macee Khalid</h2>
                <h3>Developer</h3>
              </div>
            </div>
          </div>
          {/*2nd testimonial*/}
          <div className="bg-white p-5 my-8">
            <p>
              The faulty at selby unique genuinely care about their
              student&apos;s success.They pushed me
              <br /> to reach my full potentials and beyond
            </p>
            <div className="flex pt-7" style={{}}>
              <div className="">
                <img
                  src="./src/assets/men clothes.jpg"
                  alt=""
                  className="rounded-full"
                  style={{ width: "15%" }}
                />
              </div>
              <div style={{ position: "absolute", right: "37rem" }}>
                <h2 className="font-bold">Macee Khalid</h2>
                <h3>Developer</h3>
              </div>
            </div>
          </div>
          {/*3rd testimonial*/}
          <div className="bg-white p-5 my-8">
            <p>
              I was hesitant at the first, but selby unique became my second
              family.The memories and
              <br /> experience i had here are unforgettable
            </p>
            <div className="flex pt-7" style={{}}>
              <div className="">
                <img
                  src="./src/assets/men clothes.jpg"
                  alt=""
                  className="rounded-full"
                  style={{ width: "15%" }}
                />
              </div>
              <div style={{ position: "absolute", right: "17rem" }}>
                <h2 className="font-bold">Macee Khalid</h2>
                <h3>Developer</h3>
              </div>
            </div>
          </div>
        </div>
        {/*end of testimonial*/}
        <div
          className="flex py-10"
          style={{ marginLeft: "13.5rem", marginRight: "9.3rem" }}
        >
          <div className="flex">
            <div>
              <img
                src="./src/assets/men clothes.jpg"
                alt=""
                className="rounded-xl"
                style={{ width: "13%" }}
              />
            </div>
            <div style={{ position: "absolute", left: "15.9rem" }}>
              <h2 className="font-bold text-xl">
                1,250<span className="text-blue-400">+</span>
              </h2>
              <p>Activate Students</p>
            </div>
          </div>
          {/*2nd done*/}
          <div className="flex">
            <div>
              <img
                src="./src/assets/men clothes.jpg"
                alt=""
                className="rounded-xl"
                style={{ width: "13%" }}
              />
            </div>
            <div style={{ position: "absolute", left: "30.7rem" }}>
              <h2 className="font-bold text-xl">
                1,250<span className="text-blue-400">+</span>
              </h2>
              <p>Activate Students</p>
            </div>
          </div>
          {/*3rd done*/}
          <div className="flex">
            <div>
              <img
                src="./src/assets/men clothes.jpg"
                alt=""
                className="rounded-xl"
                style={{ width: "13%" }}
              />
            </div>
            <div style={{ position: "absolute", left: "45.3rem" }}>
              <h2 className="font-bold text-xl">
                1,250<span className="text-blue-400">+</span>
              </h2>
              <p>Activate Students</p>
            </div>
          </div>
          {/*4th done*/}
          <div className="flex">
            <div>
              <img
                src="./src/assets/men clothes.jpg"
                alt=""
                className="rounded-xl"
                style={{ width: "13%" }}
              />
            </div>
            <div style={{ position: "absolute", left: "60rem" }}>
              <h2 className="font-bold text-xl">
                1,250<span className="text-blue-400">+</span>
              </h2>
              <p>Activate Students</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h3 className="text-blue-300 text-center">Our Teacher</h3>
        <h2 className="font-bold text-xl text-center">Meet With Expert Team</h2>
        <p className="text-center pt-3">
          Selby unique provides you with expert teachers who are willingly to
          <br />
          assist each and every person at selby unique
        </p>
        {/*teachers*/}
        <div
          className="flex py-8"
          style={{ marginLeft: "13.5rem", marginRight: "9.5rem" }}
        >
          <div>
            <img
              src="./src/assets/men clothes.jpg"
              alt=""
              style={{ width: "80%", borderRadius: "3px" }}
            />
          </div>
          <div>
            <img
              src="./src/assets/men clothes.jpg"
              alt=""
              style={{ width: "80%", borderRadius: "3pxs" }}
            />
          </div>
          <div>
            <img
              src="./src/assets/men clothes.jpg"
              alt=""
              style={{ width: "80%", borderRadius: "3px" }}
            />
          </div>
          <div>
            <img
              src="./src/assets/men clothes.jpg"
              alt=""
              style={{ width: "80%", borderRadius: "3px" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;
