import { useEffect, useState } from "react";
const Effect = () => {
  const [count, setMe] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMe((count) => count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);
  return (
    <>
      <h1>i have worked {count} seconds</h1>
    </>
  );
};
export default Effect;
