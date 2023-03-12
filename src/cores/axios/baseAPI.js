import axiosClient from './axiosClient';
import isStringInStore from 'cores/utils/functions/isStringInStore';
import TYPE_HANDLE from 'cores/utils/constants/TYPE_HANDLE';

/**
 * validationConfig: Vì trong config có rất nhiều loại dữ liệu khác nên cần làm mịn để gọi api
 * @param {*} config 
 * @returns : hiện tại chỉ cần { params, headers }
 */
const validationConfig = (config) => {
    const { params, headers } = config;
    return ({ params, headers })
}
const baseAPI = {
    [TYPE_HANDLE.GET_LIST]: (url, config = { params: {}, headers: {} }) => {
        isStringInStore(url);
        return axiosClient.get(`${url}`, config);
    },

    [TYPE_HANDLE.GET]: (url, id, config = { params: {}, headers: {} }) => {
        isStringInStore(url);
        return axiosClient.get(`${url}/${id}`, validationConfig(config));
    },

    [TYPE_HANDLE.ADD]: (url, config = { params: {}, headers: {} }) => {
        isStringInStore(url);
        return axiosClient.post(url, config?.data, validationConfig(config));
    },

    [TYPE_HANDLE.UPDATE]: (url, data = {}, config = { params: {}, headers: {} }) => {
        isStringInStore(url);
        return axiosClient.put(url, data, validationConfig(config));
    },

    [TYPE_HANDLE.REMOTE]: (url, config) => {
        isStringInStore(url);
        return axiosClient.delete(`${url}/${config?.data?.id}`, validationConfig(config));
    },
};
export default baseAPI;