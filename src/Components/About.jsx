import "./About.css";
import img1 from "../assets/dummyimg1.png";
import img2 from "../assets/dummyimg2.png";
import arrow from "../assets/right-arrow.svg";

const arr = [
  {
    img: img1,
    text: "Calculate your profits",
    color:
      "linear-gradient(135deg,#73e9a4,#70e4a5,#5cc8a6,#44a7a9,#318daa,#196cac)",
  },
  {
    img: img2,
    text: "Calculate your tax liability",
    color:
      "linear-gradient(135deg,#ff9564,#fd8c5f,#fb7a56,#f97051,#f65c47,#f23e38)",
  },
];

const About = () => {
  const showBtn = () => {
    return (
      <div className="btn-container">
        <div className="check-now">Check now</div>
        <div className="arrow-div">
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    );
  };

  const renderCards = () => {
    return (
      <div className="holder">
        {arr.map((item, ind) => {
          return (
            <div key={ind} className="card" style={{ background: item.color }}>
              <div className="image-side">
                <img src={item.img} alt="image" />
              </div>

              <div className="right">
                <div className="text">{item.text}</div>
                <div className="right-btn">{showBtn()}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="about-container">
      <div className="heading">About Bitcoin</div>

      <div className="details">
        <div className="title1">What is Bitcoin?</div>
        <div className="desc1" style={{ marginTop: "1.5%" }}>
          Bitcoin {"("}BTC{")"} is a cryptocurrency, a virtual currency designed
          to act as money and a form of payment outside the control of any one
          person, group, or entity, thus removing the need for third-party
          involvement in financial transactions. It is rewarded to blockchain
          miners for verifying transactions and can be purchased on several
          exchanges.
        </div>
        <div className="title1" style={{ marginTop: "1.5%" }}>
          Lorem ipsum dolor sit
        </div>
        <div className="desc1" style={{ marginTop: "1%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          amet adipisci corporis dicta esse? Suscipit, tenetur! Praesentium
          blanditiis dolorem rerum. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Quos itaque ut eius reprehenderit molestias porro,
          optio necessitatibus alias fuga dicta voluptate saepe consequatur nisi
          illum commodi quasi culpa eligendi perferendis, harum suscipit sint
          numquam. Eum rerum nisi, odit doloremque minima expedita veritatis
          eligendi id accusantium suscipit, praesentium unde, amet eveniet.
          Magni consequuntur placeat, similique, eveniet doloremque sapiente
          <br />
          <br />
          expedita laborum iure repellendus a incidunt! At commodi, voluptas
          accusantium pariatur quibusdam repellendus alias aspernatur
          laudantium, officia blanditiis perspiciatis quos voluptate voluptates
          enim? Eveniet dolore itaque vero! Nesciunt accusamus dicta quo
          quisquam ad, facilis odit animi quaerat aliquam minima dolorem impedit
          <br />
          <br />
          cum quasi. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Alias, accusantium officiis nisi sequi rem sunt aut quaerat doloremque
          facere consectetur voluptatum illo quibusdam assumenda earum magnam
          impedit reprehenderit deserunt. Aliquam repellendus ut officiis nam
          laboriosam hic incidunt recusandae mollitia, iusto temporibus corrupti
          sunt ex cumque doloremque tempora officia veritatis beatae alias atque
          fugit nostrum iure? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nihil fugiat ipsam voluptates aperiam numquam alias repellat qui
          quo natus distinctio eum assumenda quam, odio consequatur nostrum
          repellendus rerum suscipit odit!
        </div>
      </div>

      <div className="separator" />

      <div
        className="desc1 mobText"
        style={{ marginTop: "1%", marginBottom: "3%" }}
      >
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet
        adipisci corporis dicta esse? Suscipit, tenetur! Praesentium blanditiis
        dolorem rerum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quos itaque ut eius reprehenderit molestias porro, optio necessitatibus
        alias fuga dicta voluptate saepe consequatur nisi illum commodi quasi
      </div>

      <div>
        <div className="heading">Already Holding Bitcoin?</div>
        <div>{renderCards()}</div>
      </div>

      <div className="separator" />

      <div
        className="desc1 addText"
        style={{ marginTop: "1%", marginBottom: "3%" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet
        adipisci corporis dicta esse? Suscipit, tenetur! Praesentium blanditiis
        dolorem rerum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quos itaque ut eius reprehenderit molestias porro, optio necessitatibus
        alias fuga dicta voluptate saepe consequatur nisi illum commodi quasi
      </div>
    </div>
  );
};

export default About;
