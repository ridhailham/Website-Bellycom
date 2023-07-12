import React from "react";

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
        <div className="bg-white w-[60vw] h-[50vh] flex gap-8 flex-col justify-center items-center rounded-[100px] shadow-2xl shadow-[#ff4800] border: to-black" style={styles.card}>
          <h3 className="bg-gradient-to-br bg-clip-text from-[#F34E4E] text-transparent to-[#ffdd00] text-4xl md:text-9xl font-bold text-center">Belly</h3>
          <h3 className="bg-gradient-to-br bg-clip-text from-[#F34E4E] text-transparent to-[#fec7a0] font-bold text-[20px] md:text-3xl">
            Choose With Your Pleasure
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const styles = {
  card: {
    animation: "customMoveAnimation 3s infinite",
  },
};

// CSS di bawah ini dapat ditambahkan di dalam file Hero.js

const css = `
@keyframes customMoveAnimation {
  0% {
    transform: translateX(-50px);
  }
  50% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(-50px);
  }
}
`;

const styleTag = document.createElement("style");
styleTag.innerHTML = css;
document.head.appendChild(styleTag);
