import React, { type ReactNode } from "react";

interface ButtonProps {
  type: "submit" | "reset" | "button" | undefined;
  children: ReactNode;
  width?: string;
  onClick?: () => void;
  disable?: boolean;
  id?: string;
}

const GGButton = ({ type, children, width, onClick, disable }: ButtonProps) => {
  return (
    <button
      style={{ width }}
      type={type}
      disabled={disable}
      onClick={onClick}
      className="group-invalid:pointer-events-none group-invalid:opacity-30 bg-[#0177fd] transition-all duration-300 ease-in-out hover:bg-blue-400 hover:text-white hover:outline hover:ring-primary rounded-[14px] px-4 max-lg:px-3 py-2.5 text-white font-sans w-full my-2 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {children}
    </button>
  );
};

export default GGButton;
