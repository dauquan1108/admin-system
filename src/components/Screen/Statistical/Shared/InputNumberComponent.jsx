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
import PropTypes from 'prop-types';
import { InputNumber } from "antd";

// Style
import styles from "./Styles/index.module.scss";

// Shared
import { typeName as typeNames } from "./Synthetic";

function InputNumberComponent(props) {
	const {
		data,
		style,
		typeName,
		placeholder,
		setDisabled,
		onChangeInput,
	} = props;

	const [checkError, setCheckError] = React.useState('');

	const refValueInputNumber = React.useRef(null);

	const onChangeInputNumber = (values) => {
		refValueInputNumber.current = values;
		if (checkError) {
			setCheckError('');
		}
	};

	const onFocusInputNumber = () =>  {
		setCheckError('');
	};

	const onBlurInput = () => {
		const valueInputNumber = refValueInputNumber.current;
		const { money, limitCard } = data;
		if (!valueInputNumber) {
			setDisabled && setDisabled(true);
			setCheckError('Dữ liệu không được để trống, vui lòng nhập.');
		} else if (typeName === typeNames.limitCard && money > valueInputNumber) {
			setCheckError('Số tiền hạn mức phải lớn hơn số tiền làm cho khách.');
		} else if (typeName === typeNames.money && limitCard < valueInputNumber) {
			setCheckError('Số tiền hạn mức không được phép bé hơn số tiền làm cho khách.');
		} else  {
			onChangeInput(valueInputNumber, typeName);
		}
	};

    return(
	    <React.Fragment>
		    <InputNumber
			    size="large"
			    onBlur={onBlurInput}
			    placeholder={placeholder}
			    onFocus={onFocusInputNumber}
			    onChange={onChangeInputNumber}
			    status={checkError &&  "error"}
			    style={{...style, width: '100%'}}
			    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
			    formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
		    />
		    {
			    checkError && <span className={styles.textError}>{checkError}</span>
		    }
	    </React.Fragment>
    );
}

InputNumberComponent.propTypes = {
	data: PropTypes.object,
	style: PropTypes.object,
	typeName: PropTypes.string,
	placeholder: PropTypes.string,
	setDisabled: PropTypes.func,
	onChangeInput: PropTypes.func,
};

InputNumberComponent.defaultProps = {
	data: {},
	style: {},
	placeholder: 'Vui lòng nhập',
};

export default React.memo(InputNumberComponent);
