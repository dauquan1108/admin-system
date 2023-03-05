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
import PropTypes from 'prop-types';
import { AutoComplete } from 'antd';

// Shared
import { typeName as typeNames } from "../../Shared/Synthetic";

// Style
import styles from './Styles/index.module.scss';

function AutoCompleteCustom(props) {
	const {
		data,
		style,
		isText,
		typeName,
		placeholder,
		optionsData,
		setDisabled,
		onChangeInput
	} = props;

	const [checkError, setCheckError] = React.useState('');

	const refValue = React.useRef(null);

	const onChange = (value) => {
		let valueNew;
		if (isText) {
			valueNew = value;
		} else {
			valueNew = Number(value);
		}
		refValue.current = valueNew;
	};

	const onblurAutoComplete = () => {
		const valueNew = refValue.current;
		if (valueNew === null || !valueNew) {
			setDisabled && setDisabled(true);
			setCheckError('Dữ liệu không được để trống, vui lòng nhập.');
		} else if(!valueNew && !isText) {
			setDisabled && setDisabled(true);
			setCheckError('Dữ liệu nhập vào không được phép chứ "Text", vui lòng kiểm tra lại.');
		} else if(
			(data.percentCustomer && data.percentCustomer < valueNew && typeName === typeNames.percentBank)
			||
			(data.percentBank && data.percentBank > valueNew && typeName === typeNames.percentCustomer)
		) {
			setDisabled && setDisabled(true);
			setCheckError('%phí thu khách phải lớn hơn hoặc bằng %phí ngân hàng.');
		} else {
			onChangeInput(valueNew, typeName);
		}
	};

	const onfocusAutoComplete = () => {
		setCheckError('');
	};

	const onFilterOption = (inputValue, option) => {
		if (typeof option.value === 'string') {
			return option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
		}
	};

	const checkDisabled = (typeName === typeNames.percentCustomer) && !data.percentBank;

    return(
        <div className={styles.wrapAutoComplete}>
	        <AutoComplete
		        allowClear
		        size="large"
		        style={{...style}}
		        onChange={onChange}
		        options={optionsData}
		        disabled={checkDisabled}
		        placeholder={placeholder}
		        onBlur={onblurAutoComplete}
		        filterOption={onFilterOption}
		        onFocus={onfocusAutoComplete}
		        status={checkError && 'error'}
	        />
	        {checkError && <span className={styles.textError}>{checkError}</span>}
        </div>
    );
}

AutoCompleteCustom.propTypes = {
	isText: PropTypes.bool,
	data: PropTypes.object,
	style: PropTypes.object,
	optionsData: PropTypes.array,
};

AutoCompleteCustom.defaultProps = {
	data: {},
	style: {},
	isText: false,
	optionsData: []
};

export default React.memo(AutoCompleteCustom);
