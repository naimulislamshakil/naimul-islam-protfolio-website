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

            <div className="skill-container mt-2">
              <ul>
                <li>
                  <h2>HTML5</h2>
                  <span className="skill">
                    <span className="html flex justify-center items-center">
                      80%
                    </span>
                  </span>
                </li>
                <li>
                  <h2>CSS3</h2>
                  <span className="skill">
                    <span className="css flex justify-center items-center">
                      90%
                    </span>
                  </span>
                </li>
                <li>
                  <h2>bootstrap</h2>
                  <span className="skill">
                    <span className="bs flex justify-center items-center">
                      95%
                    </span>
                  </span>
                </li>
                <li>
                  <h2>Tailwind css</h2>
                  <span className="skill">
                    <span className="tc flex justify-center items-center">
                      95%
                    </span>
                  </span>
                </li>
                <li>
                  <h2>javascript</h2>
                  <span className="skill">
                    <span className="js flex justify-center items-center">
                      75%
                    </span>
                  </span>
                </li>
                <li>
                  <h2>Typescript</h2>
                  <span className="skill">
                    <span className="ts flex justify-center items-center">
                      85%
                    </span>
                  </span>
                </li>
                <li>
                  <h2>react</h2>
                  <span className="skill">
                    <span className="rt flex justify-center items-center">
                      90%
                    </span>
                  </span>
                </li>
                <li>
                  <h2>node</h2>
                  <span className="skill">
                    <span className="nd flex justify-center items-center">
                      60%
                    </span>
                  </span>
                </li>
                <li>
                  <h2>express</h2>
                  <span className="skill">
                    <span className="ex flex justify-center items-center">
                      80%
                    </span>
                  </span>
                </li>
                <li>
                  <h2>mongodb</h2>
                  <span className="skill">
                    <span className="md flex justify-center items-center">
                      70%
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <button class="btn btn-primary mt-5">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
