import React from "react";

const navItems = [
  { label: "Privacy Policy", count: 24, active: true },
  { label: "Guidelines" },
  { label: "Terms & conditions" },
  { label: "Community Guidelines" },
  { label: "FairPlay Policy" },
];

export const LegalSidebar: React.FC = () => {
  return (
    <aside className="self-stretch min-w-60 overflow-hidden text-sm text-[#5B4138] font-semibold tracking-[0.1px] leading-none w-[360px] max-w-[360px] border-[#E4BEB2] border-r">
      <div className="flex min-h-[82px] w-full items-center gap-2.5 overflow-hidden text-[22px] font-bold tracking-[0px] leading-none px-4 py-[27px] rounded-[100px]">
        Legal
      </div>

      {navItems.map((item) => (
        <div
          key={item.label}
          className={`flex min-h-14 w-full items-stretch gap-3 overflow-hidden rounded-[100px] cursor-pointer
            ${item.active ? "bg-[#AA3700] text-white" : "hover:bg-[#FFE2D9] transition-colors"}`}
        >
          <div className="flex min-w-60 w-full items-center gap-3 h-full flex-1 px-6 py-4">
            <div className="flex-1">{item.label}</div>
            {item.count && <div className="text-right">{item.count}</div>}
          </div>
        </div>
      ))}
    </aside>
  );
};
