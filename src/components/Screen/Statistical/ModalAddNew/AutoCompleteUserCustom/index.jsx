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

function AutoCompleteUserCustom(props) {
	const {
		title,
		typeName,
		className,
		obligatory,
		placeholder,
		optionsData,
		messageError,
		onChangeInput,
		onfocusInput,
		dataSelectUser,
		onSelectAutoComplete,
		...otherProps
	} = props;
	const { SUCCESS } = flagInput;
	const [valueAutoComplete, setValueAutoComplete] = React.useState( {
		valueInput: '',
		status: false,
	}); // Khởi tạo giá trị ban đầu cho AutoComplete

	React.useLayoutEffect(() => {
		if (dataSelectUser && dataSelectUser[typeName]) {
			const value = dataSelectUser[typeName];
			setValueAutoComplete({
				valueInput: value && value.toString() || '',
				status: false,
			});
		}
	}, [dataSelectUser]);


	const onChangeUser = (value) => {
		setValueAutoComplete({ valueInput: value , status: true });
	};

	const onblurAutoComplete = () => {
		// Set data cho item
		const { status } = valueAutoComplete;
		status && onChangeInput(valueAutoComplete.valueInput, typeName);
	};

	const onfocusAutoComplete = () => {
		onfocusInput(typeName);
	};

	const onFilterOption = (inputValue, option) => {
		if (typeof option.value === 'string') {
			return option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
		}
	};

	const handleSelect = (value, item) => {
		setValueAutoComplete({ valueInput: value, status: false });
		onSelectAutoComplete(value, item);
	};

	const messageErrorText = messageError && messageError[typeName];
	const showError = messageErrorText && messageErrorText !== SUCCESS;

    return(
        <div className={classNames(styles['auto-complete-user-wrap'], className)}>
			{title && <span className={styles['auto-complete-user-title']}>
				{title}{!obligatory && ':'}
				{obligatory && <span className={styles['auto-complete-user-obligatory']}>*</span>}
			</span>
			}
	        <AutoComplete
				allowClear
				size="large"
				value={valueAutoComplete.valueInput}
				options={optionsData}
				placeholder={placeholder}
				status={showError && 'error'}

				onChange={onChangeUser}
				onSelect={handleSelect}
				onBlur={onblurAutoComplete}
		        filterOption={onFilterOption}
		        onFocus={onfocusAutoComplete}

				{...otherProps}
	        />
	        {showError && <span className={styles['auto-complete-user-text-error']}>{messageErrorText}</span>}
        </div>
    );
}

AutoCompleteUserCustom.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
	typeName: PropTypes.string,
	placeholder: PropTypes.string,
	obligatory: PropTypes.bool,
	optionsData: PropTypes.array,
	messageError: PropTypes.object,
	dataSelectUser: PropTypes.object,
	onfocusInput: PropTypes.func,
	onChangeInput: PropTypes.func,
	onSelectAutoComplete: PropTypes.func,
};

AutoCompleteUserCustom.defaultProps = {
	obligatory: false,
	optionsData: [],
	messageError: {},
	dataSelectUser: {},
	onfocusInput: () => null,
	onChangeInput: () => null,
	onSelectAutoComplete: () => null,
};

export default React.memo(AutoCompleteUserCustom);
