import {
    combineReducers,
    configureStore
} from "@reduxjs/toolkit";
// import { composeWithDevTools } from 'redux-devtools/core';

import todosReducer from "./todos";

import createSaga from "redux-saga";

import rootSagas from "../sagas";

const rootReducer = combineReducers({
    todos: todosReducer,
    // Add more reducers here if needed
})

const sagaMiddleware = createSaga();

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSagas);

export default store;
