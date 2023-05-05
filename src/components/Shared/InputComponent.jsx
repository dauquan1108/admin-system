/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 2/24/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import { Input } from "antd";
import PropTypes from 'prop-types';

// Base
import { isCheckNumber } from "../Base/Regex/validationNumber";

// Style
import styles from "./Styles/index.module.scss";

function InputComponent(props) {
	const {
		typeName,
		maxLength,
		placeholder,
		setDisabled,
		onChangeInput
	} = props;

	const [checkError, setCheckError] = React.useState('');

	const refValueInput = React.useRef(null);

	const onFocusInput = () => {
		setCheckError('');
	};

	const onChange = (e) => {
		const { value } = e.target;
		const countValueNew = value.length;
		if (countValueNew === maxLength) {
			setDisabled && setDisabled(true);
			setCheckError(`Dữ liệu đã vượt quá số lượng cho phép nhập là: ${maxLength}`);
		}
		if (checkError) {
			onFocusInput();
		}
	};

	const onBlurInput = () => {
		const valueNew = refValueInput.current.input.value;
		if (!valueNew) {
			setDisabled && setDisabled(true);
			setCheckError('Dữ liệu không được để trống, vui lòng nhập.')
		} else if(!isCheckNumber(valueNew)) {
			setDisabled && setDisabled(true);
			setCheckError('Dữ liệu nhập vào không được phép chứa "Text".')
		} else  {
			onChangeInput(valueNew, typeName);
		}
	};

	return(
    	<React.Fragment>
		    <Input
			    showCount
			    size="large"
			    ref={refValueInput}
			    onChange={onChange}
			    onBlur={onBlurInput}
			    maxLength={maxLength}
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

InputComponent.propTypes = {
	data: PropTypes.object,
	typeName: PropTypes.string,
	placeholder: PropTypes.string,
	maxLength: PropTypes.number,
	setDisabled: PropTypes.func,
	onChangeInputCustom: PropTypes.func,
};

InputComponent.defaultProps = {
	data: {},
	placeholder: 'Vui lòng nhập',
};

export default React.memo(InputComponent);
