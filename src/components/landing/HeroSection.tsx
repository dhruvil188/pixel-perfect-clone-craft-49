
import React from "react";
import { EmailSignupForm } from "./EmailSignupForm";

export const HeroSection: React.FC = () => {
  return (
    <section className="self-center w-[676px] max-w-full mt-12 max-md:mt-10">
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <div className="flex w-full flex-col items-center font-normal text-center max-md:max-w-full">
          <div className="flex flex-col items-center max-md:max-w-full">
            <div className="flex flex-col items-center max-md:max-w-full">
              <div className="text-white text-sm leading-none tracking-[0.98px] uppercase">
                launching 2025
              </div>
              <h1 className="text-white text-[71px] leading-[77px] tracking-[-1.42px] mt-2 max-md:max-w-full max-md:text-[40px] max-md:leading-[48px]">
                Grow your users. Smarter.
              </h1>
            </div>
          </div>
          <p className="text-white text-xl leading-[35px] mt-4 max-md:max-w-full">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <EmailSignupForm />
        </div>
      </div>
    </section>
  );
};
