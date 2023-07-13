// import React from "react";

// eslint-disable-next-line react/prop-types
const Card = ({nama, no}) => {
  return (
    <div className="my-3 ">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-[#00ff44] shadow-md">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-auto"
            src={`/images/pict-${no}.jpg`}
            alt={no}
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
              {nama}
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
