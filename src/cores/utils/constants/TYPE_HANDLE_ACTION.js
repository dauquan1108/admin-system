import createTypeHandleAction from "../functions/createTypeHandleAction";
import TYPE_STORE from "./TYPE_STORE";

const createTypeAction = () => {
    let obj = {};
    for (let key in TYPE_STORE) {
        obj[TYPE_STORE[key]] = createTypeHandleAction(TYPE_STORE[key]);
    }
    console.log('TYPE_HANDLE_ACTION: ', obj);
    return obj;
};

const TYPE_HANDLE_ACTION = createTypeAction();
export default TYPE_HANDLE_ACTION;