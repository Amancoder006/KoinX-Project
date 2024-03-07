import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";
import axios from "axios";
import NavBar from "../Components/NavBar";
import Graph from "../Components/Graph";
import Performance from "../Components/Performance";
import Sentiments from "../Components/Sentiments";
import About from "../Components/About";
import Tokenomic from "../Components/Tokenomic";
import Team from "../Components/Team";
import UmayLike from "../Components/UmayLike";
import Offer from "../Components/Offer";
import Trending from "../Components/Trending";

const tabs = [
  "Overview",
  "Fundamentals",
  "New Insight",
  "Sentiments",
  "Team",
  "Technicals",
  "Tokenomics",
];

const Home = ({ coin }) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState(coin == "" ? "bitcoin" : coin);
  const [coinData, setCoinData] = useState(null);
  const [coinIcon, setCoinIcon] = useState("");
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

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
      );

      setData(res.data.coins);
    };

    const fetchCoinData = async () => {
      let res = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${name}&vs_currencies=inr%2Cusd&include_24hr_change=true`
      );

      let res1 = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${name}`
      );
      console.log("icon-->", res1);
      setCoinIcon(res1.data);
      setCoinData(res.data);
    };

    if (name) {
      fetchData();
      fetchCoinData();
    }
  }, [name]);

  return coinData && coinIcon ? (
    <div>
      <NavBar />
      <div className="container">
        <div className="top-line">
          Cryptocurrencies{" »  "}{" "}
          <div className="top-line-text">
            {coinIcon !== null ? coinIcon.name : ""}
          </div>
        </div>

        <div className="left-side">
          {/* graph */}
          <div className="box1">
            <Graph coinData={coinData} coinIcon={coinIcon} />
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
            <About coinData={coinIcon} />
          </div>

          {/* Token */}
          <div className="box1" style={{ marginTop: "2%" }}>
            <Tokenomic />
          </div>

          {/* Team */}
          <div className="box1" style={{ marginTop: "2%" }}>
            <Team />
          </div>

          {/* likes */}
          <div className="u-may-like active" style={{ marginTop: "2%" }}>
            <div className="box1">
              <UmayLike data={data} />
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="box1" style={{ backgroundColor: "#0052fe" }}>
            <Offer />
          </div>
          <div className="box1" style={{ marginTop: "5%" }}>
            <Trending data={data} />
          </div>
        </div>
      </div>

      <div className="u-may-like active1">
        <div className="box1">
          <UmayLike data={data} />
        </div>
      </div>
    </div>
  ) : null;
};

export default Home;
