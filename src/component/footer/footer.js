import React from 'react'
import paymentLogo from './image 1.png'
import webLogo from './image 2.png'

const Footer = () => {
    const list = [{
        name: 'Home'
    },
    {
        name: 'All Product'
    },
    {
        name: 'About us'
    },
    {
        name: 'Contact us'
    },
    {
        name: 'Services'
    },
    ]
    return (
        <div className='bg-black text-white p-4 pl-10 mt-10'>
            <div>RIGHTFIT.COM</div>
            <div className='flex md:justify-between flex-col md:flex-row w-[100%]   my-5' >
                <div className='flex flex-col md:flex-row md:gap-[10%] md:w-[70%] '>
                    <div className='grid  grid-cols-3 md:grid-cols-1'>{
                        list.map((item, index) => {
                            return (
                                <div key={index} className='text-sm md:text-md   '>

                                    {item.name}
                                </div>
                            )
                        })
                    }

                    </div>
                    <div className='md:my-0 my-4'>
                        <div className='text-sm md:text-md '>We are a registered E-Commerce seller and we support a variety of Local and International payment modes</div>
                        <div>
                            <img src={paymentLogo}   className='h-[90%] md:h-auto md:w-auto w-[90%]' />
                        </div>

                    </div>
                </div>
                <div className='md:w-[30%]  '>
                    <div className='text-center mb-3'>Website protected by</div>
                    <div className='flex justify-center flex-col items-center ' >
                    <img src={webLogo}  className='h-[50%] w-[50%]'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer