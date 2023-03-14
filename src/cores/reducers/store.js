import {
    combineReducers,
    configureStore,
    getDefaultMiddleware
} from "@reduxjs/toolkit";
// import { composeWithDevTools } from 'redux-devtools';

import todosReducer from "./todos";
import backgroundImg from "./backgroundImg";

import createSaga from "redux-saga";

import rootSagas from "../sagas";

const rootReducer = combineReducers({
    todos: todosReducer,
	backgroundImg,
    // Add more reducers here if needed
})

const sagaMiddleware = createSaga();

const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSagas);

export default store;
