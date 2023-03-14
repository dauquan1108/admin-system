import TYPE_HANDLE from '../constants/TYPE_HANDLE';

/**
 * createTypeAction
 * @param {*} base
 */
export default function createTypeHandleAction(base) {
    return [...Object.values(TYPE_HANDLE)].reduce((acc, type) => {
        acc[type] = `${base}/${type}[saga]`;
        return acc;
    }, {});
}