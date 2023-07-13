import React from "react";
import PaginationAll from "../PaginationAll";
import PaginationAllAice from "../PaginationAllAice";

const Product = () => {
  return (

    <div className="min-h-full min-w-full">

      <div className="min-w-full min-h-[30vh] flex flex-col items-center justify-center gap-8">
        <div className="bg-white w-[60vw] h-[20vh] flex gap-8 flex-col justify-center items-center rounded-[10px] shadow-2xl shadow-[#e95151]">
          <h3 className="bg-gradient-to-br bg-clip-text from-[#F34E4E] text-transparent to-[#fcdb05] text-4xl md:text-7xl font-bold text-center ">Our Products</h3>

        </div>
      </div>
      <br />
      <h3 className="text-[#000000] font-bold text-5xl py-5">Chocotea</h3>
      <PaginationAll />

      <h3 className="text-[#000000] font-bold text-5xl py-10">AICE Ice Cream</h3>
      <PaginationAllAice />

      <h3 className="text-[#000000] font-bold text-5xl py-10">Other</h3>
      <PaginationAll />
    </div>




  );
};

export default Product;
