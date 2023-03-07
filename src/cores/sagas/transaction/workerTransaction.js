import { put } from "redux-saga/effects";

import transactionAPIs from 'cores/axios/transactionAPIs'

import { add as addHas } from 'cores/reducers/transaction/hasTransaction';
import { add } from 'cores/reducers/transaction/transaction'

function* workerAdd(val, callback = [], config) {
    const { data = null, status = 404 } = yield transactionAPIs.add(config, val);
    console.log('callback: ', callback);
    switch (status) {
        case 200:
            yield put(add({
                ...val,
                ...data
            }));
            yield put(addHas(data._id));
            yield callback[0] && callback[0](data);
            break;
        case 404:
        default:
            yield callback[1] && callback[1](data);
            break;
    }
};

export default {
    workerAdd,
}