import React from 'react';
import Typography from "../Typography/Typography";

interface CardProps {
  text: string;
}

const Card: React.FC<CardProps> = ({ text }) => {
  return (
    <div className="relative bg-[#FAFAFA] rounded-3xl hover:bg-black text-black hover:text-white cursor-pointer">
      <div className="pb-[62.5%]"> {/* 1.6 (height) / 2.56 (width) = 0.625 */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <Typography fontSize="text-base sm:text-sm" fontWeight="font-bold" color="text-inherit">
            {text}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Card;
