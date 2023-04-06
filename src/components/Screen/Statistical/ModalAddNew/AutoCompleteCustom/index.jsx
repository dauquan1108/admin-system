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

// Base
import { flagInput } from "../../../../Base/Regex/FlagInput";

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
		messageError,
		onfocusInput,
		onChangeInput,
		dataSelectDevicePost,
		...otherProps
	} = props;
	const { SUCCESS } = flagInput;

	const [valueAutoComplete, setValueAutoComplete] = React.useState(() => {
		const value = dataSelectDevicePost[typeName];
		return value && value.toString() || '';
	}); // Khởi tạo giá trị ban đầu cho AutoComplete

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
	};

	const messageErrorText = messageError && messageError[typeName];
	const showError = messageErrorText && messageErrorText !== SUCCESS;

	const onfocusAutoComplete = () => {
		showError && onfocusInput(typeName);
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
				status={showError && 'error'}

				onChange={onChange}
				onSelect={handleSelect}
				onBlur={onblurAutoComplete}
		        filterOption={onFilterOption}
		        onFocus={onfocusAutoComplete}
				{...otherProps}
	        />
	        {showError && <span className={styles['auto-complete-text-error']}>{messageErrorText}</span>}
        </div>
    );
}

AutoCompleteCustom.propTypes = {
	title: PropTypes.string,
	typeName: PropTypes.string,
	className: PropTypes.string,
	placeholder: PropTypes.string,
	obligatory: PropTypes.bool,
	optionsData: PropTypes.array.isRequired,
	onChangeInput: PropTypes.func,
	onfocusInput: PropTypes.func,
	messageError: PropTypes.object,
	dataSelectDevicePost: PropTypes.object,
};

AutoCompleteCustom.defaultProps = {
	optionsData: [],
	obligatory: false,
	messageError: {},
	dataSelectDevicePost: {},
	onChangeInput: () => null,
	onfocusInput: () => null,
};

export default React.memo(AutoCompleteCustom);
