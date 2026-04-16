import React from "react";

type SidePanelProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function SidePanel({
  className = "",
  children,
}: SidePanelProps) {
  return (
    <div className={`relative w-1/3 max-w-5xl overflow-hidden my-2 ${className}`}>
      <div className="bg-indigo-400 rounded-b-xl w-full">
        {children}
      </div>
    </div>
  );
}