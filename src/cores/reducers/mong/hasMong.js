import { createSlice } from "@reduxjs/toolkit";
import produce from 'immer';

import TYPE_STORE from "cores/utils/constants/TYPE_STORE";
import hasObjectReducer from "../hasObjectReducer";

const hasMong = createSlice({
    name: TYPE_STORE.HasMong,
    initialState: {
        total: 0,
        count: 0,
        itemIds: []
    },
    reducers: {
        ...hasObjectReducer,
        // Viết thêm reducer ở dưới đây
    }
});

export const { add, getList, remote } = hasMong.actions;
export default hasMong.reducer;