import React from 'react'

const chatComp = () => {
    const d = new Date();

  return (
    <div>
                            {/* left chat */}
                            <div className='flex items-center gap-2'>
                        <div>
                            <img
                                className='w-[3rem] h-[3rem] rounded-xl'
                                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR4n6lzmBoQRRGCjICBBU7g5m4FSl_rniwg&usqp=CAU'} />
                        </div>
                        <div className='bg-[#D9D9D9] rounded-2xl w-[40%] p-1'>
                            <div className='text-[11px]'>There are multiple ways to work with background images using Tailwind .</div>
                            <div className='text-right text-[10px]'>{d.toLocaleTimeString()}</div>
                        </div>
                    </div>
                    {/* right chat */}
                    <div className='flex justify-end items-center gap-2'>
                        <div className='bg-gradient-to-r px-2 from-[#10113C] to-[#A52E59] rounded-2xl w-[40%] p-1 '>
                            <div className='text-[11px] text-white'>There are multiple ways to work with  .</div>
                            <div className='text-right text-white text-[10px]'>{d.toLocaleTimeString()}</div>
                        </div>
                        <div>
                            <img
                                className='w-[3rem] h-[3rem] rounded-xl'
                                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR4n6lzmBoQRRGCjICBBU7g5m4FSl_rniwg&usqp=CAU'} />
                        </div>

                    </div>

                    {/* left chat */}
                    <div className='flex item-center gap-2'>
                        <div>
                            <img
                                className='w-[3rem] h-[3rem] rounded-xl'
                                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR4n6lzmBoQRRGCjICBBU7g5m4FSl_rniwg&usqp=CAU'} />
                        </div>
                        <div className='flex flex-col gap-3 w-[100%]'>
                            <div className='bg-[#D9D9D9] rounded-xl w-[47%] p-1'>
                                <div className='text-[11px] break-all'>There are multiple ways to work with backgr
                                    ound images using Tailwind .</div>
                                <div className='text-right text-[10px]'>{d.toLocaleTimeString()}</div>
                            </div>
                            <div className='bg-[#D9D9D9] rounded-xl w-[40%] p-1'>
                                <div className='text-[11px]'>There are multiple ways </div>
                                <div className='text-right text-[10px]'>{d.toLocaleTimeString()}</div>
                            </div>
                        </div>
                    </div>
                    {/* right chat */}
                    <div className='flex justify-end gap-2  w-[100%] '>
                        <div className='flex flex-col gap-3 w-[40%]'>
                            <div className='bg-gradient-to-r px-2 from-[#10113C] to-[#A52E59] rounded-2xl  p-1 '>
                                <div className='text-[11px] text-white'>There are multiple ways to work   .</div>
                                <div className='text-right text-white text-[10px]'>{d.toLocaleTimeString()}</div>
                            </div>
                            <div className='bg-gradient-to-r px-2 from-[#10113C] to-[#A52E59] rounded-2xl  p-1 '>
                                <div className='text-[11px] text-white'>There are multiple ways to work with  .</div>
                                <div className='text-right text-white text-[10px]'>{d.toLocaleTimeString()}</div>
                            </div>
                        </div>
                        <div className=']'>
                            <img
                                className='w-[3rem] h-[3rem] rounded-xl'
                                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR4n6lzmBoQRRGCjICBBU7g5m4FSl_rniwg&usqp=CAU'} />
                        </div>

                    </div>

    </div>
  )
}

export default chatComp