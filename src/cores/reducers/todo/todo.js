import { createSlice } from "@reduxjs/toolkit";

import TYPE_STORE from "cores/utils/constants/TYPE_STORE";

import objectReducer from "../objectReducer";
const Todo = createSlice({
    name: TYPE_STORE.Todo,
    initialState: {},
    reducers: {
        ...objectReducer
    }
});

export const { add, getList } = Todo.actions;
export default Todo.reducer;