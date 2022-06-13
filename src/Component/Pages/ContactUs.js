import React from "react";
import "./Banner.css";
import address from "../../img/address.png";
import call from "../../img/call.png";
import email from "../../img/arroba.png";

const ContactUs = () => {
  return (
    <div className="bg-contact">
      <div>
        <h2 className="text-2xl text-center font-bold text-secondary">
          Contact Me{" "}
        </h2>

        <h2 className="text-4xl text-center font-bold">
          I Want To Hear From You
        </h2>

        <p className="text-md text-center text-gray-400">
          Please fill out the form on this section to contact with me. Or call
          between <br /> 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
        </p>
      </div>
      <div>
        <div>
          <div class="w-full flex items-center justify-center my-12">
            <div class=" bg-white dark:bg-gray-800 shadow w-3/4 rounded py-12  px-8">
              <p class="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700 dark:text-white">
                Let’s chat and get a quote!
              </p>
              <div class="md:flex items-center justify-center mt-12">
                <div class="md:w-72 flex flex-col">
                  <label class="text-base font-semibold leading-none text-gray-800 dark:text-white">
                    Name
                  </label>
                  <input
                    tabindex="0"
                    arial-label="Please input name"
                    type="name"
                    class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                    placeholder="Please input  name"
                  />
                </div>
                <div class="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label class="text-base font-semibold leading-none text-gray-800 dark:text-white">
                    Email Address
                  </label>
                  <input
                    tabindex="0"
                    arial-label="Please input email address"
                    type="name"
                    class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                    placeholder="Please input email address"
                  />
                </div>
              </div>
              <div class="md:flex items-center justify-center mt-8">
                <div class="md:w-72 flex flex-col">
                  <label class="text-base font-semibold leading-none text-gray-800 dark:text-white">
                    Company name
                  </label>
                  <input
                    tabindex="0"
                    role="input"
                    arial-label="Please input company name"
                    type="name"
                    class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                    placeholder="Please input company name"
                  />
                </div>
                <div class="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label class="text-base font-semibold leading-none text-gray-800 dark:text-white">
                    Country
                  </label>
                  <input
                    tabindex="0"
                    arial-label="Please input country name"
                    type="name"
                    class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                    placeholder="Please input country name"
                  />
                </div>
              </div>
              <div>
                <div class="w-full flex flex-col mt-8">
                  <label class="text-base text-center font-semibold leading-none text-gray-800 dark:text-white">
                    Message
                  </label>
                  <textarea
                    tabindex="0"
                    aria-label="leave a message"
                    role="textbox"
                    type="name"
                    class="h-36 w-3/4 mx-auto text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                  />
                </div>
              </div>

              <div class="flex items-center justify-center w-full">
                <button class="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div>
            <div class="card card-compact w-80 bg-base-100 shadow-xl mx-auto">
              <figure>
                <img className="w-[70px]" src={address} alt="" />
              </figure>
              <div class="card-body">
                <h2 class="card-title justify-center">Address</h2>
                <p className="text-center">
                  Uttarkul, Banaripara-8530 <br /> Barisal, Bangladesh
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="card card-compact w-80 bg-base-100 shadow-xl mx-auto">
              <figure>
                <img className="w-[70px]" src={email} alt="" />
              </figure>
              <div class="card-body">
                <h2 class="card-title justify-center">Email</h2>
                <p className="text-center">naimul.islam.shakil55@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <div class="card card-compact w-80 bg-base-100 shadow-xl mx-auto">
              <figure>
                <img className="w-[70px]" src={call} alt="" />
              </figure>
              <div class="card-body">
                <h2 class="card-title justify-center">Phone</h2>
                <p className="text-center">+880 1317514691</p>
                <p className="text-center">+880 1879212420</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
