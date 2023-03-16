import { createSlice } from "@reduxjs/toolkit";

import TYPE_STORE from "cores/utils/constants/TYPE_STORE";

import objectReducer from "../objectReducer";
const NAME = createSlice({
    name: TYPE_STORE.NAME,
    initialState: {},
    reducers: {
        ...objectReducer
    }
});

export const { add, getList } = NAME.actions;
export default NAME.reducer;