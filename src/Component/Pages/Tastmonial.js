import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Tastmonial = () => {
  return (
    <div className="mt-5 bg-testmonial">
      <h2 className="text-2xl font-bold text-center text-secondary">
        Testimonials
      </h2>
      <h2 className="text-center font-bold text-4xl">What My Clients Say</h2>
      <p className="text-center text-lg mt-3">Tell me my clients for my work</p>
      <div>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper my-5"
          slidesPerView="1"
        >
          <SwiperSlide>
            <div>
              <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800  w-3/4 mx-auto justify-center	items-center h-[350px]">
                <img
                  class="w-96 h-24 lg:w-full md:rounded-none rounded-full mx-auto"
                  src="https://i.ibb.co/JFXKwZw/2.jpg"
                  alt=""
                />
                <div class="pt-6 md:p-8 text-white text-center md:text-left space-y-4">
                  <blockquote>
                    <p class="text-lg font-medium">
                      “I realy like to write reviews, but the Marketify team
                      truly deserve a standing ovation for their customer
                      support, customisation and most importantly, friendliness
                      and professionalism. Many thanks once again for everything
                      and hope that I get to deal with you again in the near
                      future.”
                    </p>
                  </blockquote>
                  <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">
                      Mike Anderson
                    </div>
                    <div class="text-slate-700 dark:text-slate-500">
                      Vivaco Studio
                    </div>
                  </figcaption>
                </div>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800  w-3/4 mx-auto justify-center	items-center h-[350px]">
                <img
                  class="w-96 h-24 lg:w-full md:rounded-none rounded-full mx-auto"
                  src="https://i.ibb.co/PgxNz0q/3.jpg"
                  alt=""
                />
                <div class="pt-6 md:p-8 text-white text-center md:text-left space-y-4">
                  <blockquote>
                    <p class="text-lg font-medium">
                      “Really the Code Quality, Customer Support, and design are
                      awesome and its good support they are giving. They give an
                      instant solution to our needs. Really awesome. I will
                      strongly recommend to my friends. Simply amazing team and
                      amazing theme! Thank you from United States of America!”
                    </p>
                  </blockquote>
                  <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">
                      Keita Smith
                    </div>
                    <div class="text-slate-700 dark:text-slate-500">
                      ABC Group
                    </div>
                  </figcaption>
                </div>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800  w-3/4 mx-auto justify-center	items-center h-[350px]">
                <img
                  class="w-96 h-24 lg:w-full md:rounded-none rounded-full mx-auto"
                  src="https://i.ibb.co/6bWR7vF/6.jpg"
                  alt=""
                />
                <div class="pt-6 md:p-8 text-white text-center md:text-left space-y-4">
                  <blockquote>
                    <p class="text-lg font-medium">
                      “Loved the template design, documentation, customizability
                      and the customer support from Marketify team! I am a noob
                      in programming with very little knowledge about coding but
                      the Marketify team helped me to launch my resume website
                      successfully. Much recommended!”
                    </p>
                  </blockquote>
                  <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">
                      Alan Walker
                    </div>
                    <div class="text-slate-700 dark:text-slate-500">
                      Web Designer
                    </div>
                  </figcaption>
                </div>
              </figure>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Tastmonial;
