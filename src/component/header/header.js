
import React, { useEffect, useState } from "react";
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import SideBar from "../sideBar/sideBar";
import { useSelector } from "react-redux";

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [loginPopup, setLoginPopup] = useState({
    login: false, register: false
  })
  const [openBar, setOpenBar] = useState(false);
  const [postion, setPosition] = useState("relative");


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {

        setPosition("fixed");
      } else {
        return setPosition("absolute");

      }
    })
  }, [window.scrollY])
  const allCartData = useSelector(state => state.listofCart.cartList)

  return (
    <>

      <SideBar openBar={openBar} setOpenBar={setOpenBar} />


      <div
        className={`${postion} bg-red-400 top-0 left-0 w-full ${postion === "absolute"
            ? "bg-gradient-to-b from-gray-950"
            : "bg-zinc-900"

          } bg-transparent shadow-sm`}
        style={{ zIndex: 100 }}
      >
        <div
          className={`relative md:px-4 px-2 ${postion === "fixed" ? "py-2" : "md:py-4 py-2"
            } flex justify-between items-center`}
        >
          {/* left section */}
          <div
            className={`flex jusitfy-start items-center gap-5 ${postion === "absolute"
                ? "text-white"
                : "text-white"

              }`}
          >
            <div
              className="flex justify-center items-center cursor-pointer"

            >
              <div>RIGHTFT.COM</div>
            </div>
            {/* only on mobile view */}
        
          </div>
          
          <div className=" flex justify-between items-center py-2 md:px-4 ">
            <div
              className={`flex jusitfy-center items-center ${postion === "absolute"
                  ? "text-white"
                  : "text-white"

                } md:gap-4 gap-2`}
            >

              {/* all product */}
              <a href="/">
                <div
                  className={`flex justify-center md:text-md text-sm items-center cursor-pointer`}
                >
                  All Products
                </div>
              </a>
              {/*  feature product*/}
              <a href="/">
                <div
                  className={`flex justify-center md:text-md text-sm items-center cursor-pointer`}
                >
                  Featured Produts
                </div>
              </a>

              <div     >

              </div>
              <CiShoppingCart
                onClick={() => {
                  setOpenBar(true);
                }}
                className="md:text-2xl text-xl" />
              <div className="text-lg">({allCartData?.length})</div>
              {/* </a> */}

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;
