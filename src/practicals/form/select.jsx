import { useState } from "react";
const Select = () => {
  const [select, setSelect] = useState("amanda");
  const handle = (e) => {
    setSelect(e.target.value);
  };
  return (
    <>
      <select value={select} onChange={handle}>
        <option value="macee">macee</option>
        <option value="amanda">amanda</option>
        <option value="priscilla">priscilla</option>
        <option value="constance">constance</option>
      </select>
    </>
  );
};
export default Select;
