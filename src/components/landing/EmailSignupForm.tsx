
import React, { useState } from "react";

export const EmailSignupForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Submitted email:", email);
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[456px] text-sm leading-none">
      <div className="flex w-full gap-2.5 text-center justify-center max-md:max-w-full">
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-[rgba(35,36,38,1)] shadow-[0px_1px_4px_rgba(38,40,46,0.37)] min-w-60 text-[rgba(170,170,170,1)] font-light tracking-[0.98px] flex-1 shrink basis-[0%] px-4 py-[11px] rounded-xl max-md:pr-5 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="self-stretch rotate-[-6.938893903907228e-18rad] bg-[rgba(4,79,199,1)] shadow-[0px_1px_2px_rgba(13,32,62,0.5)] gap-1.5 overflow-hidden text-white font-normal px-5 py-[11px] rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-70"
        >
          {isSubmitting ? "Signing Up..." : "Sign Up Now"}
        </button>
      </div>
      <div className="text-white font-normal mt-2 max-md:max-w-full">
        <span className="font-['DM_Sans',_-apple-system,_Roboto,_Helvetica,_sans-serif] text-white">
          We care about your data in our{" "}
        </span>
        <a 
          href="#privacy-policy" 
          className="font-['DM_Sans',_-apple-system,_Roboto,_Helvetica,_sans-serif] underline text-white hover:text-blue-300 transition-colors"
        >
          privacy policy
        </a>
        <span className="font-['DM_Sans',_-apple-system,_Roboto,_Helvetica,_sans-serif] text-white">
          .
        </span>
      </div>
    </form>
  );
};
