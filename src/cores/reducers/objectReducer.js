import TYPE_HANDLE from "cores/utils/constants/TYPE_HANDLE";
import produce from "immer";

const objectReducer = {
    [TYPE_HANDLE.ADD]: {
        reducer: (state, action) => {
            const { _id, ...data } = action.payload;
            return produce(state, (draftState) => {
                draftState[_id] = { ...data }
            });
        },
    },
    [TYPE_HANDLE.GET_LIST]: {
        reducer: (state, action) => {
            return produce(state, (draftState) => ({ ...draftState, ...action.payload }));
        },
    },
    [TYPE_HANDLE.UPDATE]: {
        reducer: (state, action) => {
            return produce(state, (draftState) => {
                draftState[action.payload.id] = { ...draftState[action.payload.id], ...action.payload }
            });
        },
    }
};

export default objectReducer;