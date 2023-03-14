import baseAPI from 'cores/axios/baseAPI';
import { doMergeGetList } from 'cores/sagas/workerCore';
import { put, fork } from "redux-saga/effects";

import transactionAPIs from 'cores/axios/transactionAPIs'

import { add as addHas } from 'cores/reducers/transaction/hasTransaction';
import { add } from 'cores/reducers/transaction/transaction'

import API_KEY from 'cores/axios/keyAPI';

function* workerAdd(val, callback = [], config) {
    const { data = null, status = 404 } = yield transactionAPIs.add(config, val);
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

function* workerGetList(callback = [], config) {
    const { data = null, status = 404 } = yield baseAPI.getList(API_KEY.transaction);
    switch (status) {
        case 200:
            yield fork(doMergeGetList, data['data'])
            yield callback[0] && callback[0](data['data']);
            break;
        case 404:
        default:
            yield callback[1] && callback[1](data);
            break;
    }
};

export default {
    workerAdd,
    workerGetList,
}