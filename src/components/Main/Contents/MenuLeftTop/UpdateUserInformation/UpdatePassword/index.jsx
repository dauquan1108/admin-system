/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 3/20/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import axios from "axios";
import { message } from "antd";
// import PropTypes from 'prop-types';

// Component
import useRegister from "./useRegister";
import InputRegister from "./InputRegister";

// Base
import ModalBase from "../../../../Base/Modal";

// Style
import styles from "./Styles/index.module.scss";

function FromRegister(props) {
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
	} = useRegister();

	const { open, onCancelModal } = props;

	const { Email, Password, ConfirmPassword } = messageError

	const onCancel = () => {
		onCloneModal();
	};

	const onCloneModal = () => {
		onClearAllMessageError();
		onCancelModal();
	};

	const onSuccess = () => {
		message.success('Thêm mới tài khoản thành công.',5 );
	};

	// const onError = () => {
	// 	message.error('Email tạo tài khoản đã tồn tại. Thêm mới tài khoản không thành công.',5 );
	// };

	const onFinally = () => {
		message.error('Tạo tài khoản mới không thành công vui lòng thử lại sau.',5 );
	};

	const onLogin = () => {
		setMessageError(checkAllInput());
		if (Email === SUCCESS && Password === SUCCESS && ConfirmPassword === SUCCESS) {
			onCloneModal();
			const _data = {
				email: inputValue(refInputEmail),
				password: inputValue(refInputPassword),
			}

			axios({
				method: "post",
				url: 'https://backend-truelove.vercel.app/api/user/sigup',
				data: _data,
			}).then((response) => {
				if (response.status === 201) {
					onSuccess();
				}
			}).catch((error) => {
				onFinally();
				throw new Error("Thêm tài khoản mới thất bại ======== [[ Error ]] ==========>:", error);
			});
		}
	};

    return(
	    <ModalBase
		    centered
		    width={450}
		    open={open}
		    destroyOnClose
		    onCancel={onCancel}
		    maskClosable={false}
		    title="Đăng ký mới tài khoản"
		    footer={null}
	    >
		    <div className={styles['from-register-modal-wrap-content']}>
			    <span className={styles['from-register-modal-text']}>Email</span>
			    <InputRegister
				    type={TYPE_EMAIL}
				    ref={refInputEmail}
				    onBlurInput={onBlurInput}
				    onFocusInput={onFocusInput}
				    messageError={messageError}
				    placeholder='Vui lòng nhập email'
			    />
			    <span className={styles['from-register-modal-text']}>Mật khẩu</span>
			    <InputRegister
				    type={TYPE_PASSWORD}
				    ref={refInputPassword}
				    onBlurInput={onBlurInput}
				    onFocusInput={onFocusInput}
				    messageError={messageError}
				    placeholder='Vui lòng nhập mật khẩu'
			    />
			    <span className={styles['from-register-modal-text']}>Nhập lại mật khẩu</span>
			    <InputRegister
				    type={TYPE_CONFIRM_PASSWORD}
				    ref={refInputConfirmPassword}
				    onBlurInput={onBlurInput}
				    onFocusInput={onFocusInput}
				    messageError={messageError}
				    placeholder='Xác nhận lại mật khẩu đã nhập'
			    />
			    <button className={styles['from-register-modal-btn']}  onClick={onLogin}>Đăng ký</button>
		    </div>
	    </ModalBase>
    );
}

// FromRegister.propTypes = {};

// FromRegister.defaultProps = {};

export default FromRegister;
