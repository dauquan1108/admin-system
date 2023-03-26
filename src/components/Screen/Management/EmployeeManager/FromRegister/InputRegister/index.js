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
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

// Base
import { flagInput } from "../../../../../Base/Regex/FlagInput";

// Style
import styles from './Styles/index.module.scss';

// Img
import EyeView from '../../../../../Img/eyeView.png';
import EyeHide from '../../../../../Img/eyeHide.png';

const InputRegister = React.forwardRef((props, ref) => {
	const { className, type, onBlurInput, onFocusInput, messageError, placeholder } = props;

	const { TYPE_PASSWORD, SUCCESS, TYPE_CONFIRM_PASSWORD } = flagInput;

	const [isView, setIsView] = React.useState(true);

	const refInput =  React.useRef(null);
	React.useImperativeHandle(ref, () => refInput.current);

	const showError = () => {
		let showTextError;
		const errorText = messageError && messageError[type];
		if (errorText === SUCCESS) {
			showTextError = ''
		} else {
			showTextError = errorText;
		}
		return showTextError;
	};

	const handleBlur = (e) => {
		onBlurInput(type, e);
	};

	const handleFocus = () => {
		onFocusInput(type);
	};

	const onClickIconEye = () => {
		setIsView(!isView);
	};

	const typePass = type === TYPE_CONFIRM_PASSWORD ? TYPE_PASSWORD : type;

    return(
    	<React.Fragment>
		    {
			    (type === TYPE_PASSWORD || type === TYPE_CONFIRM_PASSWORD) ? (
				    <div className={ClassNames(styles['form-register-wrap'], className)}>
					    <div className={styles['form-register-input']}>
						    <input
							    ref={refInput}
							    type={isView ? typePass : 'text'}
							    onBlur={handleBlur}
							    onFocus={handleFocus}
							    placeholder={placeholder}
							    className={ClassNames(styles['form-register-input-pass'], showError() && styles['form-register-input-error'])}
						    />
						    <img alt='icon Eye' src={isView ? EyeView : EyeHide} className={styles.iconEye} onClick={onClickIconEye} />
					    </div>
					    {
						    showError() && <span className={styles['form-register-text-error']}>{showError()}</span>
					    }
				    </div>
			    ) : (
				    <div className={ClassNames(styles['form-register-input-text-wrap'], className)}>
					    <input
						    type={type}
						    ref={refInput}
						    onBlur={handleBlur}
						    onFocus={handleFocus}
						    placeholder={placeholder}
						    className={ClassNames(styles['form-register-input'], showError() && styles['form-register-input-error'])}
					    />
					    {
						    showError() && <span className={styles['form-register-text-error']}>{showError()}</span>
					    }
				    </div>
			    )
		    }
	    </React.Fragment>
    );
})

InputRegister.propTypes = {
	messageError: PropTypes.object,
	placeholder: PropTypes.string,
	className: PropTypes.string,
	type: PropTypes.string,
	onBlurInput: PropTypes.func,
	onFocusInput: PropTypes.func,
};

InputRegister.defaultProps = {
	type: 'text'
};

export default InputRegister;
