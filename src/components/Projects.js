import React from "react";
import "../index.css";
export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div id="project-container">
        <div class="project-card">
          <a href="https://paynejc.github.io/Homework1/">
            <div id="hw1"></div>
            <p class="card-label">Homework 1</p>
          </a>
          <a href="https://github.com/paynejc/Homework1">
            <p class="card-label">Repository</p>
          </a>
        </div>
        <div class="project-card">
          <a href="https://paynejc.github.io/Planner/">
            <div id="Planner"></div>
            <p class="card-label">Planner</p>
          </a>
          <a href="https://github.com/paynejc/Planner">
            <p class="card-label">Repository</p>
          </a>
        </div>
        <div class="project-card">
          <a href="https://geneviealba.github.io/odd-firebirds-project-/">
            <div id="Project1"></div>
            <p class="card-label">Mars Weather</p>
          </a>
          <a href="https://github.com/Geneviealba/odd-firebirds-project-">
            <p class="card-label">Repository</p>
          </a>
        </div>
        <div class="project-card">
          <a href="https://github.com/paynejc/Team-Profile-Generator">
            <div id="Team"></div>
            <p class="card-label">Team Generator</p>
          </a>
          <a href="https://github.com/paynejc/Team-Profile-Generator">
            <p class="card-label">Repository</p>
          </a>
        </div>
        <div class="project-card">
          <a href="https://paynejc.github.io/WeatherDashboard/">
            <div id="Weather"></div>
            <p class="card-label">Weather Dashboard</p>
          </a>
          <a href="https://github.com/paynejc/WeatherDashboard">
            <p class="card-label">Repository</p>
          </a>
        </div>
        <div class="project-card">
          <a href="https://paynejc.github.io/PasswordGenerator/">
            <div id="Password"></div>
            <p class="card-label">Password Generator</p>
          </a>
          <a href="https://github.com/paynejc/PasswordGenerator">
            <p class="card-label">Repository</p>
          </a>
        </div>
      </div>
    </div>
  );
}
