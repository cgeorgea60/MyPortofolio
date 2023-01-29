import React from 'react'

function ProjectsCard({data}) {
  return (
    <div key={data.id} className=" bg-gray-800 shadow-xl rounded-lg flex flex-col space-y-2  w-[400px] h-[340px] text-white">
      <div className="flex w-full h-[240px] p-1">
        <img src="https://williamgyekyeportfolio.vercel.app/_next/image?url=%2Fpapano.png&w=2048&q=75" alt="img" className=""/>

      </div>

      <p className="text-xl ">
        E-commerce App 
      </p>
      <div className="flex space-x-4 justify-center items ">
        <button className="bg-transparent hover:bg-pink-500 text-white font-semibold hover:text-white py-1 px-4 border border-pink-500 hover:border-transparent rounded">Githob</button>
        <button className="bg-transparent hover:bg-pink-500 text-white font-semibold hover:text-white py-1 px-4 border border-pink-500 hover:border-transparent rounded">Demo</button>
      </div>
    
    </div>
  )
}

export default ProjectsCard 