import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Home from "../Components/home/Home";
import About from "../Components/about/About";
import Resume from "../Components/resume/Resume";
import Recipes from "../Components/recipes/Recipes";
import Contact from "../Components/contact/Contact";
import "./App.css";

function App() {
  const handleButtonClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <Sidebar />
      <main>
        <Home title="home" dark={true} id="home" />
        <About title="about" dark={true} id="about" />
        <Resume title="resume" dark={true} id="resume" />
        <Recipes title="recipes" dark={true} id="recipes" />
        <Contact title="contact" dark={true} id="contact" />
        <button onClick={handleButtonClick}>back to the top</button>
      </main>
    </div>
  );
}

export default App;
