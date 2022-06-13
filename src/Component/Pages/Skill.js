import React from "react";
import "./Banner.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Skill = () => {
  return (
    <div className="">
      <div class="hero min-h-screen mt-5">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/JBmP2Hc/skill.jpg"
            class="max-w-sm"
            alt=""
          />
          <div>
            <h2
              data-aos="fade-right"
              className="text-secondary text-2xl font-bold"
            >
              Development Is Life
            </h2>
            <h1 data-aos="fade-left" class="text-4xl font-bold">
              I Develop Skills Regularly <br /> to Keep Me Update
            </h1>
            <p data-aos="fade-right" class="pt-6 pb-0 text-md text-gray-400">
              Every day I should incress my Skill.And Develop Skills Regularly
              to Keep Me Update
            </p>

            <div className="skill-container mt-2">
              <ul>
                <li data-aos="fade-left">
                  <h2>HTML5</h2>
                  <span className="skill">
                    <span className="html flex justify-center items-center">
                      80%
                    </span>
                  </span>
                </li>
                <li data-aos="fade-right">
                  <h2>CSS3</h2>
                  <span className="skill">
                    <span className="css flex justify-center items-center">
                      90%
                    </span>
                  </span>
                </li>
                <li data-aos="fade-left">
                  <h2>bootstrap</h2>
                  <span className="skill">
                    <span className="bs flex justify-center items-center">
                      95%
                    </span>
                  </span>
                </li>
                <li data-aos="fade-right">
                  <h2>Tailwind css</h2>
                  <span className="skill">
                    <span className="tc flex justify-center items-center">
                      95%
                    </span>
                  </span>
                </li>
                <li data-aos="fade-left">
                  <h2>javascript</h2>
                  <span className="skill">
                    <span className="js flex justify-center items-center">
                      75%
                    </span>
                  </span>
                </li>
                <li data-aos="fade-right">
                  <h2>Typescript</h2>
                  <span className="skill">
                    <span className="ts flex justify-center items-center">
                      85%
                    </span>
                  </span>
                </li>
                <li data-aos="fade-left">
                  <h2>react</h2>
                  <span className="skill">
                    <span className="rt flex justify-center items-center">
                      90%
                    </span>
                  </span>
                </li>
                <li data-aos="fade-right">
                  <h2>node</h2>
                  <span className="skill">
                    <span className="nd flex justify-center items-center">
                      60%
                    </span>
                  </span>
                </li>
                <li data-aos="fade-left">
                  <h2>express</h2>
                  <span className="skill">
                    <span className="ex flex justify-center items-center">
                      80%
                    </span>
                  </span>
                </li>
                <li data-aos="fade-right">
                  <h2>mongodb</h2>
                  <span className="skill">
                    <span className="md flex justify-center items-center">
                      70%
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <div data-aos="fade-up">
              <button class="btn btn-info mt-5">Downlode My Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
