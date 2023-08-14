import React from 'react'

import {
    FaGithub,
    FaTwitter,
    FaMediumM,
    FaLinkedin,
    FaFacebook,
    FaInstagram
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-white text-gray-300 px-2 p-10'>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2023 GKDesign, All rights reserved.</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaTwitter />
            <FaMediumM />
            <FaGithub />
            <FaLinkedin />
            <FaFacebook />
            <FaInstagram />


        </div>
        </div>
    </div>
  )
}

export default Footer