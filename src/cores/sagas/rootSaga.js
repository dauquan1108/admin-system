import { all } from 'redux-saga/effects';

import todo from './todo';
// import transaction from './transaction';
import watcherCore from './watcherCore';

export default function* rootSagas() {
    yield all([
        todo.watcherAddTodo(), todo.watcherToggleTodo(), // Todo dùng để ví dụ 
        // transaction.watcherAdd(), transaction.watcherGetList(), // transaction
        watcherCore.watcherGetList(), watcherCore.watcherAdd(), watcherCore.watcherRemove(),
    ]);
}