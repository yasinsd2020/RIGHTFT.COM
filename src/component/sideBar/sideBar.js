import React from "react";
import { TfiSearch, TfiClose } from "react-icons/tfi";
import { CiInstagram, CiFacebook, CiTwitter, CiYoutube, CiShoppingCart } from "react-icons/ci";
import CartCard from "../cards/cartCard";
import { useSelector } from "react-redux";


const SideBar = ({ openBar, setOpenBar }) => {

    const allCartData=useSelector(state=>state.listofCart.cartList)

    console.log(allCartData,'allCartData');

    return (

        <div
            className={`fixed ${openBar || allCartData?.length > 0   ? "right-[0]" : "-right-[100%]"
                } w-[100%] h-screen ease-linear duration-150`}
            style={{ zIndex: 1000, background: "rgba(0,0,0,0.5)" }}
        >
            <div className="relative  md:-right-[64.3vw] bg-[#D9D9D9] md:w-[35%] w-[80%] h-full flex flex-col justify-start  px-5 py-3 ">
                <div className="w-full flex justify-between items-center mb-[10px]">
                    <div
                        className="cursor-pointer hover:rotate-180 ease-linear duration-200"
                        onClick={() => setOpenBar(false)}
                    >
                       {allCartData?.length > 0 ? null :<TfiClose />}
                    </div>
                    <div></div>
                </div>
                <div className="w-full flex justify-between">

                    <article className="font-semibold  text-md">All Products</article>
                    <article className="font-normal  text-md">Featured Products</article>
                    <div className="flex gap-1">
                    <CiShoppingCart
                        onClick={() => {
                            setOpenBar(true);
                        }}
                        className="md:text-2xl text-xl" />   
                        <div>({allCartData?.length})</div>
                    
                    </div>
                    
                </div>
                <div className="text-lg font-semibold text-left mt-5">Shoping Cart</div>
                {allCartData.length  > 0 ?
                <div className=" overflow-x-auto w-full p-3">
                <CartCard data={allCartData} />       
               </div>  :
               <div className="mt-[10%]"> 
                <div className="text-lg  ">Your Cart is Empty !!</div>
               </div>
                }
                      

            </div>
        </div>
    );
};

export default SideBar;

