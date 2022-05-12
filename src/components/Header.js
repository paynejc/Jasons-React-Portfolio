import React from "react";
import "../index.css";
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a href="https://github.com/paynejc">GitHub</a>
        </li>
        <li className="nav-item">
          <a href="https://www.linkedin.com/in/jason-payne-08608b16/">
            LinkedIn
          </a>
        </li>
        <li className="nav-item">
          <a href="https://docs.google.com/document/d/1HnnaxqtDMmcVqTgzSz8uwlzQp3KMWjyXjNjsrm4lJGw/edit?usp=sharing">
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => handlePageChange("Projects")}
            className={
              currentPage === "Projects" ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

export default NavTabs;
