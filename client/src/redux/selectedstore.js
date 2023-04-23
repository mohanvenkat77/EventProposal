import { createSlice, current } from "@reduxjs/toolkit";


const initialState = {
    list:[]
};

const authSLice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    selecteditems(state, action) {
        state.list.push(...action.payload)
    },
  },
});

export const { selecteditems } = authSLice.actions;
export default authSLice.reducer;
