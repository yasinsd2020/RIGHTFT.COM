import React from "react";
import { useDispatch } from "react-redux";
import { removeCart } from "../../redux/slice/addToCartSlice";
import { TfiClose } from "react-icons/tfi";


const CarCard = ({ data, customcss = '', customMainDiv = '', customWidthText = '' }) => {
    const dispacth = useDispatch()


    return (
        <>
            {data?.map((item, index) => {
                return (
                 
                        <div key={index} className={` cursor-pointer gap-3 flex mt-2 border p-4 shadow bg-white`}>
                            <div className=" overflow-hidden w-[25%] h-full relative border  " >
                                <img
                                    src={item.image}
                                    className="realtive h-full w-full    hover:scale-110	 ease-in duration-500"
                                />
                               
                            </div>
                           
                            <div className=" -mt-1 ">
                               
                                    <div className="flex justify-around  w-[70%]  ">
                                        <div className="text-[14px] text-gray-500">{item?.brand}</div>
                                    </div>
                               

                                <div className={`flex justify-between flex-col items-start`}>
                                    <div className="flex justify-center items-center ">
                                        <div className="text-center font-semibold uppercase text-md">
                                            {item.name.length > 30
                                                ? item.name.slice(0, 25) + "..."
                                                : item.name}                                        </div>
                                    </div>
                                    <div className="font-semibold text-sm text-red-400">INR. {item?.price}</div>
                                    <div className="bg-[#3F3737] flex items-center justify-around w-[5rem] p-1 mt-4 " 
                                    onClick={()=>dispacth(removeCart(item.id))}
                                    >
                                        <div className="text-white text-sm  font-normal">Remove</div>
                                        <TfiClose className="text-white text-[11px] " />

                                    </div>
                                </div>
                            </div>
                        </div>
                    
                  
                );
            })}
        </>
    );
};

export default CarCard;
