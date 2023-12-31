import React from "react";
import Card from "./CardAice";

const CardList = ({CardArtikels}) => {
  return (
    <div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center">
        {CardArtikels.map((item, index) => {
          return (
            <div key={index}>
              <Card
                key={index}
                no={item.no}
                nama={item.nama}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
