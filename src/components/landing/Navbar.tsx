import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-[rgba(23,25,28,1)] shadow-[0px_1px_4px_rgba(38,40,46,0.37)] flex w-full flex-col items-stretch pb-[21px] px-[45px] rounded-[500px] max-md:max-w-full max-md:px-5">
      <div className="w-[259px] shrink-0 max-w-full h-px mr-[167px] max-md:mr-2.5" />
      <div className="flex w-full items-center gap-5 flex-wrap justify-between mt-5 max-md:max-w-full">
        <div className="self-stretch flex items-center gap-[7px] whitespace-nowrap text-center uppercase my-auto">
          <div className="text-[rgba(243,243,243,1)] text-base font-normal leading-[35px] tracking-[1.76px] self-stretch my-auto">
            SynTask
          </div>
          <div className="text-[rgba(165,165,165,1)] text-[22px] font-extralight leading-loose tracking-[2.42px] self-stretch w-[9px] my-auto">
            ®
          </div>
        </div>
        <div className="self-stretch flex gap-8 text-base text-neutral-50 font-normal whitespace-nowrap my-auto">
          <button className="hover:text-blue-300 transition-colors">Products</button>
          <button className="hover:text-blue-300 transition-colors">Resources</button>
          <button className="hover:text-blue-300 transition-colors">Pricing</button>
        </div>
        <button className="self-stretch rotate-[-6.938893903907228e-18rad] bg-[rgba(4,79,199,1)] shadow-[0px_1px_2px_rgba(13,32,62,0.5)] gap-1.5 overflow-hidden text-sm text-white font-normal text-center leading-none px-5 py-[11px] rounded-xl hover:bg-blue-700 transition-colors">
          Sign Up Now
        </button>
      </div>
    </nav>
  );
};
