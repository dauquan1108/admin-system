import baseAPI from 'cores/axios/baseAPI';
import { put, fork } from "redux-saga/effects";
import TYPE_HANDLE from 'cores/utils/constants/TYPE_HANDLE';
import isStringInStore from 'cores/utils/functions/isStringInStore';
import convertAPItoNameStore from 'cores/utils/functions/convertAPItoNameStore';
import { v4 as createId } from 'uuid';

/**
 * doMergeAdd: Dùng để đưa bắn action đến store phù hợp để update
 * @param {string} nameAPI tên của API
 * @param {*} data: Dữ liệu đẩy lên
 * @param {*} type: sử dụng để phân biện dữ liệu từ server đổ về hay dữ liệu giả
 */
export function* doMergeAdd(nameAPI, data, type = '') {
    const arr = convertAPItoNameStore(nameAPI);
    for (let i in arr) {
        const isHas = arr[i].includes('Has');
        yield put({
            type: `${arr[i]}/${TYPE_HANDLE.ADD}${type}`, // Mô phỏng: HasTodo/add
            payload: isHas ? { _id: data._id, fakeId: data.fakeId } : data,
        })
    }
};

/**
 * doMergeGetList: Sử dụng để đưa bắn action type phù hợp để merge vào store tương ứng
 * @param {*} obj mô phỏng obj = { HasTodo: {}, Todo: {}}
 */
export function* doMergeGetList(obj, other) {
    const keys = Object.keys(obj).reverse(); // Note: dữ liệu được merge lên store cần merge dữ liệu object trước
    for (let i in keys) {
        const isHas = keys[i].includes('Has');
        yield put({
            type: `${keys[i]}/${TYPE_HANDLE.GET_LIST}`, // Mô phỏng: HasTodo/getList
            // Mô phỏng: payload: HasTodo
            payload: isHas ? {
                ...obj[keys[i]],
                other,
            } : obj[keys[i]],
        })
    }
};

/**
 * doMergeRemove: Dùng để đưa bắn action đến store phù hợp để update
 * @param {string} nameAPI tên của API
 * @param {*} data
 */
export function* doMergeRemove(nameAPI, data, type = '') {
    const arr = convertAPItoNameStore(nameAPI);
    // Với trạng thái xóa thì chỉ cần xóa dữ liệu trên trường Has của store
    yield put({
        type: `${arr[1]}/${TYPE_HANDLE.REMOTE}${type}`, // Mô phỏng: HasTodo/remote
        payload: data.id,
    })
};

export function* doMergeUpdate(nameAPI, data, type = '') {
    const arr = convertAPItoNameStore(nameAPI);
    // Với trạng thái update thì chỉ cần update dữ liệu trên trường Object của store
    yield put({
        type: `${arr[0]}/${TYPE_HANDLE.UPDATE}${type}`, // Mô phỏng: Todo/update
        payload: data,
    })
};

function* doSwitchHandleToStore(method, _data, nameAPI) {
    switch (method) {
        case TYPE_HANDLE.GET_LIST:
            const { data, ...other } = _data;
            yield fork(doMergeGetList, data, other);
            break;
        case TYPE_HANDLE.ADD:
            yield fork(doMergeAdd, nameAPI, _data)
            break;
        case TYPE_HANDLE.REMOTE:
            yield fork(doMergeRemove, nameAPI, _data)
            break;
        case TYPE_HANDLE.GET:
            break;
        case TYPE_HANDLE.UPDATE:
            yield fork(doMergeUpdate, nameAPI, _data);
            break;
        default:
            console.log('Chưa hỗ trợ method này: ', method);
            // code block
            break;
    }
}

function* doSwitchHandleFakeToStore(method, data, nameAPI) {
    const type = '-fake';
    switch (method) {
        case TYPE_HANDLE.ADD:
            yield fork(doMergeAdd, nameAPI, data, type)
            break;
        case TYPE_HANDLE.REMOTE:
            yield fork(doMergeRemove, nameAPI, data, type)
            break;
        case TYPE_HANDLE.UPDATE:
            yield fork(doMergeUpdate, nameAPI, data, type);
            break;
        default:
            console.log('Chưa hỗ trợ method này: ', method);
            // code block
            break;
    }
}

function* workerCore(method = TYPE_HANDLE.GET_LIST, nameAPI, config = {}, callback = []) {
    try {
        isStringInStore(method, TYPE_HANDLE, 'Method này chưa được định nghĩa trong file baseAPI'); // Kiểm tra method truyền vào có tồn tại trong định nghĩa chưa

        const fakeId = createId();

        // Đưa dữ liệu fake lên store để tăng trải nghiệm người dùng
        if ([TYPE_HANDLE.ADD, TYPE_HANDLE.UPDATE, TYPE_HANDLE.REMOTE].includes(method)) {
            yield fork(doSwitchHandleFakeToStore, method, { ...config?.data, ...config?.params, fakeId }, nameAPI)
        }

        // Gọi dữ liệu
        const { data = null, status = 404 } = yield baseAPI[method](nameAPI, config);
        switch (status) {
            case 200:
                yield fork(doSwitchHandleToStore, method, { ...data, ...config?.data, ...config?.params, fakeId }, nameAPI);
                callback[0] && callback[0](data);
                break;
            case 404:
            default:
                callback[0] && callback[1](data);
                break;
        }
    } catch (error) {
        console.error('[error workerGetList] =>', error);
    }
};

export default workerCore;
