import { put, take } from "redux-saga/effects";

// action store
function* workerAdd(data) {
    console.log(data);
};

export default {
    workerAdd,
}