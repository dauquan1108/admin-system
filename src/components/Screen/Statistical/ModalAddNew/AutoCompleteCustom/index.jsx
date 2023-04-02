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
import classNames from "classnames";

// Style
import styles from './Styles/index.module.scss';

function AutoCompleteCustom(props) {
	const {
		title,
		typeName,
		className,
		obligatory,
		placeholder,
		optionsData,
		onChangeInput,
		dataSelectDevicePost,
		...otherProps
	} = props;

	const [valueAutoComplete, setValueAutoComplete] = React.useState(() => {
		const value = dataSelectDevicePost[typeName];
		return value && value.toString() || '';
	}); // Khởi tạo giá trị ban đầu cho AutoComplete

	const [checkError, setCheckError] = React.useState('');

	React.useLayoutEffect(() => {
		if (dataSelectDevicePost && dataSelectDevicePost[typeName]) {
			const value = dataSelectDevicePost[typeName];
			setValueAutoComplete(value && value.toString() || '');
		}
	}, [dataSelectDevicePost]);


	const onChange = (value) => {
		setValueAutoComplete(value);
	};

	const onblurAutoComplete = () => {
		// Set data cho item
		onChangeInput(valueAutoComplete, typeName);

		// const valueNew = refValue.current;
		// if (valueNew === null || !valueNew) {
		// 	setCheckError('Dữ liệu không được để trống, vui lòng nhập.');
		// } else if(!valueNew && !isText) {
		// 	setCheckError('Dữ liệu nhập vào không được phép chứ "Text", vui lòng kiểm tra lại.');
		// } else if(
		// 	(data.percentCustomer && data.percentCustomer < valueNew && typeName === typeNames.percentBank)
		// 	||
		// 	(data.percentBank && data.percentBank > valueNew && typeName === typeNames.percentCustomer)
		// ) {
		// 	setCheckError('%phí thu khách phải lớn hơn hoặc bằng %phí ngân hàng.');
		// } else {
		// 	onChangeInput(valueNew, typeName);
		// }
	};
	const onfocusAutoComplete = () => {
		setCheckError('');
	};

	const onFilterOption = (inputValue, option) => {
		if (typeof option.value === 'string') {
			return option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
		}
	};

	const handleSelect = (value, item) => {
		setValueAutoComplete(value);
	};

    return(
        <div className={classNames(styles['auto-complete-wrap'], className)}>
			{title && <span className={styles['auto-complete-title']}>
				{title}{!obligatory && ':'}
				{obligatory && <span className={styles['auto-complete-obligatory']}>*</span>}
			</span>
			}
	        <AutoComplete
				allowClear
				size="large"
				value={valueAutoComplete}
				options={optionsData}
				placeholder={placeholder}
				status={checkError && 'error'}

				onChange={onChange}
				onSelect={handleSelect}
				onBlur={onblurAutoComplete}
		        filterOption={onFilterOption}
		        onFocus={onfocusAutoComplete}
				{...otherProps}
	        />
	        {checkError && <span className={styles['auto-complete-text-error']}>{checkError}</span>}
        </div>
    );
}

AutoCompleteCustom.propTypes = {
	title: PropTypes.string,
	typeName: PropTypes.string,
	className: PropTypes.string,
	placeholder: PropTypes.string,
	obligatory: PropTypes.bool,
	optionsData: PropTypes.array,
	onChangeInput: PropTypes.func,
	dataSelectDevicePost: PropTypes.object,
};

AutoCompleteCustom.defaultProps = {
	optionsData: [],
	obligatory: false,
	dataSelectDevicePost: {},
	onChangeInput: () => null,
};

export default React.memo(AutoCompleteCustom);
