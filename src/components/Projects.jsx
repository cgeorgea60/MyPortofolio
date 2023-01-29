import React from 'react'
import ProjectsCard from './ProjectsCard'

import data from "../Data"
export default function Projects() {
  return (
    <div class="  bg-black w-full flex flex-col space-y-4 pb-4  justify-center items-center">
        <p className="text-white text-2xl tracking-[4px] font-bold ">Projects</p>
        <div class="grid md:grid-cols-3 gap-3 md:max-w-[90%] justify-center items-center">

        {
            data.map((data)=>(

                <ProjectsCard data={data}/>
            ))
        }
     
        </div>
        </div>
  )
}
