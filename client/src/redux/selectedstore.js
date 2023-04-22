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
    },
  },
});

export const { selecteditems } = authSLice.actions;
export default authSLice.reducer;
