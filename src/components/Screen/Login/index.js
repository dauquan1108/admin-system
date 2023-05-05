/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 1/17/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';

// Component
import useLogin from "./useLogin";
import InputLogin from "./InputLogin";

// Style
import styles from './Styles/index.module.scss';

// Img
import Logo from '../../Img/login.png';

function Login() {
	const {
		messageError,
		setMessageError,
		refInputEmail,
		refInputPassword,
		onBlurInput,
		onFocusInput,
		checkAllInput,
		TYPE_EMAIL,
		TYPE_PASSWORD,
		SUCCESS,
	} = useLogin();

	const { Email, Password } = messageError;

	const onLogin = () => {
		setMessageError(checkAllInput());
		if (Email === SUCCESS && Password === SUCCESS) {
			alert("Đăng nhập thành công.");
		}
	};

    return(
        <div className={styles.wrapLogin}>
	        <div className={styles.contentLogin}>
		        <div className={styles.contentLoginLeft}>
					<img className={styles.imgLogin} alt='login' src={Logo} />
		        </div>
		        <div className={styles.contentLoginRight}>
					<span className={styles.title}>Đăng nhập</span>
			        <span className={styles.text}>Email</span>
			        <InputLogin
				        type={TYPE_EMAIL}
				        ref={refInputEmail}
				        onBlurInput={onBlurInput}
				        onFocusInput={onFocusInput}
				        messageError={messageError}
			        />
			        <span className={styles.text}>Mật khẩu</span>
			        <InputLogin
				        type={TYPE_PASSWORD}
				        ref={refInputPassword}
				        onBlurInput={onBlurInput}
				        onFocusInput={onFocusInput}
				        placeholder={TYPE_PASSWORD}
				        messageError={messageError}
			        />
			        <button className={styles.btnLogin}  onClick={onLogin}>Đăng nhập</button>
		        </div>
	        </div>
        </div>
    );
}

export default Login;
