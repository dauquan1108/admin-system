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
import { LoadingOutlined } from '@ant-design/icons';

// Component
import useLogin from "./useLogin";
import InputLogin from "./InputLogin";
import { redirect } from 'react-router-dom';

// Style
import styles from './Styles/index.module.scss';

// Img
import Logo from '../../Img/login.png';

function Login() {
	const {
		messageError,
		refInputEmail,
		refInputPassword,
		onFocusInput,
		checkAllInput,
		TYPE_EMAIL,
		TYPE_PASSWORD,
		onLogin,
	} = useLogin();

	const [loading, setLoading] = React.useState(false);

	const _onLogin = () => {
		const isError = checkAllInput();
		if (isError) {
			onLogin();
			// setLoading(true);
			// alert("Đăng nhập thành công.");
		}
	};

    return(
        <div className={styles.wrapLogin}>
	        <div className={styles.contentLogin}>
		        <div className={styles.contentLoginLeft}>
					<img className={styles.imgLogin} alt='login' src={Logo} />
		        </div>
		        <div className={styles.contentLoginRight}>
					<span className={styles.title}>Truelove Pos</span>
			        <span className={styles.titleText}>Hãy đăng nhập để bắt đầu nhé</span>

			        <div className={styles.wrapItem}>
				        <span className={styles.text}>Email<span className={styles.prioritizeText}>*</span></span>
				        <InputLogin
					        type={TYPE_EMAIL}
					        ref={refInputEmail}
					        onFocusInput={onFocusInput}
					        messageError={messageError}
					        placeholder='Vui lòng nhập email'
				        />
			        </div>
			        <div className={styles.wrapItem}>
				        <span className={styles.text}>Mật khẩu<span className={styles.prioritizeText}>*</span></span>
				        <InputLogin
					        type={TYPE_PASSWORD}
					        ref={refInputPassword}
					        onFocusInput={onFocusInput}
					        messageError={messageError}
					        placeholder='Vui lòng nhập mật khẩu'
				        />
			        </div>
			        <button className={styles.btnLogin} onClick={_onLogin} disabled={loading}>
				        {loading ? <LoadingOutlined /> : 'Đăng nhập' }
			        </button>
		        </div>
	        </div>
        </div>
    );
}

export default Login;