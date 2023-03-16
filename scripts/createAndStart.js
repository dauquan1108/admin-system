const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

const args = process.argv.slice(2);

// Kiểm tra xem đã truyền đúng số tham số hay chưa
if (args.length !== 1) {
    console.error('Vui lòng truyền đúng số tham số. Ví dụ: npm run create-and-start transaction');
    process.exit(1);
}

const fileName = args[0];

if (!fileName) {
    console.error('Vui lòng cung cấp tên tệp!');
    process.exit(1);
}

const upperCaseStr = fileName.charAt(0).toUpperCase() + fileName.slice(1);
//----------------------------------------------------------------------
const dirPath = path.join(__dirname, '..', 'src', 'cores', 'reducers', fileName, `${fileName}.js`);
if (fs.existsSync(dirPath)) {
    console.log(`File ${fileName} đã tồn tại!`);
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
    // Thay thế các chuỗi 'name' bằng 'upperCaseStr'
    data = data.replace(/NAME/g, upperCaseStr);

    fs.writeFileSync(dirFile, '');
    fs.appendFileSync(dirFile, data);

    console.log(`File ${fileName} đã tạo!`);
}

// Chạy lệnh để start dự án
// shell.exec('npm start');
shell.exec('exit');
