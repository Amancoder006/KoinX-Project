import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  console.log("link-->", window.location.href);
  let str = window.location.href.split("/").reverse()[0];
  // let str = window.location.href;
  console.log("str9-->", str);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home coin={"bitcoin"} />} />
        <Route path={`/bitcoin`} element={<Home coin={"bitcoin"} />} />
        <Route path={`/ethereum`} element={<Home coin={"ethereum"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
