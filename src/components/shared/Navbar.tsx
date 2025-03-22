import React from "react";
import { Logo } from "./Logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Help", href: "/help" },
  { label: "Contact", href: "/contact" },
  { label: "Legal", href: "/legal", active: true },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white z-10 flex min-h-[72px] w-full items-center gap-[40px_100px] text-sm font-medium tracking-[0.1px] leading-none justify-between flex-wrap px-7 py-4 sticky top-0">
      <Logo />

      <div className="flex min-w-60 gap-[34px] text-[#271813] text-center">
        {navItems.map((item) => (
          <div
            key={item.label}
            className={`flex min-h-10 flex-col overflow-hidden items-stretch justify-center rounded-[100px] px-3 py-2.5
              ${item.active ? "text-[#AA3700]" : "opacity-[0.38]"}`}
          >
            {item.label}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 text-center">
        <button className="border flex min-h-10 items-center text-[#AA3700] px-6 py-2.5 rounded-[100px] border-[#8E7067] border-solid">
          Login
        </button>
        <button className="bg-[#AA3700] flex min-h-10 items-center text-white px-6 py-2.5 rounded-[100px]">
          Register
        </button>
      </div>
    </nav>
  );
};
