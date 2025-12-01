import React from "react";
import { FileCheck } from "lucide-react";

const Header = () => (
  <div className="text-center py-6">
    <div className="flex justify-center items-center space-x-3">
      <FileCheck size={36} className="text-blue-900" />
      <h1 className=" text-3xl  text-4xl font-bold text-gray-900 tracking-wide">
        เลือกคณะกรรมการในการเปิดซอง
      </h1>
    </div>

    {/* Gradient underline */}
    <div className="w-2/5 mx-auto mt-4 h-1 rounded-full bg-gradient-to-r 
                    from-gray-300 via-blue-400 to-gray-300" />
  </div>
);

export default Header;
