import { createSlice } from "@reduxjs/toolkit";

import TYPE_STORE from "cores/utils/constants/TYPE_STORE";

import objectReducer from "../objectReducer";
const Device = createSlice({
    name: TYPE_STORE.Device,
    initialState: {},
    reducers: {
        ...objectReducer
    }
});

export const { add, getList } = Device.actions;
export default Device.reducer;