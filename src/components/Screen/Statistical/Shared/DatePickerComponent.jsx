/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 2/22/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import dayjs from "dayjs";
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import classNames from "classnames";
import locale from "antd/es/date-picker/locale/vi_VN";

// Base
import { flagInput } from "../../../Base/Regex/FlagInput";

// Shared
import { convertMDY, convertTimeStamp, dateFormatList, today } from "./Time";

// Style
import styles from './Styles/index.module.scss';

function DatePickerComponent(props) {
	const { title, obligatory, placeholder, typeName, onChangeInput, className, messageError, onfocusInput } = props;
	const { SUCCESS } = flagInput;
	const onChangeDatePicker = (date, dateString) => {
		const dataStringMDY = convertMDY(dateString);
		const valueDate = convertTimeStamp(dataStringMDY);
		onChangeInput(dateString ? valueDate : '', typeName);
	};

	const onfocusDatePicker = () => {
		onfocusInput(typeName);
	};

	const messageErrorText = messageError && messageError[typeName];
	const showError = messageErrorText && messageErrorText !== SUCCESS;

	return(
    	<div className={classNames(styles['date-picker-wrap'], className)}>
		    {title && <span className={styles['date-picker-title']}>
				{title}{!obligatory && ':'}
			    {obligatory && <span className={styles['date-picker-obligatory']}>*</span>}
			</span>
		    }
		    <DatePicker
			    size="large"
			    locale={locale}
			    style={{ width: '100%' }}
			    format={dateFormatList}
			    placeholder={placeholder}
			    onFocus={onfocusDatePicker}
			    onChange={onChangeDatePicker}
			    status={showError &&  "error"}
			    defaultValue={dayjs(today(), dateFormatList[0])}
			    dateRender={(current) => {
				    const style = {};
				    if (current.date() === 1) {
					    style.border = "1px solid #1890ff";
					    style.borderRadius = "50%";
				    }
				    return (
					    <div className="ant-picker-cell-inner" style={style}>
						    {current.date()}
					    </div>
				    );
			    }}
		    />
		    {showError && <span className={styles['date-picker-text-error']}>{messageErrorText}</span>}
	    </div>
    );
}

DatePickerComponent.propTypes = {
	title: PropTypes.string,
	typeName: PropTypes.string,
	className: PropTypes.string,
	placeholder: PropTypes.string,
	obligatory: PropTypes.bool,
	onChangeInput: PropTypes.func,
	onfocusInput: PropTypes.func,
	messageError: PropTypes.object,
};

DatePickerComponent.defaultProps = {
	placeholder: 'Chọn ngày làm',
	onChangeInput: () => null,
	onfocusInput: () => null,
	obligatory: false,
	messageError: {},
};

export default React.memo(DatePickerComponent);
