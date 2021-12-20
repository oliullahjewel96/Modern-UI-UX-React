import React from "react";
import { Feature } from "../../components";
import "./features.css";
export default function Features() {
  const featuresData = [
    {
      title: "Improving and distrusts instantly",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eius facere tenetur autem corporis fugiat expedita enim ipsa possimus soluta!",
    },
    {
      title: "Become the tended active",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eius facere tenetur autem corporis fugiat expedita enim ipsa possimus soluta!",
    },
    {
      title: "Message or am nothing",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eius facere tenetur autem corporis fugiat expedita enim ipsa possimus soluta!",
    },
    {
      title: "Really boy low county",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eius facere tenetur autem corporis fugiat expedita enim ipsa possimus soluta!",
    },
  ];
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You just have to realize it. Step into future
          today & Make it happen
        </h1>
        <p>Request Early access to get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
}
