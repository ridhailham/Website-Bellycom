import React from "react";

const Hero = () => {
  const containerStyle = {
    position: "relative",
    width: "100vw", 
    height: "100vh",
    overflow: "hidden",
    backgroundImage: 'url("/images/bg-1.jpg")',
    backgroundRepeat: "repeat",
    backgroundSize: "100px 100px", // Atur ukuran gambar yang ingin digunakan
    backgroundPosition: "center",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  };

  const cardStyle = {
    backgroundColor: "white",
    width: "60vw",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const titleStyle = {
    fontSize: "4rem",
    fontWeight: "bold",
    textAlign: "center",
    background: "linear-gradient(to bottom right, #F34E4E, #ffdd00)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const subtitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    background: "linear-gradient(to bottom right, #F34E4E, #fec7a0)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={cardStyle}>
          <div className="min-w-full min-h-[100vh] flex flex-col items-center justify-center gap-8">
            <div className="bg-white w-[60vw] h-[50vh] flex gap-8 flex-col justify-center items-center rounded-[100px] shadow-2xl shadow-[#ff4800] border: to-black">
              <h3 className="bg-gradient-to-br bg-clip-text from-[#F34E4E] text-transparent to-[#ffdd00] text-4xl md:text-9xl font-bold text-center">Belly</h3>
              <h3 className=" bg-gradient-to-br bg-clip-text from-[#F34E4E] text-transparent to-[#fec7a0]  font-bold text-[20px] md:text-3xl">
                Choose With Your Pleasure
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;




// // import React from "react";

// const Hero = () => {
//   return (
//     <div
//       className=""
//       style={{
//         backgroundImage: 'url("/images/bg-1.jpg")',
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="min-w-full min-h-[100vh] flex flex-col items-center justify-center gap-8">
//         <div className="bg-white w-[60vw] h-[50vh] flex gap-8 flex-col justify-center items-center rounded-[100px] shadow-2xl shadow-[#ff4800] border: to-black">
//           <h3 className="bg-gradient-to-br bg-clip-text from-[#F34E4E] text-transparent to-[#ffdd00] text-4xl md:text-9xl font-bold text-center">Belly</h3>
//           <h3 className=" bg-gradient-to-br bg-clip-text from-[#F34E4E] text-transparent to-[#fec7a0]  font-bold text-[20px] md:text-3xl">
//             Choose With Your Pleasure
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
