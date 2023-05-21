/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 9/13/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

const flagInput = {
	// From Đăng nhập, Đăng ký, Update mật khẩu.
	TYPE_CONFIRM_PASSWORD: 'ConfirmPassword',
	TYPE_PASSWORD: 'Password',
    TYPE_EMAIL: 'Email',
    SUCCESS: 'Success', // Thành công

	// From thông tin cá nhân
	TYPE_PHONE: 'Phone', // Số điện thoại
	TYPE_FULL_NAME: 'FullName', // Họ và tên
	TYPE_DATE_BIRTH: 'DateBirth', // ngày sinh
	TYPE_EXTEND: 'Extend', // ngày sinh
	TYPE_SEX: 'Sex', // Giới tính
};

export { flagInput };
