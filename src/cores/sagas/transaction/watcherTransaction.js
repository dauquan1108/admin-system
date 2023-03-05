import { put, take, fork } from "redux-saga/effects";

// action store
// import hasTransaction from "../../reducers/hasTransaction";

// worker
import workerTransaction from './workerTransaction';

function* watcherAdd() {
    while (true) {
        const info = yield take("transaction/add");
        // yield put(hasTransaction.add(info.payload))
        yield fork(workerTransaction.workerAdd, info.payload)
    }
};

export default {
    watcherAdd,
}