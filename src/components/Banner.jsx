import React from 'react'
//import image from '../../public/'

export default function Banner() {
  return (
    <div className=" flex justify-center w-full  text-white  h-[300px]">

    <div className=" flex flex-col pt-6 w-full md:max-w-[80%] p-2 ">
      
      <div className="flex flex-col space-y-12 md:space-y-20 h-full md:items-start  bg-[url('/src/img/george1.png')] bg-contain bg-no-repeat bg-transparent opacity-80 bg-right">

      <div className="flex flex-col space-y-8 items-start pl-2">
      <p className="text-xl md:text-2xl capitalize">Hello my name is</p>
      <p className="text-4xl md:text-6xl font-bold">George <span className="text-pink-700">Cudjoe</span></p>
      <p className="text-xl md:text-2xl font-bold capitalize">I'am a Web Developer</p>
      </div>

      <div className="flex justify-start md:justify-start  w-full">
        <div className=" flex w-[200px] md:w-[300px]  justify-end bg-white p-2 rounded-full ring ring-pink-700 ">
          <input type="text" placeholder="E-mail" className=" px-2 text-md w-full border-none text-gray-400 outline-none"/>
        <p className="text bg-pink-700 px-3 w-24 text-white rounded-full">Send</p>

        </div>
      </div>

      </div>

    </div>

    </div>
  )
}
