// import React from "react";

const Footer = () => {
  return (
    <div className="border-[#ff4800] border-t-2">
      <footer className="bg-[#ff4800] ">
        <div className="mx-auto w-full p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between block"></div>
          <div className="sm:flex sm:items-center block sm:justify-between">
            <span className="text-sm text-white sm:text-center">
              © 2023{" "}
              <a href="https://www.instagram.com/brawijayapreneur/" className="hover: text-white">
                Brawijayapreneur
              </a>
              . All Rights Reserved.
            </span>
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
