import { createSlice } from "@reduxjs/toolkit";

const initialState={
    bannerData:[],
    imageURL:""
}

export const lmcSlice = createSlice({
    name: 'little movie company',
    initialState,
    reducers:{
        setBannerData: (state,action)=>{
            state.bannerData = action.payload   
        },
        setImageURL: (state,action)=>{
            state.imageURL = action.payload
        }
    }
})

export const {setBannerData,setImageURL} = lmcSlice.actions

export default lmcSlice.reducer