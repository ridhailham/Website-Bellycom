// import React from "react";

const Hero = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: 'url("/images/bg-1.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="min-w-full min-h-[100vh] flex flex-col items-center justify-center gap-8">
        <div className="bg-white w-[60vw] h-[50vh] flex gap-8 flex-col justify-center items-center rounded-[100px] shadow-2xl shadow-[#ff4800]">
          <h3 className="bg-gradient-to-br bg-clip-text from-[#F34E4E] text-transparent to-[#fec7a0] text-4xl md:text-8xl font-bold text-center">Belly</h3>
          <h3 className=" bg-gradient-to-br bg-clip-text from-[#F34E4E] text-transparent to-[#fec7a0]  font-normal text-[20px] md:text-3xl">
            Choose With Your Pleasure
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
