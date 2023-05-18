import { createSlice } from "@reduxjs/toolkit";
import TYPE_HANDLE from "cores/utils/constants/TYPE_HANDLE";

const Me = createSlice({
    name: 'Me',
    initialState: null,
    reducers: {
        [TYPE_HANDLE.ADD]: {
            reducer: (state, action) => {
                const { payload } = action;
                const data = {...payload?.data?.me};
                return {...data};
            },
        },
    }
});

export const { add, getList } = Me.actions;
export default Me.reducer;
