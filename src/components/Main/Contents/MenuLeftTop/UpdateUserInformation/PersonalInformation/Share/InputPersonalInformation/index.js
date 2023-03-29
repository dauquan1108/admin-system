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
import { Input } from 'antd';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

// Base
import { flagInput } from "../../../../../../../Base/Regex/FlagInput";

// Style
import styles from './Styles/index.module.scss';

const { TextArea } = Input;

const InputPersonalInformation = React.forwardRef((props, ref) => {
	const { className, type, onBlurInput, onFocusInput, messageError, title, required, textArea, placeholder } = props;

	const { TYPE_PASSWORD, SUCCESS } = flagInput;

	const refInput =  React.useRef(null);
	React.useImperativeHandle(ref, () => refInput.current);

	const showError = () => {
		// let showTextError;
		// const errorText = messageError && messageError[type];
		// if (errorText === SUCCESS) {
		// 	showTextError = ''
		// } else {
		// 	showTextError = errorText;
		// }
		// return showTextError;
	};

	const handleBlur = (e) => {
		// onBlurInput(type, e);
	};

	const handleFocus = () => {
		// onFocusInput(type);
	};

    return (
    	<React.Fragment>
		    {
			    textArea ? (
				    <div className={ClassNames(styles['wrap-input-personal'], className)}>
					    { title && <span className={styles['input-personal-title']}>{title}</span> }
					    <TextArea
						    showCount
						    maxLength={200}
						    style={{
							    height: 100,
							    resize: 'none',
						    }}
						    type={type}
						    ref={refInput}
						    onBlur={handleBlur}
						    onFocus={handleFocus}
						    placeholder={placeholder}
					    />
				    </div>
			    ) : (
				    <div className={ClassNames(styles['wrap-input-personal'], className)}>
					    {
						    title &&
						    <span className={styles['input-personal-title']}>
					            {title}
							    {
								    required && <span className={styles['input-personal-title-required']}> *</span>
							    }
				            </span>
					    }
					    <Input
						    size='large'
						    type={type}
						    ref={refInput}
						    onBlur={handleBlur}
						    onFocus={handleFocus}
						    placeholder={placeholder}
						    className={ClassNames(styles['input-personal'], showError() && styles['input-personal-error'])}
					    />
					    {
						    showError() && <span className={styles['input-personal-text-error']}>{showError()}</span>
					    }
				    </div>
		        )
			}
	    </React.Fragment>
    );
});

InputPersonalInformation.propTypes = {
	required: PropTypes.bool,
	textArea: PropTypes.bool,
	placeholder: PropTypes.string,
	messageError: PropTypes.string,
	className: PropTypes.string,
	title: PropTypes.string,
	type: PropTypes.string,
	onBlurInput: PropTypes.func,
	onFocusInput: PropTypes.func,
};

InputPersonalInformation.defaultProps = {
	type: 'text',
	required: false,
	textArea: false,
	onBlurInput: () => null,
	onFocusInput: () => null,
};

export default InputPersonalInformation;
