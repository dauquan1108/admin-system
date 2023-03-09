import { put, take, fork } from "redux-saga/effects";

// action store
// import hasTransaction from "../../reducers/hasTransaction";

// worker
import workerTransaction from './workerTransaction';

// const 
import { TYPE_ACTION_TRANSACTION } from 'cores/actions-sagas/transaction'

function* watcherAdd() {
    while (true) {
        const { payload } = yield take(TYPE_ACTION_TRANSACTION.ADD);
        yield fork(workerTransaction.workerAdd, payload.data, payload.callback);
    }
};

function* watcherGetList() {
    while (true) {
        const { payload } = yield take(TYPE_ACTION_TRANSACTION.GET_LIST);
        yield fork(workerTransaction.workerGetList, payload.data, payload.callback);
    }
};

export default {
    watcherAdd,
    watcherGetList,
}