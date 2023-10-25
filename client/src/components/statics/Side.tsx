import React from "react";

interface iSide {
  icon: any;
  text?: string;
}
const Side: React.FC<iSide> = ({ icon, text }) => {
  return (
    <>
      <div
        className="w-full flex mb-2 items-center h-[45px] p-3 hover:bg-gray-300 cursor-pointer transition-all duration-300
         rounded-md capitalize"
      >
        <div className="text-[20px]">{icon}</div>
        <span className="ml-2">{text}</span>
      </div>
    </>
  );
};

export default Side;
