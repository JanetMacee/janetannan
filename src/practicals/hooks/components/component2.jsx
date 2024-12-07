import Component3 from "./component3";
import { useContext } from "react";
import { userContext } from "./usecontenet";

const Component2 = () => {
  const user = useContext(userContext);
  return (
    <>
      <h1>component2 </h1>
      <p>{`my new name is ${user}`}</p>
      <Component3 />
    </>
  );
};
export default Component2;
