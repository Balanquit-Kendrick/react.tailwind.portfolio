import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import MyLogo from '../assets/doge-1.svg'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
        <div className='bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
            
            <div><a href='/react.tailwind.portfolio'><img  src={MyLogo} class="logo px-6 h-[48px] " alt='mylogo' /></a></div>
            <ul className='hidden md:flex '>
                <li className='p-5 nav-text'><a href='#about' >About</a></li>
                <li className='p-5 nav-text'><a href='#work'>Work</a></li>
                <li className='p-5 nav-text'><a href='#contact'>Contact</a></li>
            </ul>

            <div onClick={handleNav} className='block md:hidden mr-6'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>

            <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500'
            : 'fixed left-[-100%]' }>
                <img src={MyLogo} class="logo px-6 my-10 mx h-[48px] " alt='mylogo' />
                <ul className='p-8 text-2xl'>
                    <li className='p-2'><a href='#home'>Home</a></li>
                    <li className='p-2'><a href='#about' >About</a></li>
                    <li className='p-2'><a href='#work' >Work</a></li>
                    <li className='p-2'><a href='#contact'>Contact</a></li>
                </ul>
            </div>

        </div>
  )
}

export default Navbar;