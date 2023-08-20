import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../../redux/slice/addToCartSlice";


const NormalCard = ({ data,setOpenBar }) => {
    const dispacth = useDispatch()
    const allCartData=useSelector(state=>state.listofCart.cartList)
    
console.log('allCartDatayasin',allCartData);
    return (
        <>
            {data?.map((item, index) => {
                return (
                    <div key={index} onClick={() => {

                    }}>
                        {/* <Link href="/searchPage"> */}
                        <div key={index} className="md:p-2 mb-4 cursor-pointer">
                            <div class="mb-4">
                                <div class="relative  overflow-hidden">
                                    <img
                                        src={item.image}
                                        className="w-full"
                                         />
                                    <div
                                        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-300 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70">
                                            
                                                <div className=" bg-black top-[50%] relative text-white text-center text-sm w-[50%] left-[25%] p-2 "
                                                onClick={() =>{ dispacth(addtoCart(item)); setOpenBar(true) }}
                                            > Add TO Cart
                                            </div>                                            
                                         

                                    </div>
                                </div>
                            </div>
                            <div className="my-2">
                                <div className="flex w-full justify-center mb-1">
                                    <div className="flex justify-around  w-[70%] place-content-center ">
                                        <article className="text-[14px] text-gray-500">{item?.brand}</article>
                                    </div>
                                </div>

                                <div className="flex justify-between  items-center">
                                    <div className="flex justify-center items-center ">
                                        <div className="text-center text-md">
                                            {item.name.length > 30
                                                ? item.name.slice(0, 25) + "..."
                                                : item.name}
                                        </div>
                                    </div>
                                    <div className="font-semibold text-sm text-red-400">INR{item?.price}</div>
                                </div>
                            </div>
                        </div>
                        {/* </Link> */}
                    </div>
                );
            })}
        </>
    );
};

export default NormalCard;


{/* <div className="h-[54vh] overflow-hidden w-full relative  ">

<img
    src={item.image}
    className="hover:absolute h-full w-full  	  hover:scale-110	 ease-in duration-500"
/>

<div className="absolute  bg-red-400 h-full w-full 	object-contian">
    <div className=" bg-black top-[50%] relative text-white  w-[50%] left-[25%] p-2 "
        onClick={() => dispacth(addtoCart(item))}
    >
        Add TO Cart
    </div>
</div>

</div> */}