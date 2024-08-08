// import React from "react";
import "../styles/Academics.css";

function Academics() {

  return (
    <div id = "academics" className="academics-container">
      <div className="header">
        <div className="header-container">
          Academics<div className="period">.</div>
          <div className="underline"></div>
        </div>
      </div>
      <div>
        Below is a summary of the technical classes I have taken at UC Berkeley.
      </div>

      <div className="courses-container">
        <div className="level">GRADUATE LEVEL</div>
        <div className="classes-container">
          <ul className="classes">
            <li>
              Special Topics On Decentralized Intelligence: Large Language Model
              Agents (CS 294-196)
            </li>
          </ul>
        </div>
      </div>

      <div className="courses-container">
        <div className="level">UPPER DIVISION</div>
        <div className="classes-container">
          <ul className="classes">
            <li>Computer Security (CS 161)</li>
            <li>Introduction to Database Systems (CS 186)</li>
            <li>Introduction to Machine Learning (CS 189)</li>
            <li>Principles & Techniques of Data Science (DATA C100)</li>
            <li>Data Engineering (DATA 101)</li>
            <li>Human Contexts and Ethics of Data (DATA C104)</li>
            <li>Probability for Data Science (DATA C140)</li>
            <li>Natural Language Processing (INFO 159)</li>
            <li>Computational Models of Cognition (COGSCI 131)</li>
          </ul>
        </div>
      </div>

      <div className="courses-container">
        <div className="level">LOWER DIVISION</div>
        <div className="classes-container">
          <ul className="classes">
            <li>Foundations of Data Science (DATA C8)</li>
            <li>
              The Structure and Interpretation of Computer Programs (CS 61A)
            </li>
            <li>Data Structures (CS 61B)</li>
            <li>Machine Structures (CS 61C)</li>
            <li>Discrete Mathematics and Probability Theory (CS 70)</li>
            <li>Linear Algebra and Differential Equations (MATH 54)</li>
          </ul>
        </div>
      </div>

      <div className="courses-container">
        <div className="level">DESIGN CLASSES</div>
        <div className="classes-container">
          <ul className="classes">
            <li>Visual Communication & Sketching (DESINV 21)</li>
            <li>Prototyping & Fabrication (DESINV 22)</li>
            <li>Web Design DeCal</li>
            <li>Human Centered Design DeCal</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Academics;
