import "./Signup.css";
import { useState } from "react";
import signupSchema from "../validation/validation";
import { auth } from "../firebase";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(null);
  const [check, setCheck] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { error } = await signupSchema.validate({
        name,
        email,
        password,
        password2,
      });
      if (error) {
        setError(error.message);
        return;
      }
      const userInfo = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(userInfo);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div className="signUpImg pt-20">
        <h1 className="text-center text-white font-bold text-2xl capitalize">
          create your account
        </h1>
        <form className="bg-white py-10 mt-5" onSubmit={handleSubmit}>
          <div className="gap-20">
            <div className="text-center">
              <label className="font-bold text-lg">
                Enter Name
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className=" hover:bg-gray-500 rounded-3xl py-5 
                  px-2 outline-none ml-3"
                  style={{
                    width: "50%",
                    border: "2px solid",
                    borderColor: "blueviolet",
                  }}
                />
              </label>
            </div>
            <div className="mt-5 text-center">
              <label className="font-bold text-lg">
                Email Address
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" hover:bg-gray-500 rounded-3xl py-5 
                  px-2 outline-none ml-3 "
                  style={{
                    width: "50.5%",
                    border: "2px solid",
                    borderColor: "blueviolet",
                  }}
                />
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center mt-20 gap-5">
            <div>
              <label className="font-bold text-lg">
                Password
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" hover:bg-gray-500  rounded-3xl py-5 
                  px-2 outline-none ml-3 "
                  style={{ border: "2px solid", borderColor: "blueviolet" }}
                />
              </label>
            </div>
            <div>
              <label className="font-bold capitalize text-lg">
                confirm password
                <input
                  required
                  type="password"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  className=" hover:bg-gray-500  rounded-3xl py-5 
                  px-2 outline-none ml-3 "
                  style={{ border: "2px solid", borderColor: "blueviolet" }}
                />
              </label>
            </div>
          </div>
          <div className="text-center mt-4">
            <label>
              <input
                required
                type="checkbox"
                value={check}
                onChange={(e) => setCheck(e.target.value)}
                className="outline-none"
                style={{
                  border: "2px solid",
                  borderColor: "blueviolet",
                }}
              />

              <a href="#" className="ml-3">
                I agree to the terms and conditions
              </a>
            </label>
          </div>
          <div className="grid place-items-center ml-20 mt-3">
            <button
              type="submit"
              className="bg-blue-500 rounded-3xl text-white py-5 px-2 "
              style={{ width: "59%" }}
            >
              Sign up
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <p className="text-center mt-3">
            already have an account?
            <span className="text-blue-400">Sign in</span>
          </p>
        </form>
      </div>
    </>
  );
};
export default SignUp;
