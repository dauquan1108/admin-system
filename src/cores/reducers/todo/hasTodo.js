import { createSlice } from "@reduxjs/toolkit";
import produce from 'immer';

import TYPE_STORE from "cores/utils/constants/TYPE_STORE";
import hasObjectReducer from "../hasObjectReducer";

const hasTodo = createSlice({
    name: TYPE_STORE.HasTodo,
    initialState: {
        total: 0,
        count: 0,
        itemIds: [],
        page: {},
    },
    reducers: {
        ...hasObjectReducer,
        // Viết thêm reducer ở dưới đây
    }
});

export const { add, getList, remote } = hasTodo.actions;
export default hasTodo.reducer;
