import React from 'react'
import heroimage from '../assets/me.png'
import { TypeAnimation } from 'react-type-animation'


const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-y-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black' >
        <div className='my-auto mx-auto w-[300px] h-auto lg:w-[300px] profile'>
            <img src={heroimage} alt="mine" />
        </div>

        <div className='col-span-2 px-5 my-auto' >
            <h1 className='font-bold text-white text-4xl sm:text-5xl lg:text-8xl front-extrabold '>
                <span className='primary-color'>
                    I'm a
                </span> <br />
                
                <TypeAnimation 
                sequence={[
                    "Frontend Dev",
                    1000,
                    "Web Designer",
                    1000,
                    "Consultant",
                    1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                />
                
            </h1>
            <p className=' text-white sm:text-lg my-6 lg:text-xl norm-text'>
                My name is Kendrick Balanquit and I just started web development professionally.
            </p>

            <div className='my-8'>
                <a href={require("../assets/files/Balanquit - Resume.pdf")} download="Balanquit Resume" target='_blank' className="px-6 py-3 w-full rounded-xl mr-4
                bg-gradient-to-br from-sky-400 to-sky-950 text-white font-semibold">
                Download CV
                </a>
                <a href="#contact" className="px-6 py-3 w-full rounded-xl mr-4
                border border-gray-400 hover:bg-gradient-to-br from-sky-400 to-sky-950 font-semibold
                text-white hover:border-none">
                Contact
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero