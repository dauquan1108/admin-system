import axiosClient from './axiosClient';

const baseAPI = {
    getList(url, config = { params: {}, headers: {} }) {
        return axiosClient.get(`${url}`, config);
    },

    getId(url, id, config = { params: {}, headers: {} }) {
        return axiosClient.get(`${url}/${id}`, config);
    },

    add(url, data = {}, config = { params: {}, headers: {} }) {
        return axiosClient.post(url, data, config);
    },

    update(url, data = {}, config = { params: {}, headers: {} }) {
        return axiosClient.put(url, data, config);
    },

    delete(url, params = {}, headers = {}, id) {
        return axiosClient.delete(`${url}/${id}`, {
            headers,
            params,
        });
    },
};
export default baseAPI;