import React from "react";
import "./Team.css";
import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";

const member = [
  {
    img: member1,
    name: "John Smith",
    shortDesc: "Designation here",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam nostrum, quis modi, officiis eius provident laudantium voluptatibus molestiae magnam et tempora excepturi cum? Sapiente pariatur voluptatem necessitatibus laborum! Fugiat, ut, doloribus maiores, dicta iure corporis repudiandae nemo minima porro officia possimus nobis quisquam dolor molestiae eveniet quidem itaque omnis totam!",
  },
  {
    img: member2,
    name: "Elina Willams",
    shortDesc: "Designation here",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam nostrum, quis modi, officiis eius provident laudantium voluptatibus molestiae magnam et tempora excepturi cum? Sapiente pariatur voluptatem necessitatibus laborum! Fugiat, ut, doloribus maiores, dicta iure corporis repudiandae nemo minima porro officia possimus nobis quisquam dolor molestiae eveniet quidem itaque omnis totam!",
  },
  {
    img: member3,
    name: "John Smith",
    shortDesc: "Designation here",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam nostrum, quis modi, officiis eius provident laudantium voluptatibus molestiae magnam et tempora excepturi cum? Sapiente pariatur voluptatem necessitatibus laborum! Fugiat, ut, doloribus maiores, dicta iure corporis repudiandae nemo minima porro officia possimus nobis quisquam dolor molestiae eveniet quidem itaque omnis totam!",
  },
];

const Team = () => {
  const renderMember = () => {
    return (
      <div>
        {member.map((item, ind) => {
          return (
            <div key={ind} className="member-container">
              <div className="image-contianer">
                <div className="user-image">
                  <img
                    src={item.img}
                    alt="member"
                    height={"135px"}
                    width={"125px"}
                  />
                </div>
                <div className="name">{item.name}</div>
                <div className="short-desc">{item.shortDesc}</div>
              </div>
              <div className="detail-contianer">
                <div className="desc8" >{item.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="team-container">
      <div className="heading">Team</div>

      <div className="desc3" style={{ marginTop: "2" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam facilis
        animi temporibus id porro minima odio dolorum dolores iste maiores,
        consequuntur optio. Similique aperiam ex laudantium praesentium nam
        eligendi totam.
      </div>

      <div className="team">{renderMember()}</div>
    </div>
  );
};

export default Team;
