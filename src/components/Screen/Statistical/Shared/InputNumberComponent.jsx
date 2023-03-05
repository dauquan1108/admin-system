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

function InputNumberComponent(props) {
	const {
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
		if (!valueInputNumber) {
			setDisabled && setDisabled(true);
			setCheckError('Dữ liệu không được để trống, vui lòng nhập.')
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
	style: PropTypes.object,
	typeName: PropTypes.string,
	placeholder: PropTypes.string,
	setDisabled: PropTypes.func,
	onChangeInput: PropTypes.func,
};

InputNumberComponent.defaultProps = {
	style: {},
	placeholder: 'Vui lòng nhập',
};

export default React.memo(InputNumberComponent);
