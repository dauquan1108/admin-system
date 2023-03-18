import TYPE_HANDLE from "cores/utils/constants/TYPE_HANDLE";
import produce from "immer";

const objectReducer = {
    [TYPE_HANDLE.ADD]: {
        reducer: (state, action) => {
            const { _id, fakeId, ...data } = action.payload;
            return produce(state, (draftState) => {
                draftState[_id] = { ...data, _id, loading: false }
                delete draftState[fakeId];
            });
        },
    },

    [`${TYPE_HANDLE.ADD}-fake`]: {
        reducer: (state, action) => {
            const { fakeId, ...data } = action.payload;
            return produce(state, (draftState) => {
                draftState[fakeId] = { ...data, _id: fakeId, loading: true }
            });
        },
    },

    [TYPE_HANDLE.GET_LIST]: {
        reducer: (state, action) => {
            delete action.payload.limit;
            return produce(state, (draftState) => ({ ...draftState, ...action.payload }));
        },
    },
    [`${TYPE_HANDLE.UPDATE}-fake`]: {
        reducer: (state, action) => {
            return produce(state, (draftState) => {
                draftState[action.payload.id] = { ...draftState[action.payload.id], ...action.payload, loading: true }
            });
        },
    },
    [TYPE_HANDLE.UPDATE]: {
        reducer: (state, action) => {
            return produce(state, (draftState) => {
                draftState[action.payload.id].loading = false;
            });
        },
    }
};

export default objectReducer;