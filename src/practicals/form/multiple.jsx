import { useState } from "react";
const Multiple = () => {
  const [name, setName] = useState({});
  const handle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setName((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`my name is ${name}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            value={name.username || ""}
            name="username"
            onChange={handle}
            type="text"
          />
        </label>
        <label>
          Enter your Age:
          <input
            type="number"
            value={name.age || ""}
            name="age"
            onChange={handle}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};
export default Multiple;
