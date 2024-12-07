import Component2 from "./component2";
import { userContext } from "./usecontenet";
import { useState } from "react";
const Component1 = () => {
  const [user, setUser] = useState("macee");
  return (
    <>
      <userContext.Provider value={user}>
        <h1>{`hello ${user}`}</h1>
        <Component2 />
      </userContext.Provider>
    </>
  );
};
export default Component1;
