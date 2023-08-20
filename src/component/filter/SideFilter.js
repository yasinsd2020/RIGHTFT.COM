import React from 'react'

const SideFilter = ({colorData,materialData,filterColorMaterial,setFilterColorMaterial}) => {


console.log(colorData,'colorDataddd');
    return (
        <>
            <div>
                    <div className='md:pl-10 pl-5 text-lg md:mb-3 font-semibold'>Filter</div>
                </div>
            <div className='md:pl-10 pl-5 flex md:flex-col w-full items-start gap-4 '>
                

                <div className='border-b w-full pb-2'>
                    <div className='font-semibold'>Materials</div>
                    <div >
                        <div className='text-md my-2 font-semibold text-left'>
                            All
                        </div>
                        <div className=' text-left'>
                           {materialData?.map((item,index)=>{
                            return(
                                <div key={index} className={`capitalize cursor-pointer ${filterColorMaterial?.materialId == item.id ? 'text-black':'text-zinc-400' }`}
                                onClick={()=>setFilterColorMaterial({materialId:item.id,name:item?.name})}
                                >{item?.name} </div>
                            )
                           })}
                        </div>
                    </div>
                </div>
                <div className=' text-left border-b w-full pb-2'>
                    <div className='font-semibold'>Color</div>
                    <div>
                        <div className='text-md  my-2 font-semibold'>
                            All
                        </div>
                        <div className='' >
                            {
                                colorData?.map((item,index)=>{
                                    return(

                                        <div key={index} 
                                        className={`capitalize cursor-pointer ${filterColorMaterial?.colorId == item.id ? 'text-black':'text-zinc-400' }`}
                                        onClick={()=>setFilterColorMaterial({colorId:item.id,name:item?.name})}
                                        >{item?.name}</div>
                                    )
                                })
                            }
                           
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SideFilter