import React from "react";
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="w-full flex justify-center h-24">
      <div className="text-center flex justify-between items-center px-2 w-full bg-blue-600">
        <div>
          <p>
            Portfo<span className="text-red-500">lio</span>
          </p>
        </div>
        <div className="hidden  md:block">
      <div className="flex space-x-8">
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
          <p>Skills</p>
          <p>Contact Us</p>

      </div>

        </div>
        <div className="flex">Download CV</div>
        <div className="md:hidden">
        <AiOutlineMenu className="text-4xl cursor-pointer hover:scale-110"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
