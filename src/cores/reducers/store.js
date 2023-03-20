import {
    combineReducers,
    configureStore,
} from "@reduxjs/toolkit";

// reducer
import transaction from './transaction';
import todo from './todo';
// [Tự động import reducers vào đây]

import createSaga from "redux-saga";

import rootSagas from "cores/sagas";

const reducers = {
    ...transaction,
    ...todo,
    // [Tự động thêm reducer vào đây]
}

const rootReducer = combineReducers({
    // userInformation,
    ...reducers,
});

const sagaMiddleware = createSaga();

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSagas);

export default store;
