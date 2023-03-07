import { put, take, fork } from "redux-saga/effects";

// action store
// import hasTransaction from "../../reducers/hasTransaction";

// worker
import workerTransaction from './workerTransaction';

// const 
import { TYPE_ACTION_TRANSACTION } from 'cores/actions-sagas/transaction'

function* watcherAdd() {
    while (true) {
        const info = yield take(TYPE_ACTION_TRANSACTION.ADD);
        // yield put(hasTransaction.add(info.payload))
        console.log('info: ', info)
        yield fork(workerTransaction.workerAdd, info.payload, info.callback)
    }
};

export default {
    watcherAdd,
}