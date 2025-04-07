import React from 'react'
import { mySkills } from '../utilities/utils'

const Skills = () => {
  return (
        <div className='max-w-[1200px] mx-auto mt-24 p-5 pt-24' id='techs'>
            <div className='text-gray-100'>
                <p className='text-4xl mb-2 font-bold primary-color pb-2'>My Tech Stacks</p>
                <p className='norm-text text-gray-400 mb-5'>Check out some of my technologies I use</p>
            </div>
            <div className=' grid md:grid-cols-3 gap-4'>
                {mySkills.map(skill => (
                    <div className=' bg-[#161616] rounded-xl p-2'>
                        <p className='top-0 flex p-2 text-white norm-text place-content-center font-bold'>{skill.name}</p>
                        <div className=' border-red-100'>
                            <div className='grid md:grid-cols-4 sm:grid-cols-5 min-[320px]:grid-cols-3  place-content-center p-5  gap-1'>
                                {skill.items.map(stack => (
                                    <div className='p-3 transform transition-transform duration-300 hover:scale-110'><img src={ stack.image } alt="ggs" /><p className='text-white norm-text text-center'>{stack.name}</p></div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Skills