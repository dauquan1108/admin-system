/**
 * Copyright 2016-present, Bkav, Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author monglv@bkav.com on 18/08/2021
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import REGEX_BASE from './regexBase';

/**
 * validationName: Chỉ cho phép tên gồm các ký tự tiếng Việt và các chữ số
 * @param value {string} dữ liệu người dùng đưa vào để check
 * @returns {boolean}
 */
const validationName = (value = '') => {
    if (typeof value === 'string' && value.length > 0) {
        // const regexLatin = /\p{Script=Latin}+/u;
        // Chỉ cho phép tên gồm các ký tự tiếng Việt và các chữ số
        const regexName = REGEX_BASE.REGEX_NAME;
        return regexName.test(value);
    }
    return true;
};

export default validationName;
