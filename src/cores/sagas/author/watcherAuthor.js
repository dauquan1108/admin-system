import { takeEvery, fork } from 'redux-saga/effects';
import workerAuthor from './workerAuthor';

// utils
import ACTION_TYPE from 'cores/utils/constants/ACTION_TYPE';
import TYPE_HANDLE from 'cores/utils/constants/TYPE_HANDLE';

function* watcherLogin() {
    yield takeEvery(ACTION_TYPE.LOGIN, function* (action) {
        const { payload } = action;
        // Code tiếp ở đây
        yield fork(workerAuthor.workerCallApi, 'user/login', TYPE_HANDLE.ADD, payload?.config, payload?.callback);
    });
};

function* watcherCheckToken() {
    yield takeEvery(ACTION_TYPE.CHECK_LOGIN, function* (action) {
        const { payload } = action;
        // Code tiếp ở đây
        yield fork(workerAuthor.workerCallApi, 'user/refresh', TYPE_HANDLE.ADD, undefined, payload?.callback);
    });
};

function* watcherSigup() {
    yield takeEvery(ACTION_TYPE.SIGUP, function* (action) {
        const { type, payload } = action;
        // Code tiếp ở đây
    });
};

function* watcherRefresh() {
    yield takeEvery(ACTION_TYPE.REFRESH, function* (action) {
        const { type, payload } = action;
        // Code tiếp ở đây
    });
};

export default {
    watcherLogin,
    watcherRefresh,
    watcherSigup,
    watcherCheckToken,
};