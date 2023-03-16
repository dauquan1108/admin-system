import { createSlice } from "@reduxjs/toolkit";

import TYPE_STORE from "cores/utils/constants/TYPE_STORE";

import objectReducer from "../objectReducer";
const User = createSlice({
    name: TYPE_STORE.User,
    initialState: {},
    reducers: {
        ...objectReducer
    }
});

export const { add, getList } = User.actions;
export default User.reducer;