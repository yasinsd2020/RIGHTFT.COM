import React from 'react'
import { Icon } from '@iconify/react';
import ChatComp from './chatComp'
const leftSection = () => {
    const d = new Date();

    return (
        <div className=' flex justify-between'>
            {/* Ḷeft section */}
            <div className=' w-[65%]'>
                <div className=''>
                    <div className='flex items-center pt-5 pb-7 gap-3'>
                        <div className='text-white text-xl' >
                            <Icon className='text-xl ' icon="material-symbols:arrow-back-ios-new-rounded" />

                        </div>
                        <div className='text-white text-2xl'>Team meeting</div>
                    </div>
                    <div className='flex items-center justify-between pb-7'>
                        <div className='flex items-center w-[35%] gap-10'>
                            <div className='flex items-center gap-5'>
                                <div > <Icon className='text-white text-2xl' icon="mdi:user-multiple" />
                                </div>
                                <div className='text-white text-xl font-light'>2</div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div>  <Icon className='text-white text-2xl' icon="material-symbols:add-circle-rounded" />  </div>
                                <div className='text-white text-xl font-light	'>Invite</div>
                            </div>
                        </div>
                        <div className='flex items-cneter w-[60%] justify-around'>
                            <div className='flex items-center gap-2'>
                                <div className='text-white text-xl font-light	'>Time Passed:</div>
                                <div className='rounded-md	 text-lg px-6 bg-white'>25:30</div>
                            </div>
                            <div className='flex items-center gap-5'>
                                <div>
                                    <Icon className='text-white text-2xl' icon="material-symbols:grid-view-rounded" />
                                </div>
                                <div>
                                    <Icon className='text-white text-2xl' icon="uiw:menu" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' rounded'>

                    <div className='relative w-[97%] h-[100%] '>
                        <img className='h-[100%] w-[100%] rounded-3xl relative'
                            src={'https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'} />
                        <div className='absolute top-[3%]  px-5 w-[100%]   flex  justify-between'>
                            <div>
                                <div className='text-white  px-4 font-light pb-1 border-[1px] border-[#87FF5C]  rounded-xl'>Manager</div>
                            </div>
                            <div className='w-[20%] h-[12rem] ' >
                                <img className='h-[100%] w-[100%]  rounded-xl border-violet-60 border-[3px] border-[#87FF5C] '
                                    src={'https://img.freepik.com/free-photo/woman-with-headset-video-call_23-2148854900.jpg'} />
                            </div>


                        </div>
                        <div>

                        </div>

                    </div>

                </div>
                <div className='mt-12'>
                    <div className='flex items-center justify-center gap-12'>
                        <div className=' bg-black p-3 rounded-3xl border-[1px] border-[#87FF5C]  '>
                            <Icon icon="material-symbols:mic" className=' text-white text-2xl ' />
                        </div>
                        <div className='bg-black p-3 rounded-3xl border-[1px] border-[#87FF5C] '>
                            <Icon icon="mdi:video" className='text-white text-2xl  ' />
                        </div>
                        <div className='bg-black p-3 rounded-3xl '>
                            <Icon icon="bi:volume-mute" className='text-white text-2xl  ' />
                        </div>
                        <div className='bg-black p-3 rounded-3xl '>
                            <Icon className='text-white text-2xl   text-2xl' icon="mdi:user-multiple" />
                        </div>
                        <div className='bg-red-600 px-5 py-2 rounded-2xl '>
                            <Icon icon="material-symbols:call-end-outline" className='text-white text-3xl  ' />
                        </div>
                        <div className='bg-black p-3 rounded-3xl '>
                            <Icon icon="system-uicons:hand" className='text-white text-2xl  ' />
                        </div>
                        <div className='bg-black p-3 rounded-3xl '>
                            <Icon icon="mi:options-vertical" className='text-white text-2xl  ' />
                        </div>
                    </div>
                </div>
            </div >
            {/* right section */}
            <div className='w-[35%] bg-white rounded-l-3xl  '>
                <div className='px-5 py-2 h-[90%] overflow-y-scroll'>
                <div >
                    <div className='text-lg font-semibold text-center'>Chats</div>
                </div>
                <div className='flex items-center border-b-[2px] my-5 border-black'>
                    <div className='h-[2px] w-[15rem] bg-black'></div>
                    <div className='px-3'>Yesterday</div>
                    <div className='h-[2px] w-[15rem] bg-black'></div>

                </div>
                <div>
                    <ChatComp />


                    <div className='flex items-center border-t-[2px] my-5 border-black'>
                        <div className='h-[2px] w-[15rem] bg-black'></div>
                        <div className='px-3'>Today</div>
                        <div className='h-[2px] w-[15rem] bg-black'></div>

                    </div>
                    <ChatComp />
                    

                </div>
                </div>  
                <div className='flex justify-between border-t-[2px] border-black py-5 px-5 '>
                    <div className='flex'>
                        <Icon icon="eva:attach-2-fill" className='text-3xl' />
                        
                        <input  placeholder='Write a message'/>
                    </div>
                    <div className='flex'>
                        <Icon icon="mdi:emoji-outline" className='text-3xl' />
                        <Icon icon="mi:options-vertical" className='text-3xl  ' />


                    </div>
                    <div>
                        <Icon icon="material-symbols:send" className='text-3xl' />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default leftSection