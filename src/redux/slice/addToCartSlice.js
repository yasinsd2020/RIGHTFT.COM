import { createSlice } from "@reduxjs/toolkit";


 const  cartReducer =createSlice({
    name:'cartReducer',
    initialState:{
        loading:false,
        cartList:[],
        error:null
    },
    reducers:{
        addtoCart:(state,action)=>{
            state.cartList?.push(action.payload)
        },
        removeCart:(state,action)=>{
            state.cartList = state.cartList?.filter(item => Number(item.id) !== Number(action.payload));
        }
    }
   
 })


 export const {addtoCart,removeCart} =cartReducer.actions;
 export default cartReducer.reducer;
