import React from 'react';
import Spline from '@splinetool/react-spline';
const Hero = () => {
  return (
  <div name="hero" className='bg-white pb-10 w-full'>
        <div className='flex items-center justify-center h-96 gap-2'>     
            <div className='justify-center items-center pb-20 pt-10 hidden md:block'>    
            <Spline scene="https://prod.spline.design/Lr-JHD718q6HFzN4/scene.splinecode" />
            </div>
            <div className='justify-center items-center pb-5 pt-5 mx-auto md:hidden'>    
                <Spline scene="https://prod.spline.design/6dTiCIaQRqzmwYTY/scene.splinecode" />
            </div>
        </div>    
  </div>
  )}
export default Hero;

