import { all } from 'redux-saga/effects';

import todo from './todo';
import transaction from './transaction';

export default function* rootSagas() {
    yield all([
        todo.watcherAddTodo(), todo.watcherToggleTodo(), // Todo
        transaction.watcherAdd(), // transaction
    ]);
}