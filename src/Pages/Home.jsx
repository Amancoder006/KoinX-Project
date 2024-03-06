import { useState } from "react";
import "./Home.css";
import NavBar from "../Components/NavBar";
import Graph from "../Components/Graph";
import Performance from "../Components/Performance";
import Sentiments from "../Components/Sentiments";
import About from "../Components/About";
import Tokenomic from "../Components/Tokenomic";
import Team from "../Components/Team";

const tabs = [
  "Overview",
  "Fundamentals",
  "New Insight",
  "Sentiments",
  "Team",
  "Technicals",
  "Tokenomics",
];

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const renderTabs = tabs.map((item, index) => {
    return (
      <div
        key={index}
        className="tab"
        onClick={() => {
          console.log("-->", item);
          setTabIndex(index);
        }}
        style={
          tabIndex === index
            ? {
                borderBottom: "5px solid #0077C2",
              }
            : {}
        }
      >
        <div
          className="tabName"
          style={
            tabIndex === index
              ? {
                  color: "#0077c2",
                }
              : {}
          }
        >
          {item}
        </div>
      </div>
    );
  });
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="left-side">
          {/* graph */}
          <div className="box1">
            <Graph />
          </div>

          {/* tabs */}
          <div className="tabs">
            <div className="scroll-content">{renderTabs}</div>
          </div>

          {/* performance */}
          <div className="box1" style={{ marginTop: "2%" }}>
            <Performance />
          </div>

          {/* Sentiments */}
          <div className="box1" style={{ marginTop: "2%" }}>
            <Sentiments />
          </div>

          {/* About */}
          <div className="box1" style={{ marginTop: "2%" }}>
            <About />
          </div>

          {/* Token */}
          <div className="box1" style={{ marginTop: "2%" }}>
            <Tokenomic />
          </div>

          {/* Team */}
          <div className="box1" style={{ marginTop: "2%" }}>
            <Team />
          </div>
        </div>
        <div className="right-side"></div>
      </div>
    </>
  );
};

export default Home;
