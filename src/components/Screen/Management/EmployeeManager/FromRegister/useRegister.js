/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 2/12/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from "react";

// Base
import { flagInput } from "../../../../Base/Regex/FlagInput";
import { validateEmail } from "../../../../Base/Regex/validationEmail";

const messageErrorPassDissimilarity = 'Mật khẩu và mật khẩu nhập lại không trùng khớp!';

function useRegister() {
    const { TYPE_EMAIL, TYPE_PASSWORD, TYPE_CONFIRM_PASSWORD, SUCCESS } = flagInput;

    const [messageError, setMessageError] = React.useState({
	    Email: '', Password: '', ConfirmPassword: ''
    });

    const refInputEmail = React.useRef(null);
    const refInputPassword = React.useRef(null);
	const refInputConfirmPassword = React.useRef(null);

    const inputValue = (name) => {
        return name.current.value?.trim();
    };

    const checkValidateEmail = () => {
        if (inputValue(refInputEmail) === '') {
            return 'Email không được để trống.';
        }
        if (!validateEmail(inputValue(refInputEmail))) {
            return 'Vui lòng kiểm tra lại Email.';
        }
        return SUCCESS;
    };

	const checkValidatePassword = () => {
		const valuePassword = inputValue(refInputPassword);
		const valueConfirmPassword = inputValue(refInputConfirmPassword);

		if (valuePassword === '') {
			return 'Mật khẩu không được để trống.';
		}

		if (valuePassword.length < 6) {
			return 'Mật khẩu phải có ít nhất 6 ký tự.';
		}

		if (valuePassword && valueConfirmPassword !== '' && valuePassword !== valueConfirmPassword) {
			return messageErrorPassDissimilarity;
		}

		return SUCCESS;
    };

    const checkValidateConfirmPassword = () => {
	    const valuePassword = inputValue(refInputPassword);
	    const valueConfirmPassword = inputValue(refInputConfirmPassword);

        if (valueConfirmPassword === '') {
            return 'Mật khẩu nhập lại không được để trống.';
        }

        if (valuePassword !== valueConfirmPassword) {
	        return messageErrorPassDissimilarity;
        }
        return SUCCESS;
    };

    const onBlurInput = (type) => {
        setMessageError({ ...messageError, [type]: checkItemInput(type) });
    };

	const onClearAllMessageError= () => {
		setMessageError({ Email: '', Password: '', ConfirmPassword: '' });
	};

    const onFocusInput = (type) => {
    	const { Password, ConfirmPassword} = messageError;
    	if ((type === TYPE_PASSWORD || type === TYPE_CONFIRM_PASSWORD) && (Password === messageErrorPassDissimilarity && ConfirmPassword === messageErrorPassDissimilarity )) {
		    setMessageError({ ...messageError, Password: '', ConfirmPassword: '' });
	    } else {
		    setMessageError({ ...messageError, [type]: '' });
	    }
    };

    const checkItemInput = (type) => {
        switch (type) {
            case TYPE_EMAIL:
                return checkValidateEmail();
            case TYPE_PASSWORD:
	            return checkValidatePassword();
            case TYPE_CONFIRM_PASSWORD:
                return checkValidateConfirmPassword();
            default:
                return null;
        }
    };

    const checkAllInput = () => ({
	    Email: checkValidateEmail(),
        Password: checkValidatePassword(),
	    ConfirmPassword: checkValidateConfirmPassword(),
    });

    return({
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
    });
}

export default useRegister;
