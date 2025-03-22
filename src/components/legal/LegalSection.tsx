import React from "react";
import { Navbar } from "../shared/Navbar";
import { Footer } from "../shared/Footer";
import { LegalSidebar } from "./LegalSidebar";
import { LegalContent } from "./LegalContent";

export const LegalSection: React.FC = () => {
  return (
    <div className="bg-white relative overflow-hidden rounded-[18px]">
      <Navbar />

      <div className="z-0 flex w-full items-center justify-between flex-wrap pt-[60px]">
        <LegalSidebar />
        <LegalContent />
      </div>

      <Footer />
    </div>
  );
};
