import Footer from "../footer";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <>
      <motion.h2
        className="text-center text-white font-bold text-xl pt-20"
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: "100", delay: 0.2 }}
      >
        Contact <span className="text-blue-400">Us</span>
      </motion.h2>
      {/*start*/}
      <div className="flex mt-10 bg-white pt-10 pb-8">
        <div style={{ marginLeft: "13.5rem", marginRight: "9.4rem" }}>
          <h2 className="font-bold text-xl">
            Get In <span className="text-blue-300">Touch</span>
          </h2>
          <p>
            We are ever ready to assist you achieve your dreams.
            <br />
            Get in touch with us
          </p>
          <div className="flex pb-3">
            <div className="flex">
              <div>
                <img
                  src="./src/assets/men clothes.jpg"
                  alt=""
                  style={{ width: "20%" }}
                />
              </div>
              <div style={{ position: "absolute", left: "15.7rem" }}>
                <h3 className="font-bold text-sm">Phone Number</h3>
                <p>233-20041-0725</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <img
                  src="./src/assets/men clothes.jpg"
                  alt=""
                  style={{ width: "20%" }}
                />
              </div>
              <div style={{ position: "absolute", left: "25.9rem" }}>
                <h3 className="font-bold text-sm">Email Address</h3>
                <p>
                  <a href="#">selbyUnique@gmail.om</a>
                </p>
              </div>
            </div>
          </div>
          {/*trying something*/}
          <div className="flex">
            <div className="flex">
              <div>
                <img
                  src="./src/assets/men clothes.jpg"
                  alt=""
                  style={{ width: "20%" }}
                />
              </div>
              <div style={{ position: "absolute", left: "15.7rem" }}>
                <h3 className="font-bold text-sm">Address</h3>
                <p>Awutu Bawjiase</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <img
                  src="./src/assets/men clothes.jpg"
                  alt=""
                  style={{ width: "20%" }}
                />
              </div>
              <div style={{ position: "absolute", left: "25.9rem" }}>
                <h3 className="font-bold text-sm">Website</h3>
                <p>
                  <a href="#">www.selbyUnique.om</a>
                </p>
              </div>
            </div>
          </div>
          {/*end of trying out something*/}
        </div>
        {/*end of get in touch*/}
        <form>
          <div className="flex gap-3" style={{ marginRight: "9.5rem" }}>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                style={{
                  border: "2px solid",
                  borderColor: "blueviolet",
                  width: "35vh",
                }}
                className="py-2 pl-2 rounded-lg"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                style={{
                  border: "2px solid",
                  borderColor: "blueviolet",
                  width: "35vh",
                }}
                className="py-2 pl-2 rounded-lg"
              />
            </div>
          </div>
          <div style={{ marginTop: "5px" }}>
            <input
              type="text"
              placeholder="Youe Subject"
              style={{
                border: "2px solid",
                borderColor: "blueviolet",
                width: "74.7%",
              }}
              className="py-2 pl-2 rounded-lg"
            />
          </div>
          <div style={{ marginTop: "5px" }}>
            <textarea
              typeof="text"
              placeholder="Your Message"
              style={{
                border: "2px solid",
                borderColor: "blueviolet",
                width: "74.7%",
              }}
              className="py-2 pl-2 rounded-lg"
            />
          </div>
          <button
            type="button"
            className="bg-yellow-400 text-white rounded-sm p-1 mt-2 font-bold"
          >
            Submit Button
          </button>
        </form>
      </div>
      <div className="flex">
        <div style={{ marginLeft: "13.5rem", width: "100%" }}>
          <img
            src="./src/assets/men clothes.jpg"
            alt=""
            style={{ height: "32.8vh", width: "30%" }}
          />
        </div>
        <div style={{ position: "absolute", left: "42rem" }}>
          <h2 className="text-white text-2xl font-bold space-5">
            Consult the services you
            <br />
            <span className="text-blue-300">need now!</span>
          </h2>
          <p className="text-white">
            Which of our services do you care for.All of our services
            <br />
            are active
          </p>
          <div className="flex gap-5">
            <div>
              <ul>
                <li className="text-white font-bold">OnLine</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-white font-bold">ClassRoom</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex " style={{ marginBottom: "10rem" }}>
          <div style={{ marginLeft: "13.5rem", paddingTop: "10rem" }}>
            <h2 className="text-bold text-xl">
              Our Office <span className="text-blue-300">Located</span> at{" "}
              <br />
              Awutu Bawjiase
            </h2>
            <p>
              come directly to our office and let&apos;s have a chat <br /> on
              how we can help let your dreams come true
            </p>
          </div>
          <div style={{}}>
            <img
              src="./src/assets/men clothes.jpg"
              alt=""
              style={{
                width: "20%",
                position: "absolute",
                left: "53rem",
                top: "41rem",
                borderRadius: "2px",
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Contact;
