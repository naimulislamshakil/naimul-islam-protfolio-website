import React from "react";

const Footer = () => {
  return (
    <div className="my-5">
      <footer className="footer footer-center p-4 bg-black text-white ">
        <div>
          <p>{`Copyright © ${new Date().getFullYear()} - All right reserved by Naimul Islam`}</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
