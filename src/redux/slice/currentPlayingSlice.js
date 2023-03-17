import { createSlice } from "@reduxjs/toolkit";

const currentplayingSlice=createSlice({
    name:"CurrentPlaying",
    initialState:{
        value:{}
    },
    reducers:{
        selectCurrent:(state,action)=>{
            state.value=action.payload;
        },
    }
})
export const {selectCurrent} = currentplayingSlice.actions;
export default currentplayingSlice;