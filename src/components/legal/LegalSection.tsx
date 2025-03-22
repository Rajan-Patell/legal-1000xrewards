
import React, { useState } from "react";
import { Navbar } from "../shared/Navbar";
import { Footer } from "../shared/Footer";
import { LegalSidebar } from "./LegalSidebar";
import { LegalContent } from "./LegalContent";
import { useIsMobile } from "@/hooks/use-mobile";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";

export const LegalSection: React.FC = () => {
  const isMobile = useIsMobile();
  const [activeFilter, setActiveFilter] = useState("Privacy Policy");

  return (
    <div className="bg-white relative overflow-hidden rounded-[18px] flex flex-col min-h-screen">
      <Navbar />

      {isMobile ? (
        <>
          <div className="p-4 flex items-center justify-between border-b border-[#E4BEB2]">
            <h2 className="text-lg font-bold text-[#271813]">{activeFilter}</h2>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 border-[#E4BEB2] text-[#5B4138]">
                  <FilterIcon size={16} />
                  Filter
                </Button>
              </DrawerTrigger>
              <DrawerContent className="p-0">
                <LegalSidebar isMobile={true} setActiveFilter={setActiveFilter} />
              </DrawerContent>
            </Drawer>
          </div>
          <div className="flex-1 overflow-auto">
            <LegalContent />
          </div>
        </>
      ) : (
        <div className="flex flex-1 w-full overflow-hidden">
          <LegalSidebar />
          <LegalContent />
        </div>
      )}

      <Footer />
    </div>
  );
};
