import { useState } from "react";
const TextArea = () => {
  const [textArea, setTextarea] = useState("the content of the area");
  const handle = (e) => {
    setTextarea(e.target.value);
  };
  return (
    <>
      <form>
        <textarea value={textArea} onChange={handle} />
        <input type="submit" />
      </form>
    </>
  );
};
export default TextArea;
