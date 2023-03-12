import API_KEY from "cores/axios/keyAPI";

export default function isStringInStore(name = '', obj = API_KEY, txtError = 'tên này chưa được địnhn nghĩa trong API_KEY, vui lòng cập nhật hoặc trao đổi lại với backend') {
    const isInStore = Object.values(obj).includes(name);
    if (!isInStore) {
        throw new Error(`${name}: ${txtError} (Các dữ liệu phù hợp: ${Object.values(obj).join(' - ')})`);
    }
    return isInStore;
}