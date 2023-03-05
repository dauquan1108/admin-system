import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const hasTransSlice = createSlice({
    name: "HasTransaction",
    initialState: {
        total: 0,
        count: 0,
        itemIds: []
    },
    reducers: {
        add: {
            reducer: (state, action) => {
                produce(state, (draftState) => {
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
    }
});

export const { add } = hasTransSlice.actions;
export default hasTransSlice.reducer;