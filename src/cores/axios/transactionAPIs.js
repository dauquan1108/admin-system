import baseAPI from './baseAPI';
const route = 'transaction';
const transactionAPIs = {
    // params yeu cau sau / vd : lay ra 10 ptu dau
    // getAll(data) {
    //     return axiosClient.get(route, data);
    // },
    // get(id) {
    //     const url = `/product/${id}`;
    //     return axiosClient.get(url);
    // },
    add(config = { params: {}, headers: {} }, data = {}) {
        return baseAPI.add(route, data, config);
    },
    // update(data) {
    //     return axiosClient.put(route, data);
    // },
    // delete(id) {
    //     const url = `${url_base}/${id}`;
    //     return axiosClient.delete(url);
    // },
};
export default transactionAPIs;