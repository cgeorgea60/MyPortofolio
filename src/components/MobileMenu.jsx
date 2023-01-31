import React from 'react'

export default function MobileMenu({menuOpen}) {
  return (
    <div className={`absolute md:hidden flex w-44 h-full bg-black z-10 transition transform ${!menuOpen && `translate-x-[200%]`} ease-out duration-700 top-20 right-0`}>

        <div className="flex w-full flex-col items-start space-y-4 p-2">
        <p className="font-bold tracking-[2px] hover:border-b border-pink-700 cursor-pointer">Home</p>
        <p className="font-bold tracking-[2px] hover:border-b border-pink-700 cursor-pointer">About Me</p>
        <p className="font-bold tracking-[2px]hover:border-b border-pink-700 cursor-pointer">Service</p>
        <p className="font-bold tracking-[2px] hover:border-b border-pink-700 cursor-pointer">Skills</p>
        <p className="font-bold tracking-[2px] hover:border-b border-pink-700 cursor-pointer">Contact Us</p>
        </div>

    </div>
  )
}
