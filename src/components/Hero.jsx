import React from 'react';
import Typed from 'react-typed';
import Background from '../assets/background.mp4'

const Hero = () => {
    return (
        <div className = 'text-white'>
            
            <div className = 'absolute top-10 w-full h-full flex flex-col justify-center'>
                <div className ='max-w-[800px] mt-[-96px] w-full h-0 mx-auto text-center flex flex-col justify-center'>
                    <p className = 'text-[#00df9a] font-bold p-2'>Grow Your Company With Our Consulting Services</p>
                    <h1 className = 'md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with Us.</h1>
                    <div className = 'flex justify-center items-center'>
                        <p className= 'md:text-3xl sm:text-2xl text-xl font-bold py-4'>Build your company to</p>
                        <Typed className = 'md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2' strings={['10x','100x','1000x']} typeSpeed={60} backSpeed={50} loop/>
                    </div>
                </div>
            </div>
            <video 
            className="top-0 w-full h-screen object-cover" 
            src={Background} autoPlay loop muted 
            alt = '/'/>
        </div>
    )   
}

export default Hero