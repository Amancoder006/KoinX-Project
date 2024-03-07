import "./UmayLike.css";

const UmayLike = ({ data }) => {
  const renderCoins = () => {
    return (
      <div className="scroll-content">
        {data.map((item, ind) => {
          return (
            <div key={ind} className="card-conatiner">
              <Card data={item.item} />
            </div>
          );
        })}
      </div>
    );
  };

  const Card = ({ data }) => {
    return (
      <div className="card-contianer">
        <div className="div1">
          <img src={data.small} />
          <div className="sym">{data.symbol}</div>
        </div>
        <div className="price">{data.data.price.split("<")[0]}</div>
        <div className="chart">
          <img src={data.data.sparkline} alt="chart" />
        </div>
      </div>
    );
  };

  return data ? (
    <div className="like-container">
      <div className="heading">You May Also Like</div>

      <div className="coins">{renderCoins()}</div>

      <div className="heading" style={{ marginTop: "1%" }}>
        Trending Coins
      </div>

      <div className="coins" style={{ marginTop: "1%" }}>
        {renderCoins()}
      </div>
    </div>
  ) : null;
};

export default UmayLike;
