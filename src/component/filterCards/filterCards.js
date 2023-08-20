import React from "react";
import { useEffect, useState } from 'react';
import { VscListFilter } from "react-icons/vsc";
import { BiSort } from "react-icons/bi";
import { MdViewCompact, MdApps } from "react-icons/md";
import { TfiSearch, TfiClose } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import SideFilter from '../filter/SideFilter'
import NormalCard from '../cards/normalCards'
import { GetAllProduct } from '../../redux/slice/allProduct'
import { AllColors, AllMaterials } from "../../redux/slice/filterSlice";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import SideBar from "../sideBar/sideBar";

const FilterCards = () => {
  const [categoryShow, setCategoryShow] = useState(false)
  const [isFixed, setIsFixed] = useState(false);
  const [sliderValue, setSliderValue] = useState([400, 1000]);
  const [openBar, setOpenBar] = useState(false)
  const [isWidth1240, setIsWidth1240] = useState(false);
  const [listOfProduct, setListOfProduct] = useState()
  const [filterColorMaterial, setFilterColorMaterial] = useState()
  const dispatch = useDispatch()
  
  const [makeSortFixed, setMakeSortFixed] = useState(false)

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    // all product dispatch action
    dispatch(GetAllProduct())

    // colors dispatch action
    dispatch(AllColors())

    // materil dispacth action 
    dispatch(AllMaterials())

    const handleResize = () => {
      setIsWidth1240(window.innerWidth <= 1024);
      if (window.innerWidth <= 1024) {

        setOpenBar(false)
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // product list selector
  const productList = useSelector(state => state.products?.productList?.products)
  // color list selector
  const colorData = useSelector(state => state?.color_material_filter?.colorList?.colors)
  // material list selector
  const materialData = useSelector(state => state?.color_material_filter?.materialList?.material)

  // filter variable

  const totalPage=Math.ceil(productList?.length / 6)
  const pageCount= page * 6
  const newProd =productList?.slice(pageCount-6 ,pageCount)
  const filterData = filterColorMaterial ? productList?.filter((e) => e.materialId == (filterColorMaterial.colorId || filterColorMaterial.materialId)) : filterColorMaterial == null ? newProd : newProd
  

  return (
    <>


      <div className={`flex py-2   md:mt-5 ${isWidth1240 && 'flex-col '}`}>
        {isWidth1240 ? <div className={` p-2 pl-1 ${makeSortFixed ? "fixed top-0 left-0" : "relative"} bg-white flex justify-evenly w-full  `}
          style={{ zIndex: 500, }}

        >
          <div onClick={() => {
            setOpenBar(!openBar)
          }} className="flex  border justify-center gap-1 items-center w-[45%] py-2  border-gray">
            <VscListFilter className="md:text-2xl text-md font-semibold" />
            <div className="uppercase md:text-lg text-sm font-normal"> Filter By</div> </div>
       

        </div>

          :<></>
          //  <div className={`w-[20%] ${openBar ? "" : "pl-5"} lg:visible   "`}>
          //   <SideFilter setFilterColorMaterial={setFilterColorMaterial} filterColorMaterial={filterColorMaterial} materialData={materialData} colorData={colorData} openBar={openBar} setOpenBar={setOpenBar} categoryShow={categoryShow} isFixed={isFixed} sliderValue={sliderValue} setSliderValue={setSliderValue} setCategoryShow={setCategoryShow} setIsFixed={setIsFixed} />

          // </div>
        }
        <div className={`md:w-[20%] ${openBar ? "hidden" : "visible"}   "`}>
            <SideFilter setFilterColorMaterial={setFilterColorMaterial} filterColorMaterial={filterColorMaterial} materialData={materialData} colorData={colorData} openBar={openBar} setOpenBar={setOpenBar} categoryShow={categoryShow} isFixed={isFixed} sliderValue={sliderValue} setSliderValue={setSliderValue} setCategoryShow={setCategoryShow} setIsFixed={setIsFixed} />

          </div>
        <div className={`lg:ml-3 ${isWidth1240 ? 'w-full' : "w-[80%] "}`}>
          {
            filterColorMaterial  &&
            <div className="mx-3  flex md:w-[10%] justify-around  p-2 items-center bg-gray-300">
            <div className=" md:text-lg uppercase font-semibold ">{filterColorMaterial?.name}</div>
            <TfiClose className="md:text-lg font-bold" onClick={() => setFilterColorMaterial(null)} />
          </div>
          }
          <div>
            <div className="text-center text-lg font-semibold my-7 md:mb-5">All Products</div>
          <div className={`mx-3 grid grid-cols-2 sm:grid-cols-2 gap-1 md:gap2 md:grid-cols-3 `}>
            <NormalCard data={filterData} setOpenBar={setOpenBar} />

          </div>
          <div className="flex justify-center">
          <Pagination count={filterColorMaterial ? 1 : totalPage} 
           page={page} onChange={handleChange} 
          />
          </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default FilterCards;