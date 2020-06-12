import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [active, setActive] = useState({
    home: true,
    about: false,
    resume: false,
    recipes: false,
    contact: false,
  });

  // useEffect(() => {});

  return (
    <div className="Sidebar">
      <ul>
        <li>
          <a
            href="#home"
            className={active.home ? "active" : ""}
            onClick={() => setActive({ home: true })}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={active.about ? "active" : ""}
            onClick={() => setActive({ about: true })}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className={active.resume ? "active" : ""}
            onClick={() => setActive({ resume: true })}
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="#recipes"
            className={active.recipes ? "active" : ""}
            onClick={() => setActive({ recipes: true })}
          >
            Recipes
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={active.contact ? "active" : ""}
            onClick={() => setActive({ contact: true })}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
