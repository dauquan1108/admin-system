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
import locale from "antd/es/date-picker/locale/vi_VN";

// Shared
import { convertMDY, convertTimeStamp, dateFormatList, today } from "./Time";

function DatePickerComponent(props) {
	const { style, placeholder, onDatePicker } = props;

	const refDatePicker = React.useRef(null);

	const onChangeDatePicker = (date, dateString) => {
		const dataStringMDY = convertMDY(dateString);
		const dataTimeStamp = convertTimeStamp(dataStringMDY);
		refDatePicker.current = dataTimeStamp;
	};

	const onblurDatePicker = () => {
		const timeStamp = refDatePicker.current;
		onDatePicker(timeStamp);
	};

    return(
	    <DatePicker
		    size="large"
		    locale={locale}
		    style={{...style}}
		    onBlur={onblurDatePicker}
		    format={dateFormatList}
		    placeholder={placeholder}
		    onChange={onChangeDatePicker}
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
    );
}

DatePickerComponent.propTypes = {
	style: PropTypes.object,
	onDatePicker: PropTypes.func,
	placeholder: PropTypes.string,
};

DatePickerComponent.defaultProps = {
	style: {},
	placeholder: 'Chọn ngày làm',
};

export default React.memo(DatePickerComponent);
