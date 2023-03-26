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
 * validateEmail: kiểm tra xem có phải là định dạng email không
 * @param email
 * @returns {boolean}
 */

const validateEmail = (email = '') => {
    if (typeof email === 'string' && email.length > 0) {
        // eslint-disable-next-line no-unused-vars,no-useless-escape
        const re = REGEX_BASE.REGEX_EMAIL;
        return re.test(String(email).toLowerCase());
    }
    return true;
}

export { validateEmail };
