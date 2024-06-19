import React from 'react'
import aboutImg from '../assets/about.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>

        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <br />
                    <p className='text-base lg:text-lg norm-text'>
                    I am Kendrick, a graduate of BS Information Technology from the <span className='font-extrabold text-sky-500'>Polytechnic University of the Philippines</span>.
                    <br />
                    <br />
                    My journey into programming began in senior high school, though I wasn't initially certain about pursuing a coding career. Today, I am an <span className='font-extrabold text-sky-500'>Associate Software Developer</span> at a company in Makati City. 
                    </p>
                </div>
            </div>
            <div className='py-8'>
                <img className='mx-auto rounded-3xl md:py-0 block' src={aboutImg} width={300} alt="" />
            </div>

        </div>

    </div>
  )
}

export default About