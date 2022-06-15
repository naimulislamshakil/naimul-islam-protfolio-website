import React, { useState } from "react";
import "./Banner.css";
import address from "../../img/address.png";
import call from "../../img/call.png";
import email from "../../img/arroba.png";
import { toast } from "react-toastify";
import { send } from "emailjs-com";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [emails, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [subject, setSubject] = useState("");
  const [message, setMassage] = useState("");

  const submit = (event) => {
    event.preventDefault();
    send(
      "service_te1du0l",
      "template_2v8sbsk",
      { name, email, subject, message, number },
      "Fkc4kg1aVX_E4HE2u"
    ).then((res) => {
      if (res.status === 200) {
        toast.success("Email Send Successfull.");
      }
    });
    event.target.reset();
  };
  return (
    <div id="contact" className="bg-contact">
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
          <div className="w-full flex items-center justify-center my-12">
            <form
              onSubmit={submit}
              className=" bg-white dark:bg-gray-800 shadow w-3/4 rounded py-12  px-8"
            >
              <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700 dark:text-white">
                Let’s chat and get a quote!
              </p>
              <div className="md:flex items-center justify-center mt-12">
                <div className="md:w-72 flex flex-col">
                  <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
                    Name
                  </label>
                  <input
                    onBlur={(e) => setName(e.target.value)}
                    tabindex="0"
                    arial-label="Please input name"
                    type="name"
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                    placeholder="Please input  name"
                  />
                </div>
                <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
                    Email Address
                  </label>
                  <input
                    onBlur={(e) => setEmail(e.target.value)}
                    tabindex="0"
                    arial-label="Please input email address"
                    type="email"
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                    placeholder="Please input email address"
                  />
                </div>
              </div>
              <div className="md:flex items-center justify-center mt-8">
                <div className="md:w-72 flex flex-col">
                  <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
                    Phone
                  </label>
                  <input
                    onBlur={(e) => setNumber(e.target.value)}
                    tabindex="0"
                    role="input"
                    arial-label="Please input company name"
                    type="number"
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                    placeholder="Please input company name"
                  />
                </div>
                <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
                    Subject
                  </label>
                  <input
                    onBlur={(e) => setSubject(e.target.value)}
                    tabindex="0"
                    arial-label="Please input country name"
                    type="name"
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                    placeholder="Please input country name"
                  />
                </div>
              </div>
              <div>
                <div className="w-full flex flex-col mt-8">
                  <label className="text-base text-center font-semibold leading-none text-gray-800 dark:text-white">
                    Message
                  </label>
                  <textarea
                    onBlur={(e) => setMassage(e.target.value)}
                    tabindex="0"
                    aria-label="leave a message"
                    role="textbox"
                    type="name"
                    className="h-36 w-full lg:w-3/4 mx-auto text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center w-full">
                <input
                  value="SUBMIT"
                  type="submit"
                  className="mt-9 text-center text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
                ></input>
              </div>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl mx-auto">
              <figure>
                <img className="w-[70px]" src={address} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">Address</h2>
                <p className="text-center">
                  Uttarkul, Banaripara-8530 <br /> Barisal, Bangladesh
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl mx-auto">
              <figure>
                <img className="w-[70px]" src={email} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">Email</h2>
                <p className="text-center">naimul.islam.shakil55@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl mx-auto">
              <figure>
                <img className="w-[70px]" src={call} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">Phone</h2>
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
