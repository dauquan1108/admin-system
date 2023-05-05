// Ví dụ cách dùng
// const typeOfData = {
//     value1: ['string',  true],
//     value2: ['array', true],
//     value3: ['object',  false],
//     value4: ['function',  false]
// }
//
// const _test = (data) => {
//     try {
//         isInstanceof(data, typeOfData);
//         // Xử lý một đống logic tiếp trong đây
//         return true;
//     } catch (error) {
//         console.error(error.message);
//         // handle error
//     }
// }
//
// console.log(_test({
//     value1: '1',
//     value2: [1, 2, 3],
//     value3: {},
//     value4: () => {},
//     value5: () => {}
// }))

/**
 * @description Sử dụng để kiểm tra kiểu dữ liệu đầu vào các function là một phương dùng tạm để kiểm tra kiểu dữ liệu vào có đúng quy định không ( sau này sẽ nâng câp sử dụng 'Joi', 'Yup', 'Validator.js', 'is.js')
 * @param data
 * @param typeOfData
 */

export default function isInstanceof(data, typeOfData) {
    for (let field in typeOfData) {
        const [type, required] = typeOfData[field];
        if (required && !data.hasOwnProperty(field)) {
            throw new Error(`Trường ${field} là bắt buộc (Missing required field) `);
        }
        if (data.hasOwnProperty(field)) {
            const fieldValue = data[field];
            switch (type) {
                case'array':
                    if (!(fieldValue instanceof Array)) {
                        throw new Error(`Field ${field} must be an ${typeOfData[field][0]} (Trường ${field} phải là một ${typeOfData[field][0]})`);
                    }
                    break;

                case 'object':
                    if (!(fieldValue instanceof Object)) {
                        throw new Error(`Field ${field} must be an ${typeOfData[field][0]} (Trường ${field} phải là một ${typeOfData[field][0]})`);
                    }
                    break;
                default:
                    if (typeof fieldValue !== type) {
                        throw new Error(`Field ${field} must be an ${typeOfData[field][0]} (Trường ${field} phải là một ${typeOfData[field][0]})`);
                    }
                    break;

            }
        }
    }
};
