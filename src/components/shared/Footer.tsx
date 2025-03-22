import React from "react";
import { Logo } from "./Logo";

const footerLinks = {
  company: ["About Us", "Careers"],
  support: ["Help Center", "Contact Us"],
  legal: [
    "Terms of Condition",
    "Privacy Policy",
    "Security",
    "Guidelines",
    "Community guidelines",
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFE2D9] flex min-h-[381px] w-full items-stretch gap-[40px_48px] flex-wrap p-16 max-md:px-5">
      <div className="flex min-w-60 flex-col justify-between flex-1 shrink basis-[0%]">
        <Logo size="large" />
        <div className="flex gap-3 mt-[140px] max-md:mt-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/765eba5b97ad23313de388adc14437c234e56070?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-11"
            alt="Social Media 1"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/789a7c8ffd9c6918dd8f43e9b0b5032a3081f860?placeholderIfAbsent=true"
            className="aspect-[1.02] object-contain w-[45px]"
            alt="Social Media 2"
          />
        </div>
      </div>

      <div className="flex min-w-60 items-stretch gap-6 text-sm text-[#5B4138] font-medium tracking-[0.1px] leading-none flex-wrap">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="w-48">
            <h3 className="text-[#271813] text-[22px] font-bold leading-none">
              {title.charAt(0).toUpperCase() + title.slice(1)}
            </h3>
            {links.map((link) => (
              <div
                key={link}
                className="mt-2 cursor-pointer hover:text-[#AA3700] transition-colors"
              >
                {link}
              </div>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};
