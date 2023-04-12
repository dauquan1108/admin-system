/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 2/19/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import classNames from "classnames";

// Base
import { typeName as flagInput } from "../../Share";

// Style
import styles from './Styles/index.module.scss';

function InputCustom(props) {
	const {
		title,
		typeName,
		className,
		obligatory,
		placeholder,
		messageError,
		onfocusInput,
		onChangeInput,
		isClearData,
	} = props;

	const { SUCCESS } = flagInput;

	const [valueAutoComplete, setValueAutoComplete] = React.useState(''); // Khởi tạo giá trị ban đầu

	React.useLayoutEffect(() => {
		setValueAutoComplete('');
	}, [isClearData]);

	const onChange = (e) => {
		const { value }= e.target;
		setValueAutoComplete(value);
	};

	const onblurAutoComplete = () => {
		// Set data cho item
		onChangeInput && onChangeInput(valueAutoComplete, typeName);
	};

	const messageErrorText = messageError && messageError[typeName];
	const showError = messageErrorText && messageErrorText !== SUCCESS;

	const onfocusAutoComplete = () => {
		showError && onfocusInput(typeName);
	};

    return(
        <div className={classNames(styles['input-wrap'], className)}>
			{title && <span className={styles['input-title']}>
				{title}{!obligatory && ':'}
				{obligatory && <span className={styles['input-obligatory']}>*</span>}
			</span>
			}
	        <Input
				allowClear
				size="large"
				value={valueAutoComplete}
				placeholder={placeholder}
				status={showError && 'error'}

				onChange={onChange}
				onBlur={onblurAutoComplete}
		        onFocus={onfocusAutoComplete}
	        />
	        {showError && <span className={styles['input-text-error']}>{messageErrorText}</span>}
        </div>
    );
}

InputCustom.propTypes = {
	title: PropTypes.string,
	typeName: PropTypes.string,
	className: PropTypes.string,
	placeholder: PropTypes.string,
	obligatory: PropTypes.bool,
	isClearData: PropTypes.bool,
	onChangeInput: PropTypes.func,
	onfocusInput: PropTypes.func,
	messageError: PropTypes.object,
};

InputCustom.defaultProps = {
	obligatory: false,
	isClearData: false,
	messageError: {},
	onChangeInput: () => null,
	onfocusInput: () => null,
};

export default React.memo(InputCustom);
