/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 2/26/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import { Input } from "antd";
import PropTypes from 'prop-types';

// Style
import styles from "./Styles/index.module.scss";

const { TextArea } = Input;

function InputTextAreaComponent(props) {
	const {
		style,
		title,
		typeName,
		maxLength,
		obligatory,
		onChangeInput,
		...otherProps
	} = props;

	const [valueTextArea, setValueTextArea] = React.useState('');
	const [checkError, setCheckError] = React.useState('');

	const onChange = (e) => {
		const { value } = e.target;
		setValueTextArea(value);
	};

	const onfocusTextArea = () => {
		setCheckError('');
	};

	const onBlurInput = () => {
		onChangeInput(valueTextArea, typeName);
	};

    return(
		<div className={styles['text-Area-wrap']}>
			{title && <span className={styles['text-Area-title']}>{title}{obligatory && <span className={styles['text-Area-obligatory']}>*</span>}</span>}
	        <TextArea
		        rows={4}
		        showCount
		        onChange={onChange}
		        onBlur={onBlurInput}
		        style={{ ...style }}
		        maxLength={maxLength}
		        onFocus={onfocusTextArea}
		        status={checkError && "error"}
		        {...otherProps}
	        />
	        {
		        checkError && <span className={styles['text-Area-text-error']}>{checkError}</span>
	        }
		</div>
    );
}

InputTextAreaComponent.propTypes = {
	style: PropTypes.object,
	typeName: PropTypes.string,
	maxLength: PropTypes.number,
	setDisabled: PropTypes.func,
	onChangeInput: PropTypes.func,

	title: PropTypes.string,
	obligatory: PropTypes.bool,
};

InputTextAreaComponent.defaultProps = {
	style: {},
	obligatory: false,
};

export default React.memo(InputTextAreaComponent);
