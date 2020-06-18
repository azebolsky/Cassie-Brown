import React from "react";
import { Link } from "react-scroll";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul>
        {/* <h1>Cassie</h1> */}
        <img src="https://i.imgur.com/QwpDS0N.png" alt="Cassie Brown" />
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            // offset={-70}
            duration={100}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            // offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="resume"
            spy={true}
            smooth={true}
            // offset={-70}
            duration={500}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="recipes"
            spy={true}
            smooth={true}
            // offset={-70}
            duration={500}
          >
            Recipes
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            // offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
