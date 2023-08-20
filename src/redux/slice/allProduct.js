import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const GetAllProduct =createAsyncThunk('allProduct',
async()=>{
    const reponse =await fetch('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products',
    {   method:'GET',
    
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
        }
    }
    )

    try {        

        const result =await reponse.json()
        return result

    } catch (error) {

       return  error
    }
}
)

export const AllProduct=createSlice({
    name:'product',
    initialState:{
        productList:[],
        loading:false,
        error:null,
    }, 
    extraReducers:{
        [GetAllProduct.pending]:(state)=>{
            state.loading=true;

        },
        [GetAllProduct.fulfilled]:(state,action)=>{
            state.loading =false;
            state.productList=action.payload;
        },
        // [GetAllProduct.rejected]:(state,action)=>{
        //     state.loading=false,
        //     state.error=action.payload.message
        // }
    }
})

export default AllProduct.reducer;