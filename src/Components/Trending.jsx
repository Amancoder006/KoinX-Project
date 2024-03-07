import React, { useEffect, useState } from "react";
import "./Trending.css";

const Trending = ({ data }) => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    if (data) {
      setTrending(data.slice(0, 3));
    }
  }, [data]);

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

  const renderTrending = () => {
    return (
      <div>
        {trending.map((trend, ind) => {
          return (
            <div key={ind} className="trend">
              <div className="icon-name">
                <img
                  src={trend.item.small}
                  alt="logo"
                  height={"40px"}
                  width={"40px"}
                />
                <div className="coin-name">
                  {trend.item.name}
                  {"("}
                  {trend.item.symbol}
                  {")"}
                </div>
              </div>

              <div
                className="percent-container"
                style={{
                  backgroundColor:
                    trend.item.data.price_change_percentage_24h.aed > 0
                      ? "#ebf9f4"
                      : "#fef0ee",
                  color:
                    trend.item.data.price_change_percentage_24h.aed > 0
                      ? "#1bb57f"
                      : "#ed8189",
                }}
              >
                {renderPercent(trend.item.data.price_change_percentage_24h.aed)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="about-container">
      <div className="heading">
        Trending Coins {"("}24H{")"}
      </div>

      <div style={{ marginTop: "4%" }}>{renderTrending()}</div>
    </div>
  );
};

export default Trending;
