import React from "react";

interface PillButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  color?: string; // Tailwind class, e.g. 'bg-[#f80]'
}

export default function PillButton({ children, className = "", onClick, color = "bg-[#89f]" }: PillButtonProps) {
  return (
    <button
      className={[
        color,
        "rounded-full min-w-[160px] h-[56px] px-6 flex items-center justify-end text-black font-normal text-2xl border-2 border-black shadow-sm select-none",
        className,
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
