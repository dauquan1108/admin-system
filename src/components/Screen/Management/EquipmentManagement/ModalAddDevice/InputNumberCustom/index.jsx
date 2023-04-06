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
import classNames from "classnames";

// Base
import { flagInput } from "../../../../../Base/Regex/FlagInput";

// Style
import styles from "./Styles/index.module.scss";

function InputNumberCustom(props) {
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
		...otherProps
	} = props;

	const { SUCCESS } = flagInput;

	const [valueInputNumber, setValueInputNumber] = React.useState('');

	React.useLayoutEffect(() => {
		setValueInputNumber('');
	}, [isClearData]);

	const onChangeInputNumber = (values) => {
		setValueInputNumber(values);
	};

	const messageErrorText = messageError && messageError[typeName];
	const showError = messageErrorText && messageErrorText !== SUCCESS;

	const onFocusInputNumber = () =>  {
		showError && onfocusInput(typeName);
	};

	const onBlurInput = () => {
		// Set data cho item
		onChangeInput(valueInputNumber, typeName);
	};

    return(
	    <div className={classNames(styles['input-number-wrap'], className)}>
			{title && <span className={styles['input-number-title']}>
				{title}{!obligatory && ':'}
				{obligatory && <span className={styles['input-number-obligatory']}>*</span>}
			</span>
			}
		    <InputNumber
			    size="large"
				style={{ width: '100%' }}
			    placeholder={placeholder}

				value={valueInputNumber}
				onBlur={onBlurInput}
				onFocus={onFocusInputNumber}
			    onChange={onChangeInputNumber}
			    status={showError &&  "error"}
			    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
			    formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
				{...otherProps}
		    />
		    {
			    showError && <span className={styles['input-number-text-error']}>{messageErrorText}</span>
		    }
	    </div>
    );
}

InputNumberCustom.propTypes = {
	typeName: PropTypes.string,
	placeholder: PropTypes.string,
	onfocusInput: PropTypes.func,
	onChangeInput: PropTypes.func,
	messageError: PropTypes.object,
	obligatory: PropTypes.bool,
	title: PropTypes.string,
	className: PropTypes.string,
};

InputNumberCustom.defaultProps = {
	placeholder: 'Vui lòng nhập',
	messageError: {},
	obligatory: false,
	onfocusInput: () => null,
	onChangeInput: () => null,
};

export default React.memo(InputNumberCustom);
