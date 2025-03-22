
import React from "react";
import { DrawerClose } from "@/components/ui/drawer";

const navItems = [
  { label: "Privacy Policy", count: 24, active: true },
  { label: "Guidelines" },
  { label: "Terms & conditions" },
  { label: "Community Guidelines" },
  { label: "FairPlay Policy" },
];

interface LegalSidebarProps {
  isMobile?: boolean;
  setActiveFilter?: (filter: string) => void;
}

export const LegalSidebar: React.FC<LegalSidebarProps> = ({ 
  isMobile = false,
  setActiveFilter
}) => {
  const handleItemClick = (label: string) => {
    if (isMobile && setActiveFilter) {
      setActiveFilter(label);
    }
  };

  const sidebarContent = (
    <>
      <div className="flex min-h-[82px] w-full items-center gap-2.5 overflow-hidden text-[22px] font-bold tracking-[0px] leading-none px-4 py-[27px] rounded-[100px]">
        Legal
      </div>

      {navItems.map((item) => (
        isMobile ? (
          <DrawerClose key={item.label} asChild>
            <div
              onClick={() => handleItemClick(item.label)}
              className={`flex min-h-14 w-full items-stretch gap-3 overflow-hidden rounded-[100px] cursor-pointer
                ${item.active ? "bg-[#AA3700] text-white" : "hover:bg-[#FFE2D9] transition-colors"}`}
            >
              <div className="flex min-w-60 w-full items-center gap-3 h-full flex-1 px-6 py-4">
                <div className="flex-1">{item.label}</div>
                {item.count && <div className="text-right">{item.count}</div>}
              </div>
            </div>
          </DrawerClose>
        ) : (
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
        )
      ))}
    </>
  );

  if (isMobile) {
    return (
      <div className="w-full text-sm text-[#5B4138] font-semibold tracking-[0.1px] leading-none">
        {sidebarContent}
      </div>
    );
  }

  return (
    <aside className="self-stretch sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto min-w-60 text-sm text-[#5B4138] font-semibold tracking-[0.1px] leading-none w-[360px] max-w-[360px] border-[#E4BEB2] border-r">
      {sidebarContent}
    </aside>
  );
};
