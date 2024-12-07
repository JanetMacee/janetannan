import { Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Loyout from "./loyout";
import Error from "./Nopage";
import Info from "./info";
const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Info" element={<Info />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};
export default Index;
