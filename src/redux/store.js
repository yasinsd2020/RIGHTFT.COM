

import { configureStore } from "@reduxjs/toolkit";
import AllProduct from "./slice/allProduct";
import Get_Colors_Materials from '../redux/slice/filterSlice'
import cartReducer from '../redux/slice/addToCartSlice'
export const  store =configureStore({

    reducer:{
        products:AllProduct,
        color_material_filter:Get_Colors_Materials,
        listofCart:cartReducer
    }
})