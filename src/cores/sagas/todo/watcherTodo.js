import { put, take } from "redux-saga/effects";

import { addTodo, toggleTodo } from "../../reducers/todos"

function* watcherAddTodo() {
    while (true) {
        const info = yield take("todos/add");
        yield put(addTodo(info.payload))
    }
};

function* watcherToggleTodo() {
    while (true) {
        const info = yield take("todos/toggle");
        yield put(toggleTodo(info.payload))
    }
};

export default {
    watcherAddTodo,
    watcherToggleTodo,
}