import React from "react";
import { Features } from "../../components";
import "./whatgpt3.css";

export default function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-feature">
        <Features />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient-text">
          Possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Features />
        <Features />
        <Features />
      </div>
    </div>
  );
}
