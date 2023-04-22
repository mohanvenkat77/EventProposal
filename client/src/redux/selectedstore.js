import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    list:[]
};

const authSLice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    selecteditems(state, action) {
   
        console.log("store",action.payload);
        console.log("store",current(state.list));
        state.list.push(...action.payload)
    //     if(state.list.length === 0){
    //         state.list.push(action.payload)
    //     }
    //     const newL=state.list.map((item)=> item._id === action.payload._id)
    //     console.log("store",newL);
    //     if(!newL[0]){
    //  state.list.push(action.payload)
    // }
    },
  },
});

export const { selecteditems } = authSLice.actions;
export default authSLice.reducer;
