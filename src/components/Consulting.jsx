import React from 'react';
import Consult from '../assets/consulting.png'
const Consulting = () => {
    return(
        <div className = 'w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className = 'w-[500px] mx-auto my-4'src={Consult} alt="/" />
                <div className = 'flex flex-col justify-center'>
                    <p className = 'text-[#00df9a] font-bold'>KG Consulting Services</p>
                    <h1 className = 'md:text-4xl sm:text-3xl text-2xl font-bold py-2'>We're here to help.</h1>
                    <p>*Our Services*</p>
                </div>
            </div>
        </div>
    )
}

export default Consulting