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

// Shared
import { typeName as typeNames } from "../../Shared/Synthetic";

// Style
import styles from './Styles/index.module.scss';

function AutoCompleteCustom(props) {
	const {
		title,
		typeName,
		placeholder,
		optionsData,
		obligatory,
		setDisabled,
		className,
		onChangeInput,
		dataSelectDevicePost,
		...otherProps
	} = props;

	const [value, setValue] = React.useState(() => {
		const value = dataSelectDevicePost[typeName];
		return value && value.toString() || '';
	}); // Khởi tạo giá trị ban đầu cho AutoComplete

	const [checkError, setCheckError] = React.useState('');

	React.useLayoutEffect(() => {
		if (dataSelectDevicePost && dataSelectDevicePost[typeName]) {
			const value = dataSelectDevicePost[typeName];
			setValue(value && value.toString() || '');
		}
	}, [dataSelectDevicePost]);


	const onChange = (value) => {
		setValue(value);
	};

	const onblurAutoComplete = () => {
		// const valueNew = refValue.current;
		// if (valueNew === null || !valueNew) {
		// 	setDisabled && setDisabled(true);
		// 	setCheckError('Dữ liệu không được để trống, vui lòng nhập.');
		// } else if(!valueNew && !isText) {
		// 	setDisabled && setDisabled(true);
		// 	setCheckError('Dữ liệu nhập vào không được phép chứ "Text", vui lòng kiểm tra lại.');
		// } else if(
		// 	(data.percentCustomer && data.percentCustomer < valueNew && typeName === typeNames.percentBank)
		// 	||
		// 	(data.percentBank && data.percentBank > valueNew && typeName === typeNames.percentCustomer)
		// ) {
		// 	setDisabled && setDisabled(true);
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
		setValue(value);
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
				value={value}
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
	className: PropTypes.string,
	obligatory: PropTypes.bool,
	dataSelectDevicePost: PropTypes.object,
	optionsData: PropTypes.array,
};

AutoCompleteCustom.defaultProps = {
	dataSelectDevicePost: {},
	obligatory: false,
	optionsData: []
};

export default React.memo(AutoCompleteCustom);
