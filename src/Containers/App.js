import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Home from "../Components/home/Home";
import About from "../Components/about/About";
import Resume from "../Components/resume/Resume";
import Recipes from "../Components/recipes/Recipes";
import Contact from "../Components/contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Home />
        <About />
        <Resume />
        <Recipes />
        <Contact />
      </main>
    </div>
  );
}

export default App;
