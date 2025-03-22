import React from "react";

interface LogoProps {
  size?: "small" | "large";
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = "small",
  className = "",
}) => {
  const textSize = size === "large" ? "text-[52px]" : "text-[27px]";
  const imageSize = size === "large" ? "w-[69px]" : "w-9";

  return (
    <div
      className={`flex items-center gap-[9px] text-[#AA3700] font-bold tracking-[-1.08px] leading-none ${className}`}
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/94886cb363af6ce8004717e41d413c478895cb98?placeholderIfAbsent=true"
        className={`aspect-[1] object-contain ${imageSize} shrink-0`}
        alt="1000XRewards Logo"
      />
      <div className={`${textSize} tracking-[-2.07px]`}>1000XRewards</div>
    </div>
  );
};
