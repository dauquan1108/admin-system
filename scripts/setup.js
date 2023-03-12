const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

// Đọc nội dung của file và lưu vào biến data
let dataTxt = fs.readFileSync(`scripts/config_api.json`, 'utf-8');

const data = JSON.parse(dataTxt);
console.log('data: ', data);

// =============================[Từ dữ liệu data ghi vào file keyAPI.js]=============================
const dirKeyAPI = `src/cores/axios/keyAPI.js`;
// - Đọc nội dung của file TYPE_STORE 
const keyAPI_Txt = fs.readFileSync(dirKeyAPI, 'utf-8');

// - Thay thế toàn bộ ký từ trong {} bằng TYPE_STORE
const new_keyAPI = keyAPI_Txt.replace(/\{[^{}]*\}/, dataTxt);

// - Ghi vào file TYPE_STORE.js 
fs.writeFileSync(dirKeyAPI, new_keyAPI);

// =============================[Từ dữ liệu data ghi vào file TYPE_STORE.js]=============================
// - Tạo dữ liệu để gán vào file
function transformData(data) {
    const transformedData = {};

    for (const key in data) {
        const upperCaseKey = key.charAt(0).toUpperCase() + key.slice(1);
        transformedData[`Has${upperCaseKey}`] = `Has${upperCaseKey}`;
        transformedData[upperCaseKey] = upperCaseKey;
    }

    return transformedData;
}
const TYPE_STORE = transformData(data);

const DIR_TYPE_STORE = `src/cores/utils/constants/TYPE_STORE.js`;

// - Đọc nội dung của file TYPE_STORE 
const TYPE_STORE_TXT = fs.readFileSync(DIR_TYPE_STORE, 'utf-8');

// - Thay thế toàn bộ ký từ trong {} bằng TYPE_STORE
const NEW_TYPE_STORE_TXT = TYPE_STORE_TXT.replace(/\{[^{}]*\}/, JSON.stringify(TYPE_STORE));

// - Ghi vào file TYPE_STORE.js
fs.writeFileSync(DIR_TYPE_STORE, NEW_TYPE_STORE_TXT);


// shell.exec('npm start');
shell.exec('exit');
