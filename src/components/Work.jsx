import React from 'react'
import proj1 from '../assets/Movie.png'
import proj2 from '../assets/Tic-tac-toe.png'
import proj3 from '../assets/Weather.png'
import proj4 from '../assets/Todo.png'


const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5 pt-24' id='work'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
            <p className='norm-text text-gray-400 '>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                            shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center
                            mx-auto content-div h-[200px] bg-cover relative'>
                            
                <img src={proj1} layout="fill" objectFit="cover" alt="Movie App" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-black tracking-wider'>Movie App</span>
                    <div className='pt-8 text-center'></div>
                    <a href="/movie-app/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>View</button>
                    </a>
                </div>
            </div>

            {/* <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                            shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center
                            mx-auto content-div h-[200px] bg-cover relative'>
                            
                <img src={proj4} layout="fill" objectFit="cover" alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-black tracking-wider'>Adams Portal</span>
                    <div className='pt-8 text-center'></div>
                    <a href="https://arkray.eu/solutions/blood-testing/" target='_blank' rel="noreferrer">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>View</button>
                    </a>
                </div>
            </div> */}

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                            shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center
                            mx-auto content-div h-[200px] bg-cover relative'>
                            
                <img src={proj2} layout="fill" objectFit="cover" alt="Tic-Tac-Toe" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-black tracking-wider'>Tic-Tac-Toe</span>
                    <div className='pt-8 text-center'></div>
                    <a href="/tic-tac-toe/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>View</button>
                    </a>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                            shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center
                            mx-auto content-div h-[200px] bg-cover relative'>
                            
                <img src={proj3} layout="fill" objectFit="cover" alt="Weather App" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-black tracking-wider'>Weather App</span>
                    <div className='pt-8 text-center'></div>
                    <a href="/weather-app/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>View</button>
                    </a>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                            shadow-lg shadow-[#040c16] group  rounded-md flex justify-center items-center
                            mx-auto content-div h-[200px] bg-cover relative'>
                            
                <img src={proj4} layout="fill" objectFit="cover" alt="Todo App" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-black tracking-wider'>Todo App</span>
                    <div className='pt-8 text-center'></div>
                    <a href="https://github.com/Balanquit-Kendrick/To-Do-App-Vue3">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>View</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work