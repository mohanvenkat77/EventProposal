import { createSlice, current } from "@reduxjs/toolkit";
import { getCurrentUser } from "../utills/storage-utills";


const initialState = {
    list:getCurrentUser().selected
};

const Listslice = createSlice({
  name: "selectedlist",
  initialState,
  reducers: {
    selecteditems(state, action) {
        state.list=action.payload
    },
    deleteditems(state,action){
      state.list=action.payload
    }
  },
});

export const { selecteditems,deleteditems } = Listslice.actions;
export default Listslice.reducer;
