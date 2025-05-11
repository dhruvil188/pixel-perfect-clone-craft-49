import React from "react";

interface ProductShowcaseProps {
  imageSrc: string;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ imageSrc }) => {
  return (
    <div className="w-full mt-12 max-md:mt-10">
      <img
        src={imageSrc}
        alt="SynTask product dashboard"
        className="aspect-[2.67] object-contain w-full ml-[34px] mr-[33px] max-md:max-w-full max-md:mr-2.5"
      />
    </div>
  );
};
