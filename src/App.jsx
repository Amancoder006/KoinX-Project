import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  console.log("link-->", window.location.href);
  let str = window.location.href.split("/").reverse()[0];
  // let str = window.location.href;
  console.log("str5-->", str);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/${str}`} element={<Home coin={str} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
