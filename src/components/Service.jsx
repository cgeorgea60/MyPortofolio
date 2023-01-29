import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
export default function Service() {
  return (
    <div class="flex flex-col py-4 bg-black">
        <p className="text-white text-2xl tracking-[4px] font-bold">service</p>

            <div className="flex flex-col justify-center items-center  space-y-2 py-2 md:flex-row md:space-x-2">

        <div className="flex flex-col h-[300px] justify-center items-center space-y-2 w-96 bg-gray-900 overflow-auto shadow-lg rounded-2xl">
            <AiOutlineMenu className="text-4xl text-pink-700 cursor-pointer hover:scale-110"/>
                <h3 className="text-white">Web developer</h3>
            <p className="text-gray-300 text-center px-2">
                lorem ipsum dolor sit amet, consectetur adip
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore earum maiores ab,
                 vel aperiam eveniet ea facere? Dicta, odio praesentium tempore, voluptatem aut quisquam asperiores quis, veniam doloribus quaerat sit.
            </p>

            <button className="text-white p-1 w-24 rounded-md bg-pink-700 cursor-pointer hover:opacity-50">ReadMore</button>

        </div>
        <div className="flex flex-col h-[300px] justify-center items-center space-y-2 w-96 bg-gray-900 overflow-auto shadow-lg rounded-2xl">
            <AiOutlineMenu className="text-4xl text-pink-700 cursor-pointer hover:scale-110"/>
                <h3 className="text-white">Web developer</h3>
            <p className="text-gray-300 text-center px-2">
                lorem ipsum dolor sit amet, consectetur adip
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore earum maiores ab,
                 vel aperiam eveniet ea facere? Dicta, odio praesentium tempore, voluptatem aut quisquam asperiores quis, veniam doloribus quaerat sit.
            </p>

            <button className="text-white p-1 w-24 rounded-md bg-pink-700 cursor-pointer hover:opacity-50">ReadMore</button>

        </div>
        <div className="flex flex-col h-[300px] justify-center items-center space-y-2 w-96 bg-gray-900 overflow-auto shadow-lg rounded-2xl">
            <AiOutlineMenu className="text-4xl text-pink-700 cursor-pointer hover:scale-110"/>
                <h3 className="text-white">Web developer</h3>
            <p className="text-gray-300 text-center px-2">
                lorem ipsum dolor sit amet, consectetur adip
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore earum maiores ab,
                 vel aperiam eveniet ea facere? Dicta, odio praesentium tempore, voluptatem aut quisquam asperiores quis, veniam doloribus quaerat sit.
            </p>

            <button className="text-white p-1 w-24 rounded-md bg-pink-700 cursor-pointer hover:opacity-50">ReadMore</button>

        </div>

       
            </div>
    </div>
  )
}
