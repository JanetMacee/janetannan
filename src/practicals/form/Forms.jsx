import { useState } from "react";
const Forms = () => {
  const [name, setName] = useState({});
  const handleForm = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`the name you entered was ${name}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            placeholder="enter your name "
            onChange={handleForm}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};
export default Forms;
