import { useDispatch } from 'react-redux';
import TYPE_HANDLE_ACTION from 'cores/utils/constants/TYPE_HANDLE_ACTION';
import TYPE_STORE from 'cores/utils/constants/TYPE_STORE';
import TYPE_HANDLE from 'cores/utils/constants/TYPE_HANDLE';

function useDispatchCore() {
    const dispatch = useDispatch();
    const dispatchCore = (name, method, data = {}, params = { limit: 10, page: 1 }, headers = {}, onSuccess = null, onFail = null) => {
        if (Object.values(TYPE_STORE).includes(name)) {
            dispatch({
                type: TYPE_HANDLE_ACTION[name][method], payload: {
                    config: {
                        params,
                        headers,
                        data,
                    },
                    callback: [onSuccess, onFail],
                }
            })
        } else {
            throw new Error(`${name} không được định nghĩa trong TYPE_STORE (vui lòng trao đổi lại với dev quản lý thư mục core của dự án)`);
        }
    }
    return ({ dispatchCore, TYPE: TYPE_STORE, METHOD: TYPE_HANDLE });
}

export default useDispatchCore;