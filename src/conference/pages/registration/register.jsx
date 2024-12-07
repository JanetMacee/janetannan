import { useState } from "react";
import "./register.css";
//import signupSchema from "./validate";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tickettype, setTicketType] = useState("");
  const [numberofticket, setNumberofTicket] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted");
  };
  return (
    <>
      <div className="registration">
        <h1 className="text-center font-bold text-xl">Registration</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Ticket Type:
            <select
              value={tickettype}
              onChange={(e) => setTicketType(e.target.value)}
            >
              <option value="">Select a Ticket Type</option>
              <option value="standard">Standard</option>
              <option value="vip">VIP</option>
            </select>
          </label>
          <br />
          <label>
            Number Of tickets:
            <input
              type="number"
              value={numberofticket}
              onChange={(e) => setNumberofTicket(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};
export default Register;
