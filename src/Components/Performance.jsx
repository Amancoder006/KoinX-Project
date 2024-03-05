import "./Performance.css";

const Performance = () => {
  const rangeIndicator = (val) => {
    return (
      <div className="range-indicator">
        <div className="left">
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
        <div className="right">
          <div className="text1">Today's Low</div>
          <div className="text2">42,653.44</div>
        </div>
      </div>
    );
  };

  return (
    <div className="perfrom-container">
      <div className="heading">Performance</div>

      {rangeIndicator(true)}
      {rangeIndicator(false)}
    </div>
  );
};

export default Performance;
