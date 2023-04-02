/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 2/23/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import { Input } from "antd";
import PropTypes from 'prop-types';

// Style
import styles from "./Styles/index.module.scss";

function InputComponentAccountName(props) {
	const {
		data,
		typeName,
		maxLength,
		placeholder,
		setDisabled,
		onChangeInput
	} = props;

	const [valueInput, setValueInput] = React.useState('');
	const [checkError, setCheckError] = React.useState('');

	React.useLayoutEffect(() => {
		setValueInput(data[typeName])
	}, [data[typeName]]);

	const onFocusInput = () => {
		setCheckError('');
	};

	const onChange = (e) => {
		const { value } = e.target;
		const valueNew = value.toUpperCase();
		setValueInput(valueNew);
		const countValueNew = valueNew.length;
		// if (countValueNew > maxLength) {
		// 	setDisabled && setDisabled(true);
		// 	setCheckError(`Dữ liệu đã vượt quá số lượng cho phép nhập là: ${maxLength}`);
		// }
		// if (checkError) {
		// 	onFocusInput();
		// }
	};

	const onBlurInput = () => {
		// if (!valueInput) {
		// 	setDisabled && setDisabled(true);
		// 	setCheckError('Dữ liệu không được để trống, vui lòng nhập.')
		// } else  {
		// 	onChangeInput(valueInput, typeName);
		// }
	};

    return(
        <React.Fragment>
	        <Input
		        // showCount
		        size="large"
		        value={valueInput}
		        onChange={onChange}
		        onBlur={onBlurInput}
		        // maxLength={maxLength}
		        onFocus={onFocusInput}
		        placeholder={placeholder}
		        status={checkError && "error"}
	        />
	        {
	        	checkError && <span className={styles.textError}>{checkError}</span>
	        }
        </React.Fragment>
    );
}

InputComponentAccountName.propTypes = {
	data: PropTypes.object,
	maxLength: PropTypes.number,
	typeName: PropTypes.string,
	placeholder: PropTypes.string,
	setDisabled: PropTypes.func,
	onChangeInput: PropTypes.func,
};

InputComponentAccountName.defaultProps = {
	placeholder: 'Vui lòng nhập',
	data: {},
};

export default React.memo(InputComponentAccountName);
