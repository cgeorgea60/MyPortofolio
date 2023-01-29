import React from 'react'
import{FaFacebookF, FaGithub, FaLinkedinIn} from 'react-icons/fa'

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
          <p className="flex items-center justify-center shadow-md w-9 h-9 rounded-full border-md bg-pink-700 mx-2 cursor-pointer hover:opacity-90 hover:scale-110">
            <FaFacebookF className="text-gray-300 text-2xl" />
          </p>
          <p className="flex items-center justify-center shadow-md w-9 h-9 rounded-full border-md bg-pink-700 mx-2 cursor-pointer hover:opacity-90 hover:scale-110">
            <FaLinkedinIn className="text-gray-300 text-2xl" />
          </p>
          <p className="flex items-center justify-center shadow-md w-9 h-9 rounded-full border-md bg-pink-700 mx-2 cursor-pointer hover:opacity-90 hover:scale-110">
            <FaGithub className="text-gray-300 text-2xl" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer