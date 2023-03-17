import { createSlice } from "@reduxjs/toolkit";

import TYPE_STORE from "cores/utils/constants/TYPE_STORE";

import objectReducer from "../objectReducer";
const Mong = createSlice({
    name: TYPE_STORE.Mong,
    initialState: {},
    reducers: {
        ...objectReducer
    }
});

export const { add, getList } = Mong.actions;
export default Mong.reducer;