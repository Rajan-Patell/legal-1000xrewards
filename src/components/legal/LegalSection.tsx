
import React from "react";
import { Navbar } from "../shared/Navbar";
import { Footer } from "../shared/Footer";
import { LegalSidebar } from "./LegalSidebar";
import { LegalContent } from "./LegalContent";

export const LegalSection: React.FC = () => {
  return (
    <div className="bg-white relative overflow-hidden rounded-[18px] flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-1 w-full overflow-hidden">
        <LegalSidebar />
        <LegalContent />
      </div>

      <Footer />
    </div>
  );
};
