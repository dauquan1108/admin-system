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
import HasTransaction from "./transaction/hasTransaction";
import Transaction from "./transaction/transaction";

import createSaga from "redux-saga";

import rootSagas from "cores/sagas";

const rootReducer = combineReducers({
    todos: todosReducer,
	backgroundImg,
	userInformation,
    HasTransaction,
    Transaction,
})

const sagaMiddleware = createSaga();

const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSagas);

export default store;
