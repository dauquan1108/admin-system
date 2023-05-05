/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 1/3/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Input, InputNumber } from "antd";

// Base
import { isCheckNumber } from "../../../../Base/Regex/validationNumber";

// Shared
import { typeName as typeNames } from "../../../../Shared/Synthetic";

// Style
import styles from './Styles/index.module.scss';

const { TextArea } = Input;

function InputCustom(props) {
	const {
		data,
		style,
		typeName,
		maxLength,
		placeholder,
		typeTextArea,
		typeInputNumber,
		onChangeInputCustom
	} = props;

	const [valueInput, setValueInput] = React.useState(data[typeName]);
	const [checkMax, setCheckMax] = React.useState(0);
	const [checkError, setCheckError] = React.useState('');

	React.useLayoutEffect(() => {
		setValueInput(data[typeName]);
	}, [data[typeName]])

	const onChangeInput = (e) => {
		const { value } = e.target;
		let valueNew;
		if (typeName === typeNames.accountName) {
			valueNew = value.toUpperCase();
		} else {
			valueNew = value;
		}
		setValueInput(valueNew);

		let textError;
		const countValueNew = valueNew.length;
		if (countValueNew === maxLength) {
			textError = `Dữ liệu đã vượt quá số lượng cho phép nhập là: ${maxLength}`
		} else {
			textError= '';
		}
		setCheckError(textError);
		setCheckMax(countValueNew);
	};

	const onChangeInputNumber = (values) => {
		setCheckMax(values);
		setValueInput(values);
		setCheckError('');
	};

	const onBlurInput = () => {
		if (!valueInput) {
			setCheckError('Dữ liệu không được để trống, vui lòng nhập.')
		} else if(typeName === typeNames.cardNumber && !isCheckNumber(valueInput)) {
			setCheckError('Dữ liệu nhập vào không được phép chứa "Text".')
		} else  {
			onChangeInputCustom(valueInput, typeName);
		}
	};


	if (typeInputNumber) {
		return (
			<div className={styles.wrapInputCustom}>
				<InputNumber
					size="large"
					max={maxLength}
					defaultValue={0}
					value={valueInput}
					onBlur={onBlurInput}
					onChange={onChangeInputNumber}
					style={{...style, width: '100%'}}
					status={(maxLength === checkMax || checkError) &&  "error"}
					formatter={(value) => typeName === typeNames.money ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : value}
				/>
				{
					checkError && <span className={styles.textError}>{checkError}</span>
				}
			</div>
		);
	}

    return(
    	<div className={styles.wrapInputCustom}>
		    {
			    typeTextArea ? (
				    <TextArea
					    rows={4}
					    showCount
					    value={valueInput}
					    onBlur={onBlurInput}
					    maxLength={maxLength}
					    onChange={onChangeInput}
					    style={{ marginBottom: '25px' }}
					    status={(maxLength === checkMax || checkError) && "error"}
				    />
			    ) : (
			    	<Input
					    showCount
					    size="large"
					    value={valueInput}
					    onBlur={onBlurInput}
					    maxLength={maxLength}
					    onChange={onChangeInput}
					    placeholder={placeholder}
					    status={(maxLength === checkMax || checkError) && "error"}
			    />)
		    }
		    {
		    	checkError && <span className={styles.textError}>{checkError}</span>
		    }
	    </div>
    );
}

InputCustom.propTypes = {
	maxLength: PropTypes.number,

	data: PropTypes.object,
	style: PropTypes.object,

	typeTextArea: PropTypes.bool,
	typeInputNumber: PropTypes.bool,

	typeName: PropTypes.string,
	placeholder: PropTypes.string,

	onChangeInputCustom: PropTypes.func,
};

InputCustom.defaultProps = {
	data: {},
	style: {},
	typeTextArea: false,
	typeInputNumber: false,
	placeholder: 'Vui lòng nhập',
};

export default React.memo(InputCustom);
