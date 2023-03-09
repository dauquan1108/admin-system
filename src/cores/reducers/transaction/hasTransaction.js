import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

import TYPE_STORE from 'cores/reducers/typeStore';

const hasTransaction = createSlice({
    // name: TYPE_STORE.HasTransaction, // MongLV: kiểm tra nguyên nhân
    name: 'HasTransaction',
    initialState: {
        total: 0,
        count: 0,
        itemIds: []
    },
    reducers: {
        add: {
            reducer: (state, action) => {
                return produce(state, (draftState) => {
                    draftState.total += 1;
                    draftState.count += 1;
                    draftState.itemIds.push(action.payload);
                });
            },
            // Chú ý payload của action ở đây
            // payload được khai báo là một chuỗi
            // payload sẽ được đưa vào hàm reducer khi dispatch
            // và sử dụng để thêm vào mảng itemIds
            // Cú pháp: dispatch(add('một chuỗi bất kỳ'))
            // Trong đó 'một chuỗi bất kỳ' là payload
            // Nếu không có payload, ghi như sau: dispatch(add())
            // Trong đó không có tham số
            prepare: (payload) => ({ payload })
        },
        getList: {
            reducer: (state, action) => {
                const { count, total, itemIds } = action.payload;
                if (state.count != count) {
                    return produce(state, (draftState) => {
                        draftState.total = total;
                        draftState.count = draftState.count + count;
                        draftState.itemIds = [...new Set(draftState.itemIds.concat(itemIds))];
                    });
                }
            },
        }
    }
});

export const { add, getList } = hasTransaction.actions;
export default hasTransaction.reducer;