import {
    combineReducers,
    configureStore,
} from "@reduxjs/toolkit";

// reducer
import backgroundImg from "./backgroundImg";
import userInformation from "./userInformation";
import transaction from './transaction';
import todo from './todo';
import device from './device';
import me from './me/me'
// [Tự động import reducers vào đây]

import createSaga from "redux-saga";

import rootSagas from "cores/sagas";

const reducers = {
    ...transaction,
    ...todo,
    ...device,
    // [Tự động thêm reducer vào đây]
}

const rootReducer = combineReducers({
    backgroundImg, // Trường hợp đặc biệt
    userInformation, // Trường hợp đặc biệt 
    me, // Trường hợp đặc biệt 
    ...reducers,
});

const sagaMiddleware = createSaga();

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSagas);

export default store;
