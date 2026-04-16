import React from "react";

type CornerPanelProps = {
  className?: string;
  children?: React.ReactNode;
  fillClassName?: string;
};

export default function CornerPanel({
  className = "",
  children,
  fillClassName = "fill-indigo-400",
}: CornerPanelProps) {
  return (
    <div className={`relative w-full max-w-5xl mx-auto overflow-hidden px-4 ${className}`}>
      <svg
        viewBox="0 0 120 48"
        className="block w-full h-auto pointer-events-none"
        aria-hidden
      >
        <path
          className={fillClassName}
          d={`
            M30 5
            Q0 4 0 24
            V48
            H40
            V40
            Q40 13 60 12
            H120
            V5
            Z
          `}
        />
      </svg>

      {children && (
        <div className="absolute inset-0 px-4">
          {children}
        </div>
      )}
    </div>
  );
}
