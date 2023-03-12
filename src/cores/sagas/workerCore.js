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
export function* doMergeGetList(obj) {
    const keys = Object.keys(obj).reverse(); // Note: dữ liệu được merge lên store cần merge dữ liệu object trước
    for (let i in keys) {
        yield put({
            type: `${keys[i]}/${TYPE_HANDLE.GET_LIST}`, // Mô phỏng: HasTodo/getList
            payload: obj[keys[i]] // Mô phỏng: payload: HasTodo 
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
        type: `${arr[1]}/${TYPE_HANDLE.REMOTE}`, // Mô phỏng: HasTodo/add
        payload: data.id,
    })
};
// function* workerAdd(val, callback = [], config) {
//     const { data = null, status = 404 } = yield baseAPI.add(config, val);
//     switch (status) {
//         case 200:
//             yield put(add({
//                 ...val,
//                 ...data
//             }));
//             yield put(addHas(data._id));
//             yield callback[0] && callback[0](data);
//             break;
//         case 404:
//         default:
//             yield callback[1] && callback[1](data);
//             break;
//     }
// };

function* doSwitchHandleToStore(method, data, nameAPI) {
    switch (method) {
        case TYPE_HANDLE.GET_LIST:
            yield fork(doMergeGetList, data['data']);
            break;
        case TYPE_HANDLE.ADD:
            yield fork(doMergeAdd, nameAPI, data)
            break;
        case TYPE_HANDLE.REMOTE:
            debugger; // MongLV
            yield fork(doMergeRemove, nameAPI, data)
            break;
        case TYPE_HANDLE.GET:
            break;
        case TYPE_HANDLE.UPDATE:
        default:
            // code block
            break;
    }
}

function* workerCore(method = TYPE_HANDLE.GET_LIST, nameAPI, config = {}, callback = []) {
    try {
        isStringInStore(method, TYPE_HANDLE, 'Method này chưa được định nghĩa trong file baseAPI'); // Kiểm tra method truyền vào có tồn tại trong định nghĩa chưa
        const { data = null, status = 404 } = yield baseAPI[method](nameAPI, config);
        debugger; // MongLV
        switch (status) {
            case 200:
                yield fork(doSwitchHandleToStore, method, { ...data, ...config?.data }, nameAPI);
                callback[0] && callback[0](data['data']);
                break;
            case 404:
            default:
                callback[1] && callback[1](data);
                break;
        }
    } catch (error) {
        console.error('[error workerGetList] =>', error);
    }
};

export default workerCore;