import React, { useEffect, useRef, memo, useState } from "react";
import bitcoin from "../assets/bitcoin.png";
import "./Graph.css";

const Graph = ({ coinData, coinIcon }) => {
  const [data, setData] = useState(null);
  const container = useRef();

  const renderPercent = (str) => {
    let pr = `${str}`;
    let res = "";
    if (str < 0) {
      res += "▼ ";
    } else {
      res += "▲ ";
    }
    res += pr.slice(0, 5) + "%";

    return res;
  };

  useEffect(() => {
    if (coinData && coinIcon) {
      setData(coinData);
    }
  }, [coinData]);

  useEffect(() => {
    if (data) {
      const scriptId = "tradingview-widget-script";

      // Check if the script already exists
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src =
          "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
        {
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "hide_legend": true,
          "allow_symbol_change": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
        container.current.appendChild(script);
      }

      return () => {
        const existingScript = document.getElementById(scriptId);
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, [data]);

  const RenderGraph = ({ container }) => {
    return (
      <div
        className="tradingview-widget-container"
        ref={container}
        style={{ marginTop: "5px", display: "flex", flexDirection: "column" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ flexGrow: 1 }}
        ></div>
      </div>
    );
  };

  return data ? (
    <div className="graph-container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingLeft: "2%",
          paddingTop: "3%",
          paddingBottom: "3%",
        }}
      >
        <div className="bitcoinLogo">
          <img src={coinIcon.image.small} alt="bitcoinLogo" />
        </div>
        <div className="heading">{coinIcon.name}</div>
        <div
          style={{
            fontSize: 18,
            color: "#606060",
            fontWeight: 500,
            marginLeft: "1%",
          }}
        >
          {coinIcon.symbol}
        </div>

        <div
          style={{
            backgroundColor: "#909090",
            color: "#fff",
            borderRadius: "8px",
            padding: "0.7%",
            fontSize: 20,
            marginLeft: "3%",
          }}
        >
          Rank #1
        </div>
      </div>

      {data ? (
        <div className="percent-container-graph">
          <div style={{ display: "flex" }}>
            <div
              className="heading"
              style={{ fontWeight: "600", fontSize: "36px" }}
            >
              ${data[Object.keys(data)[0]].usd}
            </div>
            <div
              className="percent-container-graph-text"
              style={{
                height: "30px",
                backgroundColor:
                  data[Object.keys(data)[0]].usd_24h_change > 0
                    ? "#ebf9f4"
                    : "#fef0ee",
                color:
                  data[Object.keys(data)[0]].usd_24h_change > 0
                    ? "#1bb57f"
                    : "#ed8189",
                marginLeft: "2%",
              }}
            >
              {renderPercent(data[Object.keys(data)[0]].usd_24h_change)}
            </div>
          </div>

          <div style={{ fontSize: "18px", fontWeight: "500" }}>
            ₹ {data[Object.keys(data)[0]].inr}
          </div>
        </div>
      ) : null}

      <div className="graph">
        <RenderGraph container={container} />
      </div>
    </div>
  ) : null;
};

export default memo(Graph);
