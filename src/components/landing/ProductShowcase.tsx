
import React from "react";

interface ProductShowcaseProps {
  imageSrc: string;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ imageSrc }) => {
  return (
    <div className="w-full mt-12 max-md:mt-10 pb-0">
      <img
        src={imageSrc}
        alt="SynTask product dashboard"
        className="aspect-[2.67] object-cover w-full overflow-hidden"
      />
    </div>
  );
};
