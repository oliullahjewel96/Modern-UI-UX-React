import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
export default function Header() {
  return (
    <div className="gpt3__header section__padding " id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's build something amazing with GPT-3 open AI
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          tenetur voluptate vero molestiae? Ea dicta alias accusantium
          distinctio fugiat neque voluptate rerum eveniet, quisquam ex odit.
          Blanditiis quis accusamus eos?
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Adderess" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}
