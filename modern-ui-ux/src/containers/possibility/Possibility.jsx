import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";
export default function Possibility() {
  return (
    <div className="gpt3__possibility section__padding">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The Possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos illum
          consequuntur iure deleniti itaque expedita unde dolorum enim quod
          aspernatur?
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}
