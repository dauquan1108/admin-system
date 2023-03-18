import TYPE_HANDLE from "cores/utils/constants/TYPE_HANDLE";
import produce from "immer";

const hasObjectReducer = {
    [TYPE_HANDLE.ADD]: {
        reducer: (state, action) => {
            return produce(state, (draftState) => {
                draftState.total += 1;
                draftState.count += 1;
                draftState.itemIds = [action.payload, ...draftState.itemIds];
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
    [TYPE_HANDLE.GET_LIST]: {
        reducer: (state, action) => {
            const { count, total, itemIds, limit } = action.payload;
            if (state.count != count) {
                return produce(state, (draftState) => {
                    draftState.total = total;
                    const newCount = draftState.count + limit;
                    draftState.count = newCount > total ? total : newCount;
                    draftState.itemIds = [...new Set(draftState.itemIds.concat(itemIds))];
                });
            }
        },
    },
    [TYPE_HANDLE.REMOTE]: {
        // if (index !== -1) {
        //     // Sử dụng Immer ở đây
        //     produce(state, (draftState) => {
        //         draftState.splice(index, 1);
        //     });
        // }
        reducer: (state, action) => {
            const index = state.itemIds.findIndex((id) => id === action.payload);
            return produce(state, (draftState) => {
                draftState.count -= 1;
                draftState.total -= 1;
                index != -1 && draftState.itemIds.splice(index, 1);
            });
        }
    },
};

export default hasObjectReducer;