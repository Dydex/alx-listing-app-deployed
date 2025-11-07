import React from "react";
import { CardProps } from "../../interfaces";
import Image from "next/image";

const Card: React.FC<{ card: CardProps }> = ({ card }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition">
      <Image
        src={card.image}
        alt={card.name}
        width={600}
        height={192}
        className="object-cover rounded-xl"
      />
      <div className=" p-2">
        <div className="flex justify-between items-start">
          <div className="flex flex-col  items-start">
            <h3 className="text-lg text-[#161117] font-semibold">
              {card.name}
            </h3>
            <h6 className="text-md text-[#161117]">
              {card.address.city}, {card.address.country}
            </h6>
          </div>

          <div className="flex space-x-1 items-center">
            <Image src="/icons/Star 2.png" alt="Star" width={16} height={2} />
            <p className="text-black">{card.rating}</p>
          </div>
        </div>

        <div className="flex justify-end items-end">
          <strong className="text-black text-lg font-bold mt-2">
            ${card.price}
          </strong>
          <p className="text-black">/n</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
