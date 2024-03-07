import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path={`/`} element={<Home />} />
      <Route path={`/bitcoin`} element={<Home coin={"bitcoin"} />} />
      <Route path={`/ethereum`} element={<Home coin={"ethereum"} />} />
    </Routes>
  </BrowserRouter>
);
