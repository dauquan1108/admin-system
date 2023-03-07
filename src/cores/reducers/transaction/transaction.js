import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

// import TYPE_STORE from 'cores/reducers/typeStore';

const Transaction = createSlice({
    // name: TYPE_STORE.HasTransaction, // MongLV: kiểm tra nguyên nhân
    name: 'Transaction',
    initialState: {},
    reducers: {
        add: {
            reducer: (state, action) => {
                const { _id, ...data } = action.payload;
                return produce(state, (draftState) => {
                    draftState[_id] = { ...data }
                });
            },
        },
    }
});

export const { add } = Transaction.actions;
export default Transaction.reducer;