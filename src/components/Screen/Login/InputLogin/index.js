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
import { flagInput } from "../../../Base/Regex/FlagInput";

// Style
import styles from './Styles/index.module.scss';

// Img
import EyeView from '../../../Img/eyeView.png';
import EyeHide from '../../../Img/eyeHide.png';

const InputLogin = React.forwardRef((props, ref) => {
	const { className, type, onFocusInput, messageError, placeholder } = props;

	const { TYPE_PASSWORD, SUCCESS } = flagInput;

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

	const handleFocus = () => {
		onFocusInput(type);
	};

	const onClickIconEye = () => {
		setIsView(!isView);
	};

    return(
    	<React.Fragment>
		    {
			    type === TYPE_PASSWORD ? (
				    <div className={ClassNames(styles.wrapPasswordInputLogin, className)}>
					    <div>
						    <input
							    ref={refInput}
							    type={isView ? type : 'text'}
							    onFocus={handleFocus}
							    placeholder={placeholder}
							    className={ClassNames(styles.input, showError() && styles.inputError)}
						    />
						    <img alt='icon Eye' src={isView ? EyeView : EyeHide} className={styles.iconEye} onClick={onClickIconEye} />
					    </div>
					    {
						    showError() && <span className={styles.textError}>{showError()}</span>
					    }
				    </div>
			    ) : (
				    <div className={ClassNames(styles.wrapTextInputLogin, className)}>
					    <input
						    type={type}
						    ref={refInput}
						    onFocus={handleFocus}
						    placeholder={placeholder}
						    className={ClassNames(styles.input, showError() && styles.inputError)}
					    />
					    {
						    showError() && <span className={styles.textError}>{showError()}</span>
					    }
				    </div>
			    )
		    }
	    </React.Fragment>
    );
})

InputLogin.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string,
	placeholder: PropTypes.string,
	onFocusInput: PropTypes.func,
	messageError: PropTypes.object,
};

InputLogin.defaultProps = {
	type: 'text',
	messageError: {},
	onFocusInput: () => null,
};

export default InputLogin;
