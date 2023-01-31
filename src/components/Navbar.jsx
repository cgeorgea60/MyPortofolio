import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { TfiClose } from "react-icons/tf";
import MobileMenu from "./MobileMenu";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="w-full flex justify-center h-24">
      <div className="text-center flex justify-between items-center px-2 w-full md:max-w-[80%] bg-black text-gray-200">
        <div>
          <p className="text-xl cursor-pointer md:text-2xl font-bold  hover:text-gray-400">
            Portfo<span className="text-pink-700 ">lio</span>
          </p>
        </div>
        <div className="hidden  md:block">
          <div className="flex space-x-8 cursor-pointer">
            <p className="md:text-xl font-bold  hover:text-gray-400">Home</p>
            <p className="md:text-xl font-bold  hover:text-gray-400">About Us </p>
            <p className="md:text-xl font-bold  hover:text-gray-400">Services</p>
            <p className="md:text-xl font-bold  hover:text-gray-400">Skills</p>
            <p className="md:text-xl font-bold  hover:text-gray-400">Contact Us</p>
          </div>
        </div>
        <div className="flex rounded-full bg-pink-700 p-2  px-3 cursor-pointer md:px-4 text-sm hover:opacity-70">
          Download CV
        </div>
        <div className="md:hidden">
          {
            menuOpen ? (
              
              <AiOutlineClose onClick={()=>setMenuOpen(!menuOpen)} className="text-4xl cursor-pointer hover:scale-110" />
              ):(
                
                <AiOutlineMenu onClick={()=>setMenuOpen(!menuOpen)} className="text-4xl cursor-pointer hover:scale-110" />
            )
          }
        </div>
        

            <MobileMenu menuOpen={menuOpen}/>
        
      </div>
    </div>
  );
};

export default Navbar;
