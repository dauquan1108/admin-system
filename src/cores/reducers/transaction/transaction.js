import { createSlice } from "@reduxjs/toolkit";
// import produce from "immer";

import TYPE_STORE from "cores/utils/constants/TYPE_STORE";
// import TYPE_HANDLE from "cores/utils/constants/TYPE_HANDLE";

import objectReducer from "../objectReducer";

const Transaction = createSlice({
    name: TYPE_STORE.Transaction,
    initialState: {},
    reducers: { ...objectReducer }
});

export const { add, getList } = Transaction.actions;
export default Transaction.reducer;