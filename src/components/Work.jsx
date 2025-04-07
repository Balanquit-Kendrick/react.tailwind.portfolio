import React from 'react'
import { projects } from '../utilities/utils'

const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5 pt-24' id='work'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
            <p className='norm-text text-gray-400 '>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {projects.map(project => (
                <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                            shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center
                            mx-auto content-div h-[200px] bg-cover relative'>
                            
                <img src={project.imageUrl} layout="fill" objectFit="cover" alt={project.name} />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-black tracking-wider'>{project.name}</span>
                    <div className='pt-8 text-center'></div>
                    <a href={project.url}>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>View</button>
                    </a>
                </div>
            </div>
            ))}
            
        </div>
    </div>
  )
}

export default Work