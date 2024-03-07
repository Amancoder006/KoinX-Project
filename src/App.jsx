import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let str = window.location.href.split("/").reverse()[0];
  return <Home coin={str} />;
}

export default App;
