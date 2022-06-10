import React from "react";
import "./Banner.css";

const Skill = () => {
  return (
    <div>
      <div class="hero min-h-screen mt-5">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/JBmP2Hc/skill.jpg"
            class="max-w-sm"
            alt=""
          />
          <div>
            <h2 className="text-secondary text-2xl font-bold">
              Development Is Life
            </h2>
            <h1 class="text-4xl font-bold">
              I Develop Skills Regularly <br /> to Keep Me Update
            </h1>
            <p class="pt-6 pb-0">
              Every day I should incress my Skill.And Develop Skills Regularly
              to Keep Me Update
            </p>

            <div className="skill-container">
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
