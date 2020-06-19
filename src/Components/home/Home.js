import React from "react";
import "./Home.css";

const home = () => {
  return (
    <section id="home">
      <h1>Cassie Brown</h1>
      <h3>MS RD LD</h3>
      <h4>
        <img
          src="https://i.imgur.com/bofb7de.png"
          alt="cactus icon"
          width="30px"
          height="30px"
        />{" "}
        Dallas, TX
      </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        assumenda aliquid ipsam commodi, vitae libero pariatur dolor aspernatur
        provident asperiores sed sapiente totam esse enim, illo magni quaerat,
        tempore consequatur. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Aliquid deserunt beatae ea. Neque unde soluta voluptatem nostrum
        eaque, delectus similique amet facilis repudiandae alias quasi modi!
        Maxime aliquid animi excepturi.
      </p>
      <div className="picture-block">
        <img src="https://i.imgur.com/LnmLlbT.jpg" alt="cassie & coffee" />
        <img src="https://i.imgur.com/Box2HZp.jpg" alt="cassie & coffee" />
        <img src="https://i.imgur.com/uBPLK6e.jpg" alt="cassie & coffee" />
        <img src="https://i.imgur.com/Box2HZp.jpg" alt="cassie & coffee" />
        <img src="https://i.imgur.com/LnmLlbT.jpg" alt="cassie & coffee" />
        <img src="https://i.imgur.com/uBPLK6e.jpg" alt="cassie & coffee" />
        <img src="https://i.imgur.com/Box2HZp.jpg" alt="cassie & coffee" />
        <img src="https://i.imgur.com/LnmLlbT.jpg" alt="cassie & coffee" />
        <img src="https://i.imgur.com/uBPLK6e.jpg" alt="cassie & coffee" />
      </div>
    </section>
  );
};

export default home;
