import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
// import { composeWithDevTools } from 'redux-devtools/core';

// reducer
import todosReducer from "./todos";
import backgroundImg from "./backgroundImg";
import userInformation from "./userInformation";
// import HasTransaction from "./transaction/hasTransaction";
// import Transaction from "./transaction/transaction";

import transaction from './transaction';
import user from './user';
import todo from './todo';

// [Tự động import reducers vào đây]

import createSaga from "redux-saga";

import rootSagas from "cores/sagas";

const reducers = {
    ...transaction,
...user,
...todo,
// [Tự động thêm reducer vào đây]
}

const rootReducer = combineReducers({
    todos: todosReducer,
	backgroundImg,
	userInformation,
    // HasTransaction,
    // Transaction,
    ...reducers,
})

const sagaMiddleware = createSaga();

const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSagas);

export default store;
