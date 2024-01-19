import React from 'react';
const Footer = () => {
    return(
        <div className = 'max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className ='w-full text-3xl font-bold text-[#00df9a]'>KG CONSULTING</h1>
                <p className = 'py-4'>Contact Us</p>
            </div>
            <div className='lg:col-span-2 flex justifybetween mt-6'>
                <div>
                    <h6 className = 'font-medium text-gray-400'>Geeth Tunuguntla</h6>
                    <ul>
                        <li className = 'py-2 text-sm'>Dallas,TX</li>
                        <li className = 'py-2 text-sm'>630-923-1733</li>
                        <li className = 'py-2 text-sm'>gtunux@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <h6 className = 'font-medium text-gray-400'>Marshall Demirjian</h6>
                    <ul>
                        <li className = 'py-2 text-sm'>Chicago,IL</li>
                        <li className = 'py-2 text-sm'>630-923-1733</li>
                        <li className = 'py-2 text-sm'>mdemirj@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <h6 className = 'font-medium text-gray-400'>Kyle Jones-Shaw</h6>
                    <ul>
                        <li className = 'py-2 text-sm'>Dallas,TX</li>
                        <li className = 'py-2 text-sm'>630-923-1733</li>
                        <li className = 'py-2 text-sm'>kjshaw@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <h6 className = 'font-medium text-gray-400'>Daniel Hsiao</h6>
                    <ul>
                        <li className = 'py-2 text-sm'>Chicago,IL</li>
                        <li className = 'py-2 text-sm'>630-418-2346</li>
                        <li className = 'py-2 text-sm'>danieljhsiao@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer