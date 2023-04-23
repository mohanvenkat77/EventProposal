import { createSlice, current } from "@reduxjs/toolkit";


const initialState = {
    list:[]
};

const authSLice = createSlice({
  name: "selectedlist",
  initialState,
  reducers: {
    selecteditems(state, action) {
        state.list.push(...action.payload)
    },
    deleteditems(state,action){

      const newl=state.list.splice(1,action.payload)
      state.list=action.payload
    }
  },
});

export const { selecteditems,deleteditems } = authSLice.actions;
export default authSLice.reducer;
