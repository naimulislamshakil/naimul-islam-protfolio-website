import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "./Banner.css";
import arrow from "../../img/arrow.png";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const SingalPortfolio = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/singal/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);
  console.log(item);
  const {
    client_link,
    client_text,
    server_link,
    server_text,
    live_text,
    live_link,
    img,
    titel,
    text,
  } = item;
  return (
    <div className="mt-16">
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 w-full mx-auto justify-center	items-center h-[350px]">
        <img
          class="w-96 h-24 lg:w-[600px] lg:h-full md:rounded-none rounded-full mx-auto"
          src={img}
          alt=""
        />
        <div class="pt-6 md:p-8 text-white text-center md:text-left space-y-4">
          <blockquote>
            <h2 className="text-black text-3xl font-bold mb-3">{titel}</h2>
            <p class="text-lg font-medium text-black">“{text}”</p>
            <div className="arrow-text text-black">
              <img
                data-aos="fade-right"
                className="w-[20px] mr-3"
                src={arrow}
                alt=""
              />
              <a href={client_link} target="_blank">
                <h3 data-aos="fade-left" className="text-md font-bold ">
                  {client_text}
                </h3>
              </a>
            </div>
            {server_text ? (
              <div className="arrow-text text-black">
                <img
                  data-aos="fade-right"
                  className="w-[20px] mr-3"
                  src={arrow}
                  alt=""
                />
                <a href={server_link} target="_blank">
                  <h3 data-aos="fade-left" className="text-md font-bold ">
                    {server_text}
                  </h3>
                </a>
              </div>
            ) : (
              ""
            )}
          </blockquote>
          <figcaption class="font-medium">
            <a className="btn btn-secondary" href={live_link} target="_blank">
              {live_text}
            </a>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default SingalPortfolio;
