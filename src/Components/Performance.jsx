import "./Performance.css";
import info from "../assets/info.svg";

const obj1 = [
  {
    title: "Bitcoin",
    desc: "$16,189.98",
  },
  {
    title: "27th Low/ 27th High",
    desc: "$16,189.98 /$16,189.98",
  },
  {
    title: "7d Low/ 7d High",
    desc: "$16,189.98 /$16,189.98",
  },
  {
    title: "Trading Volume",
    desc: "$16,189,202.98",
  },
  {
    title: "Market Cap Rank",
    desc: "#1",
  },
  {
    title: "Market Cap",
    desc: "$16,189,202.98",
  },
  {
    title: "Market Cap Dominance",
    desc: "38.943%",
  },
  {
    title: "Volume / Market Cap",
    desc: "0.7189",
  },
  {
    title: "All Time High",
    desc: "$16,189,202.98",
  },
  {
    title: "All Time Low",
    desc: "$67.81",
  },
];

const Performance = () => {
  const rangeIndicator = (val) => {
    return (
      <div className="range-indicator">
        <div >
          <div className="text1">Today's Low</div>
          <div className="text2">42,653.44</div>
        </div>
        <div
          style={{
            flex: 1,
            margin: "0 4%",
            alignItems: "center",
            paddingTop: val ? "5%" : 0,
          }}
        >
          <div className="indicator"></div>
          {val && (
            <>
              <div className="range-price">▲</div>
              <div className="range-price price-text">$ 42,234.33</div>
            </>
          )}
        </div>
        <div >
          <div className="text1">Today's Low</div>
          <div className="text2">42,653.44</div>
        </div>
      </div>
    );
  };

  const renderFundamentals = () => {
    return (
      <div className="fundamental-container">
        <div style={{ display: "flex" }} className="title">
          <div className="text3">Fundamentals</div>
          <img src={info} alt="info" />
        </div>

        <div className="funds">
          {obj1.map((item, ind) => {
            return (
              <div key={ind} className="fund-item">
                <div className="text4">{item.title}</div>
                <div className="text5">{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="perfrom-container">
      <div className="heading">Performance</div>

      {rangeIndicator(true)}
      {rangeIndicator(false)}

      {renderFundamentals()}
    </div>
  );
};

export default Performance;
