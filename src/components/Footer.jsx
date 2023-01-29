import React from 'react'
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-wrapper bg-black w-full">
      <div className="w-[80%] bg-red-6002 mx-auto">
        <p className="text-gray-300 text-md tracking-[2px] font-bold">
          George Afedi Cudjoe
        </p>
        <p className="text-pink-200 text-center text-xs p-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          nobis officia. Voluptatum quo mollitia dicta!
        </p>
        <div className="socials-wrapper flex items-center justify-center p-4 ">
          <p className="flex items-center justify-center shadow-md w-10 h-10 rounded-full border-md bg-pink-700 mx-2 cursor-pointer">
            <AiOutlineFacebook className="text-gray-300 text-2xl" />
          </p>
          <p className="flex items-center justify-center shadow-md w-10 h-10 rounded-full border-md bg-pink-700 mx-2 cursor-pointer">
            <AiOutlineLinkedin className="text-gray-300 text-2xl" />
          </p>
          <p className="flex items-center justify-center shadow-md w-10 h-10 rounded-full border-md bg-pink-700 mx-2 cursor-pointer">
            <AiOutlineGithub className="text-gray-300 text-2xl" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer