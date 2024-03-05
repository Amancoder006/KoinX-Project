import "./Sentiments.css";
import info from "../assets/info.svg";
import news from "../assets/news.svg";
import trending from "../assets/trending.svg";

const arr = [
  {
    solid: "#A9DFBF",
    light: "#1E844920",
    icon: news,
  },
  {
    solid: "#2874A6",
    light: "#AED6F120",
    icon: trending,
  },
  {
    solid: "#2874A6",
    light: "#AED6F120",
    icon: trending,
  },
];

const Sentiments = () => {
  const renderSentiments = () => {
    return (
      <div>
        <div style={{ display: "flex" }} className="title">
          <div className="text3">Key Events</div>
          <img src={info} alt="info" />
        </div>

        <div className="events">
          <div className="scroll-content">
            {arr.map((item, ind) => {
              return (
                <div
                  key={ind}
                  className="event"
                  style={{ backgroundColor: item.light, width: "400px" }}
                >
                  <div className="icon">
                    <img src={item.icon} alt="info" />
                  </div>

                  <div className="desc">
                    <div className="text1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className="text2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium, magnam totam molestias adipisci ipsam neque
                      suscipit ad. Veritatis, eveniet aspernatur minus excepturi
                      suscipit ad. Veritatis, eveniet aspernatur minus excepturi
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderRange = (name, per, color) => {
    return (
      <div className="range">
        <div className="text4 wid">{name}</div>
        <div
          className="indicator-line"
          style={{ width: `${per}%`, backgroundColor: color }}
        ></div>
        <div className="text4 per">{per}%</div>
      </div>
    );
  };

  const renderAnalyst = () => {
    return (
      <div style={{ marginTop: "3%" }}>
        <div style={{ display: "flex" }} className="title">
          <div className="text3">Anaylst Estimates</div>
          <img src={info} alt="info" />
        </div>

        <div className="states">
          <div className="percent">
            <div className="percent-text">76%</div>
          </div>
          <div className="ranges">
            {renderRange("Buys", 80, "red")}
            {renderRange("Hold", 20, "green")}
            {renderRange("Sell", 50, "grey")}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="sentiments-container">
      <div className="heading">Sentiments</div>

      {renderSentiments()}
      {renderAnalyst()}
    </div>
  );
};

export default Sentiments;
