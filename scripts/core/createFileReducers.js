const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

function createFileReducers(fileName) {
    const upperCaseStr = fileName.charAt(0).toUpperCase() + fileName.slice(1);
    //----------------------------------------------------------------------
    const dirPath = path.join(__dirname, '..', '..', 'src', 'cores', 'reducers', fileName);
    if (fs.existsSync(dirPath)) {
        console.log(`=================[File ${fileName} đã tồn tại!]=================`);
    } else {
        const dirFile = `src/cores/reducers/${fileName}/${fileName}.js`;
        const dirHasFile = `src/cores/reducers/${fileName}/has${upperCaseStr}.js`;

        // Tạo file trong thư mục src
        shell.mkdir('-p', `src/cores/reducers/${fileName}`);
        shell.touch(dirFile);
        shell.touch(dirHasFile);

        // Ghi nội dung vào file
        // Đọc nội dung của file và lưu vào biến data
        let data = fs.readFileSync(`src/cores/reducers/example/example.txt`, 'utf-8');
        let hasData = fs.readFileSync(`src/cores/reducers/example/hasExample.txt`, 'utf-8');

        // Thay thế các chuỗi 'name' bằng 'upperCaseStr'
        data = data.replace(/NAME/g, upperCaseStr);
        hasData = hasData.replace(/NAME/g, upperCaseStr);

        fs.writeFileSync(dirFile, data);
        // fs.appendFileSync(dirFile, data);
        fs.writeFileSync(dirHasFile, hasData);

        console.log(`=================[File ${fileName} đã tạo!]=================`);
    }
    console.log();
}
module.exports = createFileReducers;