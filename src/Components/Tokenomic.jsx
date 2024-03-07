import React from "react";
import "./Tokenomic.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      data: [80, 20],
      backgroundColor: ["#0082ff", "#fba405"],
      width: "10px",
    },
  ],
};

const Tokenomic = () => {
  return (
    <div className="token-container">
      <div className="heading">Tokenomics</div>

      <div style={{ marginTop: "2%" }}>
        <div className="text6">Initial Distribution</div>

        <div className="pie-container">
          <div className="pie">
            <Doughnut
              data={data}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                cutout: 45,
              }}
            />
          </div>

          <div
            style={{
              marginLeft: "25px",
              alignSelf: "center",
            }}
          >
            <div className="label-container">
              <div
                className="color-dot"
                style={{ backgroundColor: "#0082ff" }}
              ></div>
              <div className="label">Crowdsale investor: 80%</div>
            </div>
            <div className="label-container" style={{ marginTop: "15px" }}>
              <div
                className="color-dot"
                style={{ backgroundColor: "#fba405" }}
              ></div>
              <div className="label">Foundation: 20%</div>
            </div>
          </div>
        </div>

        <div
          className="desc2"
          style={{ marginTop: "1.5%", marginBottom: "4%" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
          magni necessitatibus, optio dolore totam iste qui maxime non dolorem
          eveniet dolorum incidunt sint odit! Cum recusandae repellendus nulla
          perferendis asperiores! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Porro, ipsum nihil? Assumenda earum, quos nam illum
          consectetur fugiat maiores delectus enim eius quia velit quaerat iure
          laudantium dolorem maxime ipsa. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Saepe eum in laborum veniam quis nam
          illo optio quas cupiditate, doloremque rerum suscipit dolorem
          consequuntur! Ad dolores soluta sunt consequatur minima?
        </div>
      </div>
    </div>
  );
};

export default Tokenomic;
