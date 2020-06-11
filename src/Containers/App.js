import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <h1>Cassie Brown</h1> */}
      <Sidebar />
      <main>
        <section id="home">
          <h1>Section 1</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            blanditiis expedita? Earum eligendi pariatur quaerat quos expedita
            ab quibusdam ratione veniam in, mollitia fuga repudiandae?
          </p>
        </section>
        <section id="about">
          <h1>Section 2</h1>
          <p>
            Ratione nulla nam, ipsa dignissimos corrupti veniam nostrum,
            laudantium asperiores sequi numquam placeat velit voluptate in
            praesentium non labore unde incidunt laborum maxime quae magni.
          </p>
        </section>
        <section id="resume">
          <h1>Section 3</h1>
          <p>
            Soluta quibusdam ad nostrum vel voluptate delectus sequi dolores
            quia quaerat officia corrupti, aperiam fugit facere debitis
            repudiandae praesentium sapiente inventore repellendus, nemo commodi
            alias!
          </p>
        </section>
        <section id="recipes">
          <h1>Section 4</h1>
          <p>
            Aliquid aliquam magnam ducimus similique obcaecati, unde
            exercitationem laborum incidunt, quas in ipsum inventore nostrum?
            Blanditiis optio cumque earum iste odio! Alias sint accusamus
            repudiandae.
          </p>
        </section>
        <section id="contact">
          <h1>Section 5</h1>
          <p>
            Officia ipsum fugit iure eaque quisquam error tempore earum enim
            illum, delectus officiis incidunt corrupti aliquid nam quas
            perspiciatis eveniet doloremque quod labore? Doloremque, ipsum?
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
