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
import classNames from 'classnames';

// Base
import { typeName as flagInput } from "../../Share";

// Style
import styles from './Styles/index.module.scss';

const { TextArea } = Input;

function InputTextArea(props) {
	const {
		title,
		typeName,
		maxLength,
		className,
		obligatory,
		onChangeInput,
		messageError,
		...otherProps
	} = props;
	const { SUCCESS } = flagInput;

	const [valueTextArea, setValueTextArea] = React.useState('');

	const onChange = (e) => {
		const { value } = e.target;
		setValueTextArea(value);
	};

	const onfocusTextArea = () => {

	};

	const onBlurInput = () => {
		onChangeInput && onChangeInput(valueTextArea, typeName);
	};

	const messageErrorText = messageError && messageError[typeName];
	const showError = messageErrorText && messageErrorText !== SUCCESS;

	return(
		<div className={classNames(styles['text-Area-wrap'], className)}>
			{title && <span className={styles['text-Area-title']}>{title}{obligatory && <span className={styles['text-Area-obligatory']}>*</span>}</span>}
			<TextArea
				rows={4}
				showCount
				onChange={onChange}
				onBlur={onBlurInput}
				maxLength={maxLength}
				onFocus={onfocusTextArea}
				status={showError && "error"}
				{...otherProps}
			/>
			{
				showError && <span className={styles['text-Area-text-error']}>{messageErrorText}</span>
			}
		</div>
	);
}

InputTextArea.propTypes = {
	style: PropTypes.object,
	messageError: PropTypes.object,
	typeName: PropTypes.string,
	className: PropTypes.string,
	maxLength: PropTypes.number,
	setDisabled: PropTypes.func,
	onChangeInput: PropTypes.func,
	title: PropTypes.string,
	obligatory: PropTypes.bool,
};

InputTextArea.defaultProps = {
	style: {},
	messageError: {},
	obligatory: false,
};

export default React.memo(InputTextArea);
