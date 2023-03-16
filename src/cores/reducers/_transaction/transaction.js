import { createSlice } from "@reduxjs/toolkit";

import TYPE_STORE from "cores/utils/constants/TYPE_STORE";

import objectReducer from "../objectReducer";
const Transaction = createSlice({
    name: TYPE_STORE.Transaction,
    initialState: {},
    reducers: {
        ...objectReducer
    }
});

export const { add, getList } = Transaction.actions;
export default Transaction.reducer;