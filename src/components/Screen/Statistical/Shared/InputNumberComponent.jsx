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

// Style
import styles from "./Styles/index.module.scss";

function InputNumberComponent(props) {
	const {
		title,
		typeName,
		className,
		obligatory,
		placeholder,
		setDisabled,
		onChangeInput,
		dataSelectUser,
		...otherProps
	} = props;

	const [valueInputNumber, setValueInputNumber] = React.useState('');

	const [checkError, setCheckError] = React.useState('');

	React.useLayoutEffect(() => {
		const value = dataSelectUser && dataSelectUser[typeName];
		if (value) {
			setValueInputNumber(value.toString() || '');
		}
	}, [dataSelectUser]);

	const onChangeInputNumber = (values) => {
		setValueInputNumber(values);
	};

	const onFocusInputNumber = () =>  {
		setCheckError('');
	};

	const onBlurInput = () => {
		// Set data cho item
		onChangeInput(valueInputNumber, typeName);

		// const valueInputNumber = refValueInputNumber.current;
		// const { money, limitCard } = data;
		// if (!valueInputNumber) {
		// 	setDisabled && setDisabled(true);
		// 	setCheckError('Dữ liệu không được để trống, vui lòng nhập.');
		// } else if (typeName === typeNames.limitCard && money > valueInputNumber) {
		// 	setCheckError('Số tiền hạn mức phải lớn hơn số tiền làm cho khách.');
		// } else if (typeName === typeNames.money && limitCard < valueInputNumber) {
		// 	setCheckError('Số tiền hạn mức không được phép bé hơn số tiền làm cho khách.');
		// } else  {
		// 	onChangeInput(valueInputNumber, typeName);
		// }
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
			    status={checkError &&  "error"}
			    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
			    formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
				{...otherProps}
		    />
		    {
			    checkError && <span className={styles['input-number-text-error']}>{checkError}</span>
		    }
	    </div>
    );
}

InputNumberComponent.propTypes = {
	typeName: PropTypes.string,
	placeholder: PropTypes.string,
	setDisabled: PropTypes.func,
	onChangeInput: PropTypes.func,

	obligatory: PropTypes.bool,
	title: PropTypes.string,
	className: PropTypes.string,
};

InputNumberComponent.defaultProps = {
	placeholder: 'Vui lòng nhập',

	obligatory: false,
};

export default React.memo(InputNumberComponent);
