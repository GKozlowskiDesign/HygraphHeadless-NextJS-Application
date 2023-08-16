import React from 'react'
import { FaGithub, FaTwitter, FaMediumM, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='w-full bg-white text-gray-300 px-2 p-10'>
        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2023 GKDesign, All rights reserved.</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                <a href="https://twitter.com/GaryKozlowski1" className='hover:text-black' alt="Twitter"><FaTwitter /></a>
                <a href="https://gkozlowskidesign.medium.com/" className='hover:text-black' alt="Medium"><FaMediumM /></a>
                <a href="https://github.com/gkozlowskidesign" className='hover:text-black' alt="GitHub"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/gary-kozlowski-825053138/" className='hover:text-black' alt="LinkedIn"><FaLinkedin /></a>
                <a href="https://www.facebook.com/garyjr.kozlowski/" className='hover:text-black' alt="Facebook"><FaFacebook /></a>
                <a href="https://www.instagram.com/garykozlowski1/" className='hover:text-black' alt="Instagram"><FaInstagram /></a>
            </div>
        </div>
    </div>
  )
}
export default Footer
