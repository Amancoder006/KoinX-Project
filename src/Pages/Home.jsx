import "./Home.css";
import NavBar from "../Components/NavBar";
import Graph from "../Components/Graph";
import Performance from "../Components/Performance";
import { useState } from "react";

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
        </div>
        <div className="right-side"></div>
      </div>
    </>
  );
};

export default Home;
