/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 3/26/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
// import PropTypes from 'prop-types';

// Component
import useUpdatePassword from "./useUpdatePassword";
import InputUpdatePassword from "./InputUpdatePassword";

// Style
import styles from "./Styles/index.module.scss";

function UpdatePassword(props) {
	const {
		messageError,
		setMessageError,
		refInputEmail,
		refInputPassword,
		refInputConfirmPassword,
		onBlurInput,
		onFocusInput,
		checkAllInput,
		TYPE_EMAIL,
		TYPE_PASSWORD,
		TYPE_CONFIRM_PASSWORD,
		SUCCESS,
		inputValue,
		onClearAllMessageError,
	} = useUpdatePassword();

	const onUpdatePassword = () => {
		setMessageError(checkAllInput());
		const { Email, Password, ConfirmPassword } = messageError
		if (Email === SUCCESS && Password === SUCCESS && ConfirmPassword === SUCCESS) {
			alert('Call API để update mật khẩu')
		}
	};

    return(
        <div className={styles['form-update-password']}>
	        <div className={styles['form-update-password-wrap']}>
		        <span className={styles['form-update-password-text']}>Email</span>
		        <InputUpdatePassword
			        type={TYPE_EMAIL}
			        ref={refInputEmail}
			        onBlurInput={onBlurInput}
			        onFocusInput={onFocusInput}
			        messageError={messageError}
			        placeholder='Vui lòng nhập email'
		        />
		        <span className={styles['form-update-password-text']}>Mật khẩu</span>
		        <InputUpdatePassword
			        type={TYPE_PASSWORD}
			        ref={refInputPassword}
			        onBlurInput={onBlurInput}
			        onFocusInput={onFocusInput}
			        messageError={messageError}
			        placeholder='Vui lòng nhập mật khẩu'
		        />
		        <span className={styles['form-update-password-text']}>Nhập lại mật khẩu</span>
		        <InputUpdatePassword
			        type={TYPE_CONFIRM_PASSWORD}
			        ref={refInputConfirmPassword}
			        onBlurInput={onBlurInput}
			        onFocusInput={onFocusInput}
			        messageError={messageError}
			        placeholder='Xác nhận lại mật khẩu đã nhập'
		        />
		        <button className={styles['form-update-password-btn']} onClick={onUpdatePassword}>Cập nhật mật khẩu</button>
	        </div>
        </div>
    );
}

// UpdatePassword.propTypes = {};
//
// UpdatePassword.defaultProps = {};

export default UpdatePassword;
