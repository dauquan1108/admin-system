const fs = require('fs');
function updateFileReducerRoot(name) {
    const filePath = `src/cores/reducers/store.js`;
    // Đọc nội dung file vào biến content
    let content = fs.readFileSync(filePath, 'utf-8');

    // Nội dung cần kiểm tra trong content
    const textImport = `import ${name} from './${name}'`;
    if (!content.includes(textImport)) {
        // Sử dụng regular expression để thay thế [Thay vào đây 1] bằng chuỗi import
        const importText = `${textImport};\n// [Tự động import reducers vào đây]`;
        const text = `...${name},\n// [Tự động thêm reducer vào đây]`;
        content = content.replace(/\/\/ \[Tự động import reducers vào đây\]/, importText);
        context = content.replace(/\/\/ \[Tự động thêm reducer vào đây\]/, text);

        // Ghi nội dung đã được thay thế vào file
        fs.writeFileSync(filePath, context);
    }

};

module.exports = updateFileReducerRoot;