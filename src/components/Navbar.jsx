import React from "react";
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="w-full flex justify-center h-24">
      <div className="text-center flex justify-between items-center px-2 w-full md:max-w-[80%] bg-black text-white">
        <div>
          <p className="text-xl">
            Portfo<span className="text-pink-700 cursor-pointer">lio</span>
          </p>
        </div>
        <div className="hidden  md:block">
      <div className="flex space-x-8 cursor-pointer">
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
          <p>Skills</p>
          <p>Contact Us</p>

      </div>

        </div>
        <div className="flex rounded-full bg-pink-700 p-2  px-3 cursor-pointer md:px-4 text-sm">Download CV</div>
        <div className="md:hidden">
        <AiOutlineMenu className="text-4xl cursor-pointer hover:scale-110"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
