import { useContext } from "react";
import { userContext } from "./usecontenet";
const Component3 = () => {
  const user = useContext(userContext);
  return (
    <>
      <h1>Component3....</h1>
      <h2>{`i am ${user}`}</h2>
    </>
  );
};
export default Component3;
