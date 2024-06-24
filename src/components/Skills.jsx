import React from 'react'
import { 
    html, 
    css, 
    js, 
    tailwind, 
    react,
    next,
    vue,
    java,
    laravel,
    mysql,
    aws,
    php,
    node,
    python,
    git,
    gitlab,
    github,
    filezilla,
    xampp,
    vscode, 
} from './TechStack.js'

const Skills = () => {
  return (
        <div className='max-w-[1200px] mx-auto mt-24 p-5 pt-24' id='techs'>
            <div className='text-gray-100'>
                <p className='text-4xl mb-2 font-bold primary-color pb-2'>My Tech Stacks</p>
                <p className='norm-text text-gray-400 mb-5'>Check out some of my technologies I use</p>
            </div>
            <div className=' grid md:grid-cols-3 gap-4'>
                <div className=' bg-[#161616] rounded-xl p-2'>
                    <p className='top-0 flex p-2 text-white norm-text place-content-center font-bold'>FrontEnd</p>
                    <div className=' border-red-100'>
                        <div className='grid md:grid-cols-4 sm:grid-cols-5 min-[320px]:grid-cols-3  place-content-center p-5  gap-1'>
                            <div className='p-3 transform transition-transform duration-300 hover:scale-110'><img src={ html } alt="ggs" /><p className='text-white norm-text text-center'>html</p></div>
                            <div className='p-3 transform transition-transform duration-300 hover:scale-110'><img src={ css } alt="ggs" /><p className='text-white norm-text text-center'>css</p></div>
                            <div className='p-3 transform transition-transform duration-300 hover:scale-110'><img src={ js } alt="ggs" /><p className='text-white norm-text text-center'>js</p></div>
                            <div className='p-3 transform transition-transform duration-300 hover:scale-110'><img src={ tailwind } alt="ggs" /><p className='text-white norm-text text-center'>react</p></div>
                            <div className='p-3 transform transition-transform duration-300 hover:scale-110'><img src={ react } alt="ggs" /><p className='text-white norm-text text-center'>tailwind</p></div>
                            <div className='p-3 transform transition-transform duration-300 hover:scale-110'><img src={ vue } alt="ggs" /><p className='text-white norm-text text-center'>vuejs</p></div>
                            <div className='p-3 transform transition-transform duration-300 hover:scale-110'><img src={ next } alt="ggs" /><p className='text-white norm-text text-center'>nextjs</p></div>
                            
                        </div>
                    </div>
                </div>
                <div className=' bg-[#161616] rounded-xl p-2'>
                    <p className='top-0 flex p-2 text-white norm-text place-content-center font-bold'>BackEnd</p>
                    <div className=' border-white'>
                        <div className='grid md:grid-cols-4 sm:grid-cols-5 min-[320px]:grid-cols-3 place-content-center p-5  gap-1'>
                            <div className='p-3 transform transition-transform duration-300 hover:scale-110'><img src={ php } alt="ggs" /><p className='text-white norm-text text-center'>php</p></div>
                            <div className='p-3 transform transition-transform duration-300 hover:scale-110'><img src={ java } alt="ggs" /><p className='text-white norm-text text-center'>java</p></div>
                            <div className='p-3 transform transition-transform duration-300 hover:scale-110'><img src={ python } alt="ggs" /><p className='text-white norm-text text-center'>python</p></div>
                            <div className='p-3 transform transition-transform duration-300 hover:scale-110'><img src={ laravel } alt="ggs" /><p className='text-white norm-text text-center'>laravel</p></div>
                            <div className='p-3 transform transition-transform duration-300 hover:scale-110'><img src={ aws } alt="ggs" /><p className='text-white norm-text text-center'>aws</p></div>
                            <div className='p-3 transform transition-transform duration-300 hover:scale-110'><img src={ node } alt="ggs" /><p className='text-white norm-text text-center'>nodejs</p></div>
                            <div className='p-3 transform transition-transform duration-300 hover:scale-110'><img src={ mysql } alt="ggs" /><p className='text-white norm-text text-center'>mysql</p></div>
                        </div>
                    </div>
                </div>
                <div className=' bg-[#161616] rounded-xl p-2'>
                    <p className='top-0 flex p-2 text-white norm-text place-content-center font-bold'>Others</p>
                    <div className=' border-white'>
                        <div className='grid md:grid-cols-4 sm:grid-cols-5 min-[320px]:grid-cols-3 place-content-center p-5  gap-1'>
                            <div className='p-3 transform transition-transform duration-300 hover:scale-110'><img src={ git } alt="ggs" /><p className='text-white norm-text text-center'>git</p></div>
                            <div className='p-3 transform transition-transform duration-300 hover:scale-110'><img src={ gitlab } alt="ggs" /><p className='text-white norm-text text-center'>gitlab</p></div>
                            <div className='p-3 transform transition-transform duration-300 hover:scale-110'><img src={ github } alt="ggs" /><p className='text-white norm-text text-center'>github</p></div>
                            <div className='p-3 transform transition-transform duration-300 hover:scale-110'><img src={ filezilla } alt="ggs" /><p className='text-white norm-text text-sm text-center'>filezilla</p></div>
                            <div className='p-3 transform transition-transform duration-300 hover:scale-110'><img src={ xampp } alt="ggs" /><p className='text-white norm-text text-center'>xampp</p></div>
                            <div className='p-3 transform transition-transform duration-300 hover:scale-110'><img src={ vscode } alt="ggs" /><p className='text-white norm-text text-center'>vscode</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Skills