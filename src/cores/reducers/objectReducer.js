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
    }
};

export default objectReducer;