import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";

export const  AllColors =createAsyncThunk('allColors',
async()=>{
    const response =await fetch('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors',{
        method:'GET',
    headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',    
            }
    })

    try{
        const result = await response.json()
        return result
    }catch (error) {
        return error
    }
})
export const AllMaterials =createAsyncThunk('allMaterils',
async ()=>{
    const response =await fetch('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material',{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',    
        }
    })
    try{
        const result = await response.json()
        return result
    }catch(error){
        
        return error
    }
}
)


const Get_Colors_Materials=createSlice({
    name:'colorList',
    initialState:{
        colorList:[],    
        materialList:[],
        loading:false,
        error:null,
    }, 
    
    extraReducers:{
        [AllColors.pending]:(state)=>{
            state.loading=true;
        },
            [AllColors.fulfilled]:(state,action)=>{
                state.colorList=action.payload;
                state.loading = false;
            },
        [AllMaterials?.pending]:(state)=>{
            state.loading=true;
        },
        [AllMaterials.fulfilled]:(state,action)=>{
            state.materialList=action.payload;
            state.loading= false
        },
        
       
        
    },

})
export default Get_Colors_Materials.reducer;