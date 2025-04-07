import React from 'react'
import { socials } from '../utilities/utils'
const Sidebar = () => {
  return (
    <div>
      <div className='fixed left-0 h-screen w-[100px]  content-center'>
        <div className='flex justify-center items-center'>
          <ul className='flex px-8 items-center justify-center'>
            {socials.map((social, index) => (
              <li key={index} className='p-[2px] socials'>
                <a href={social.url}>
                  <img src={social.svg} alt="social" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="fixed h-screen w-[100px] right-0 content-center  vertical-text text-white norm-text">
        <div className='content-center items-center justify-center px-8'>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kendrick.it.expert@gmail.com" className="email norm-text">kendrick.it.expert@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar