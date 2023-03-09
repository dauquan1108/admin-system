import baseAPI from 'cores/axios/baseAPI';

import { put, fork } from "redux-saga/effects";

import transactionAPIs from 'cores/axios/transactionAPIs'

import { add as addHas, getList as getListHas } from 'cores/reducers/transaction/hasTransaction';
import { add, getList } from 'cores/reducers/transaction/transaction'

// import TYPE_STORE from 'cores/reducers/typeStore';

// const ACTION_REDUCES = {
// [TYPE_STORE.HasTransaction]: {
// 
// }
// };

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

function* doMergeGetList(obj) {
    const keys = Object.keys(obj);
    for (let i in keys) {
        console.log(keys[i]);
        yield put({
            type: `${keys[i]}/getList`,
            payload: obj[keys[i]]
        })
    }
};

function* workerGetList(val, callback = [], config) {
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