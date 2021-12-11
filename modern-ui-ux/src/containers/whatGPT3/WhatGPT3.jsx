import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatgpt3.css";

export default function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quo sint nihil ipsum dolore est libero! Consequuntur vitae accusamus modi?"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          Possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="ChatBots"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quo sint nihil ipsum dolore est libero! Consequuntur vitae accusamus modi?"
        />
        <Feature
          title="KnowledgeBase"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quo sint nihil ipsum dolore est libero! Consequuntur vitae accusamus modi?"
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quo sint nihil ipsum dolore est libero! Consequuntur vitae accusamus modi?"
        />
      </div>
    </div>
  );
}
