import baseAPI from 'cores/axios/baseAPI';
import { put, fork, delay } from "redux-saga/effects";
import TYPE_HANDLE from 'cores/utils/constants/TYPE_HANDLE';

/**
 * Kiểm tra và điều phối logic liên quan đến login
 * @param {number} status 
 * @param {*} data 
 * @param {Array} callback 
 */
function* doLogin(status, data, callback = [() => null, () => null]) {
    switch (status) {
        case 200:
            yield put({
                type: 'Me/add', // Chỗ này sau sẽ làm chuẩn lại
                payload: data,
            })
            callback[0] && callback[0](data);
            break;
        default:
            callback[1] && callback[1]();
            break;
    }
}

function* workerCallApi(nameApi = 'user/login', method = TYPE_HANDLE.ADD, config = {}, callback = [() => null, () => null]) {
    try {
        const { data = null, status = 404 } = yield baseAPI[method](nameApi, config, false);
        yield fork(doLogin, status, data, callback);
    } catch (err) {
        console.error('[error workerCallApi] =>', err);
        callback[1] && callback[1](err?.response?.status);
    }
};

const workerAuthor = {
    workerCallApi,
};

export default workerAuthor;