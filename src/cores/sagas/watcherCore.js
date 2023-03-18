import { take, fork, takeEvery, takeLatest } from "redux-saga/effects";

// worker
import workerCore from './workerCore';

// const 
import TYPE_HANDLE_ACTION from 'cores/utils/constants/TYPE_HANDLE_ACTION';
import TYPE_HANDLE from 'cores/utils/constants/TYPE_HANDLE';

function nameAPI(type = '') {
    return type.split('/')[0].toLowerCase().replace('has', '');
};

const type = typeCore();

function typeCore() {
    const idsGetList = [];
    const idsPost = [];
    const idsUpdate = [];
    const idsGet = [];
    const idsRemove = [];
    for (const type in TYPE_HANDLE_ACTION) {
        const actionType = TYPE_HANDLE_ACTION[type];
        actionType[TYPE_HANDLE.GET_LIST].includes(TYPE_HANDLE.GET_LIST) && idsGetList.push(actionType[TYPE_HANDLE.GET_LIST]);
        actionType[TYPE_HANDLE.ADD].includes(TYPE_HANDLE.ADD) && idsPost.push(actionType[TYPE_HANDLE.ADD]);
        actionType[TYPE_HANDLE.REMOTE].includes(TYPE_HANDLE.REMOTE) && idsRemove.push(actionType[TYPE_HANDLE.REMOTE]);
        actionType[TYPE_HANDLE.UPDATE].includes(TYPE_HANDLE.UPDATE) && idsUpdate.push(actionType[TYPE_HANDLE.UPDATE]);
        actionType[TYPE_HANDLE.GET].includes(TYPE_HANDLE.GET) && idsGet.push(actionType[TYPE_HANDLE.GET]);
    }
    return {
        [TYPE_HANDLE.GET_LIST]: idsGetList,
        [TYPE_HANDLE.GET]: idsGet,
        [TYPE_HANDLE.ADD]: idsPost,
        [TYPE_HANDLE.UPDATE]: idsUpdate,
        [TYPE_HANDLE.REMOTE]: idsRemove,
    };
}

function* watcherAdd() {
    yield takeEvery(type[TYPE_HANDLE.ADD], function* (action) {
        const { type, payload } = action;
        yield fork(workerCore, TYPE_HANDLE.ADD, nameAPI(type), payload?.config, payload?.callback);
    });
};

function* watcherRemove() {
    yield takeEvery(type[TYPE_HANDLE.REMOTE], function* (action) {
        const { type, payload } = action;
        yield fork(workerCore, TYPE_HANDLE.REMOTE, nameAPI(type), payload?.config, payload.callback);
    });
};

function* watcherUpdate() {
    yield takeEvery(type[TYPE_HANDLE.UPDATE], function* (action) {
        const { type, payload } = action;
        yield fork(workerCore, TYPE_HANDLE.UPDATE, nameAPI(type), payload?.config, payload.callback);
    });
};

function* watcherGetList() {
    yield takeEvery(type[TYPE_HANDLE.GET_LIST], function* (action) {
        const { type, payload } = action;
        yield fork(workerCore, TYPE_HANDLE.GET_LIST, nameAPI(type), payload?.config, payload?.callback);
    });
};

const watcherCore = {
    watcherGetList,
    watcherAdd,
    watcherRemove,
    watcherUpdate,
};

export default watcherCore;