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

// Shared
import { typeName } from "../Shared/Synthetic";
import { convertTimeStamp } from "../Shared/Time";

const provinceDataType = ['Rút tiền', 'Đáo'];

const optionsDevicePost = [
	{id: '1', value: 'Thiết bị 1'},
	{id: '2', value: 'Thiết bị 2'},
	{id: '3', value: 'Thiết bị 3'},
	{id: '4', value: 'Thiết bị 4'},
	{id: '5', value: 'Thiết bị 5'},
	{id: '6', value: 'Thiết bị 6'},
	{id: '7', value: 'Thiết bị 7'},
	{id: '8', value: 'Thiết bị 8'},
	{id: '9', value: 'Thiết bị 9'},
	{id: '10', value: 'Thiết bị 10'},
	{id: '11', value: 'Thiết bị 11'},
	{id: '12', value: 'Thiết bị 12'},
	{id: '13', value: 'Thiết bị 13'},
	{id: '14', value: 'Thiết bị 14'},
	{id: '15', value: 'Thiết bị 15'}
];

const optionsPercentBank = [
	{id: '1', value: '1.2'},
	{id: '2', value: '1.4'},
	{id: '3', value: '1.6'},
	{id: '4', value: '1.8'},
	{id: '5', value: '2'},
];

const initializationValue = {
	customerId: "000000000",
	[typeName.devicePost]: '', // Tên thiết bị
	[typeName.workTimestamp]: convertTimeStamp(), // Ngày làm
	[typeName.accountName]: '', // Chủ thẻ
	[typeName.cardNumber]: '', // Số thẻ
	[typeName.money]: 0, // Số tiền
	[typeName.percentBank]: 0, // % Phí ngân hàng
	[typeName.percentCustomer]: 0, // % Phí thu khách
	[typeName.type]: provinceDataType[0], // Hình thức
	[typeName.extends]: '', // Note
};

function useModalAddNew() {
	const [data, setData] = React.useState(() => {
		return initializationValue
	});

	const [isDisabled, setIsDisabled] = React.useState(false);

	const setDisabled = (status) => {
		setIsDisabled(status);
	};

	const onDatePicker = (dataTimeStamp) => {
		setDisabled(false);
		// Thời gian thực hiện.
		setData({ ...data, [typeName.workTimestamp]: dataTimeStamp });
	};

	const onChangeTag = (value) => {
		setDisabled(false);
		// Hình thức
		setData({ ...data, [typeName.type]: value  });
	};

	const onChangeInput = (value, type) => {
		setDisabled(false);
		setData({ ...data, [typeName[type]]: value })
	};

	return({
	    data,
	    setData,
		isDisabled,
		setDisabled,
		onChangeTag,
		onDatePicker,
		onChangeInput,
		provinceDataType,
		optionsDevicePost,
		optionsPercentBank,
	});
}

export default useModalAddNew;
