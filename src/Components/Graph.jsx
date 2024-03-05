import React, { useEffect, useRef, memo } from "react";
import bitcoin from "../assets/bitcoin.png";
import "./Graph.css";

const Graph = () => {
  const container = useRef();

  useEffect(() => {
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
  }, []);

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

  return (
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
          <img src={bitcoin} alt="bitcoinLogo" />
        </div>
        <div className="heading">Bitcoin</div>
        <div
          style={{
            fontSize: 18,
            color: "#606060",
            fontWeight: 500,
            marginLeft: "1%",
          }}
        >
          BTC
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
      <div className="graph">
        <RenderGraph container={container} />
      </div>
    </div>
  );
};

export default memo(Graph);
