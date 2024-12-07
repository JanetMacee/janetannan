import Footer from "../Footer/Footer";
import { useState } from "react";
import "./contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [textarea, setTextarea] = useState("");
  /*const HandleSubmit = () => {
    if (name == "" || email == "" || textarea) {
    }
  };*/
  return (
    <div className="contactImg pt-20">
      <h1 className="text-center text-white font-bold text-2xl">
        Contact <strong>Us</strong>
      </h1>
      <div className="flex justify-center items-center gap-4 bg-white py-10 mt-5">
        <div>
          <h1 className="text-2xl font-bold">Get In Touch</h1>
          <p>
            We are ever ready to assist you achieve your dreams.
            <br />
            Get in touch with us
          </p>
          <div className="flex justify-center items- gap-8">
            <div>
              <div className="flex gap-3">
                <div>
                  <img src="../src/assets/icon4.png" alt="" className="w-10" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">Phone Number</h2>
                  <p>0200410725</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div>
                  <img src="../src/assets/icon2.png" alt="" className="w-10" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">Website</h2>
                  <p>MaceeMarket</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="flex gap-3">
                  <div>
                    <img
                      src="../src/assets/email.png"
                      alt=""
                      className="w-10"
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">Email Address</h2>
                    <p>maceekhalid@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div>
                    <img
                      src="../src/assets/welcome.png"
                      alt=""
                      className="w-10"
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">Address</h2>
                    <p>Accra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form>
          <div className="flex justify-center items-center gap-5">
            <div>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                style={{
                  border: "2px solid",
                  borderColor: "blueviolet",
                  width: "40vh",
                }}
                className="py-2 pl-2 rounded-lg"
              />
            </div>
            <div>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                style={{
                  border: "2px solid",
                  borderColor: "blueviolet",
                  width: "40vh",
                }}
                className="py-2 pl-2 rounded-lg"
              />
            </div>
          </div>
          <div style={{ marginTop: "5px" }}>
            <input
              required
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Your Subject"
              style={{
                border: "2px solid",
                borderColor: "blueviolet",
                width: "100%",
              }}
              className="py-2 pl-2 rounded-lg"
            />
          </div>
          <div style={{ marginTop: "5px" }}>
            <textarea
              typeof="text"
              value={textarea}
              onChange={(e) => setTextarea(e.target.value)}
              placeholder="Your Message"
              style={{
                border: "2px solid",
                borderColor: "blueviolet",
                width: "100%",
              }}
              className="py-2 pl-2 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="border-0 outline-none bg-blue-500 hover:bg-blue-700 py-2 
            px-3 rounded-lg font-bold text-lg text-white"
          >
            Submit Button
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
