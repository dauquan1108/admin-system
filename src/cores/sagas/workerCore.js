import baseAPI from 'cores/axios/baseAPI';
import { put, fork } from "redux-saga/effects";
import TYPE_HANDLE from 'cores/utils/constants/TYPE_HANDLE';
import isStringInStore from 'cores/utils/functions/isStringInStore';
import convertAPItoNameStore from 'cores/utils/functions/convertAPItoNameStore';

/**
 * doMergeAdd: Dùng để đưa bắn action đến store phù hợp để update
 * @param {string} nameAPI tên của API  
 * @param {*} data 
 */
export function* doMergeAdd(nameAPI, data) {
    const arr = convertAPItoNameStore(nameAPI);
    for (let i in arr) {
        const isHas = arr[i].includes('Has');
        yield put({
            type: `${arr[i]}/${TYPE_HANDLE.ADD}`, // Mô phỏng: HasTodo/add
            payload: isHas ? data._id : data,
        })
    }
};

/**
 * doMergeGetList: Sử dụng để đưa bắn action type phù hợp để merge vào store tương ứng
 * @param {*} obj mô phỏng obj = { HasTodo: {}, Todo: {}}
 */
export function* doMergeGetList(obj, limit) {
    const keys = Object.keys(obj).reverse(); // Note: dữ liệu được merge lên store cần merge dữ liệu object trước
    for (let i in keys) {
        yield put({
            type: `${keys[i]}/${TYPE_HANDLE.GET_LIST}`, // Mô phỏng: HasTodo/getList
            // Mô phỏng: payload: HasTodo 
            payload: {
                ...obj[keys[i]],
                limit
            }
        })
    }
};

/**
 * doMergeRemove: Dùng để đưa bắn action đến store phù hợp để update
 * @param {string} nameAPI tên của API  
 * @param {*} data 
 */
export function* doMergeRemove(nameAPI, data) {
    const arr = convertAPItoNameStore(nameAPI);
    // Với trạng thái xóa thì chỉ cần xóa dữ liệu trên trường Has của store 
    yield put({
        type: `${arr[1]}/${TYPE_HANDLE.REMOTE}`, // Mô phỏng: HasTodo/remote
        payload: data.id,
    })
};

export function* doMergeUpdate(nameAPI, data) {
    const arr = convertAPItoNameStore(nameAPI);
    // Với trạng thái update thì chỉ cần update dữ liệu trên trường Object của store 
    yield put({
        type: `${arr[0]}/${TYPE_HANDLE.UPDATE}`, // Mô phỏng: Todo/update
        payload: data,
    })
};

function* doSwitchHandleToStore(method, data, nameAPI) {
    switch (method) {
        case TYPE_HANDLE.GET_LIST:
            const { limit } = data;
            yield fork(doMergeGetList, data['data'], limit);
            break;
        case TYPE_HANDLE.ADD:
            yield fork(doMergeAdd, nameAPI, data)
            break;
        case TYPE_HANDLE.REMOTE:
            yield fork(doMergeRemove, nameAPI, data)
            break;
        case TYPE_HANDLE.GET:
            break;
        case TYPE_HANDLE.UPDATE:
            yield fork(doMergeUpdate, nameAPI, data)
        default:
            console.log('Chưa hỗ trợ method này: ', method);
            // code block
            break;
    }
}

function* workerCore(method = TYPE_HANDLE.GET_LIST, nameAPI, config = {}, callback = []) {
    try {
        isStringInStore(method, TYPE_HANDLE, 'Method này chưa được định nghĩa trong file baseAPI'); // Kiểm tra method truyền vào có tồn tại trong định nghĩa chưa
        const { data = null, status = 404 } = yield baseAPI[method](nameAPI, config);
        switch (status) {
            case 200:
                yield fork(doSwitchHandleToStore, method, { ...data, ...config?.data, ...config?.params }, nameAPI);
                callback[0](data['data']);
                break;
            case 404:
            default:
                callback[1](data);
                break;
        }
    } catch (error) {
        console.error('[error workerGetList] =>', error);
    }
};

export default workerCore;