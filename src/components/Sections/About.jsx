import React from "react";

const About = () => {
  return (
    <div className="bg-[#ff4800] h-[70vh] w-[100vw] flex justify-center py-5 gap-8">
      <div className="flex flex-col gap-8">
        <div className="min-w-full min-h-[30vh] flex flex-col items-center justify-center gap-8">
          <div className="bg-white w-[60vw] h-[18vh] flex gap-8 flex-col justify-center items-center rounded-[10px] shadow-2xl shadow-[#000000]">
            <h3 className="bg-gradient-to-br bg-clip-text from-[#F34E4E] text-transparent to-[#ffdd00] text-4xl md:text-7xl font-bold text-center ">About Us</h3>

          </div>
        </div>
        <h3 className="text-3xl font-medium">BELLY.COM is a business entity that focuses on developing sales in the field of food and beverages whose target market is Brawijaya University residents.
          Belly.com is a food and beverage business that focuses on unique, delicious and nutritious flavors. In addition to prices that are suitable for students, now belly.com presents several menus that can follow current market trends.
        </h3>
      </div>
    </div>
  );
};

export default About;
