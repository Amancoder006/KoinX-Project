import "./Offer.css";
import dummyimg3 from "../assets/dummyimg3.png";
import arrow from "../assets/right-arrow.svg";

const Offer = () => {
  const showBtn = () => {
    return (
      <div
        style={{
          height: "50px",
          width: "180px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 30px",
        }}
      >
        <div className="check-now">Get Started for FREE </div>
        <div
          style={{
            fontSize: "20px",
            fontWeight: "800",
            color: "#000",
            alignItems: "center",
            // verticalAlign: "middle",
            textAlign: "center",
          }}
        >
          →
        </div>
      </div>
    );
  };
  return (
    <div className="offer-container">
      <div className="title2">
        Get Started with KoinX <br /> for Free
      </div>
      <div className="title3">
        With our range of features that you can equip for <br /> free, KoinX
        allows you to be more educated and <br /> aware of your tax reports.
      </div>

      <img src={dummyimg3} />

      <div style={{ display: "flex", justifyContent: "center" }}>
        {showBtn()}
      </div>
    </div>
  );
};

export default Offer;
