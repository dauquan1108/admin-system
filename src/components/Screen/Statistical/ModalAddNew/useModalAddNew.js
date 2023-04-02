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

const provinceDataType = ['Đáo', 'Rút tiền'];

const paymentDataStatus = ['Chưa thanh toán', 'Đã thanh toán'];

const optionsDevicePost = [
	{id: '1',value: 'Thiết bị 1', percentBank: 1.2, percentCustomer: 1.4 },
	{id: '2', value: 'Thiết bị 2', percentBank: 1.2, percentCustomer: 1.6 },
	{id: '3',  value: 'Thiết bị 3', percentBank: 1.2, percentCustomer: 1.4 },
	{id: '4', value: 'Thiết bị 4', percentBank: 1.2, percentCustomer: 1.6 },
	{id: '5', value: 'Thiết bị 5',  percentBank: 1.2, percentCustomer: 1.6 },
	{id: '6', value: 'Thiết bị 6', percentBank: 1.2, percentCustomer: 1.4 },
	{id: '7', value: 'Thiết bị 7', percentBank: 1.2, percentCustomer: 1.6 },
	{id: '8', value: 'Thiết bị 8', percentBank: 1.2, percentCustomer: 2 },
	{id: '9', value: 'Thiết bị 9', percentBank: 1.2, percentCustomer: 1.4 },
	{id: '10', value: 'Thiết bị 10', percentBank: 1.2, percentCustomer: 1.4 },
];


// Data chủ thẻ
const optionUser = [
	{id: '1', accountName: 'HỒ SỸ THẮNG', value: 'HỒ SỸ THẮNG (0001)', phoneNumber: '0387091101', cardNumber: '0001', limitCard: '100,000,000,000'},
	{id: '2', accountName: 'HÀ NHI NGUYỄN THỊ', value: 'HÀ NHI NGUYỄN THỊ (0002)', phoneNumber: '0387091102', cardNumber: '0002', limitCard: '100,000,000,000'},
	{id: '3', accountName: 'LÊ THU HẢO', value: 'LÊ THU HẢO (0003)', phoneNumber: '0387091103', cardNumber: '0003', limitCard: '100,000,000,000'},
	{id: '4', accountName: 'LÊ CÔNG TUẤN', value: 'LÊ CÔNG TUẤN (0004)', phoneNumber: '0387091104',cardNumber: '0004', limitCard: '100,000,000,000'},
	{id: '5', accountName: 'VŨ HẢI ANH', value: 'VŨ HẢI ANH (0005)', phoneNumber: '0387091105', cardNumber: '0005', limitCard: '100,000,000,000'},
	{id: '6', accountName: 'TRỊNH ĐỨC ANH', value: 'TRỊNH ĐỨC ANH (0006)', phoneNumber: '0387091106', cardNumber: '0006', limitCard: '100,000,000,000'},
	{id: '7', accountName: 'HOÀNG THỊ TÂM', value: 'HOÀNG THỊ TÂM (0007)', phoneNumber: '0387091107', cardNumber: '0007', limitCard: '100,000,000,000'},
	{id: '8', accountName: 'NGUYỄN VĂN DŨNG', value: 'NGUYỄN VĂN DŨNG (0008)', phoneNumber: '0387091108', cardNumber: '0008', limitCard: '100,000,000,000'},
	{id: '9', accountName: 'ĐẬU THỊ NHẬT MINH', value: 'ĐẬU THỊ NHẬT MINH (0009)', phoneNumber: '0387091109', cardNumber: '0009', limitCard: '100,000,000,000'},
	{id: '10', accountName: 'LƯỜNG TÚ ANH', value: 'LƯỜNG TÚ ANH (0010)', phoneNumber: '0387091110', cardNumber: '0010', limitCard: '100,000,000,000'},
];


// Data Số điện thoại
const optionUserPhoneNumber = [
	{id: '1', accountName: 'HỒ SỸ THẮNG', value: '0387091101', phoneNumber: '0387091101', cardNumber: '0001', limitCard: '100,000,000,000'},
	{id: '2', accountName: 'HÀ NHI NGUYỄN THỊ', value: '0387091102', phoneNumber: '0387091102', cardNumber: '0002', limitCard: '100,000,000,000'},
	{id: '3', accountName: 'LÊ THU HẢO', value: '0387091103', phoneNumber: '0387091103', cardNumber: '0003', limitCard: '100,000,000,000'},
	{id: '4', accountName: 'LÊ CÔNG TUẤN', value: '0387091104', phoneNumber: '0387091104',cardNumber: '0004', limitCard: '100,000,000,000'},
	{id: '5', accountName: 'VŨ HẢI ANH', value: '0387091105', phoneNumber: '0387091105', cardNumber: '0005', limitCard: '100,000,000,000'},
	{id: '6', accountName: 'TRỊNH ĐỨC ANH', value: '0387091106', phoneNumber: '0387091106', cardNumber: '0006', limitCard: '100,000,000,000'},
	{id: '7', accountName: 'HOÀNG THỊ TÂM', value: '0387091107', phoneNumber: '0387091107', cardNumber: '0007', limitCard: '100,000,000,000'},
	{id: '8', accountName: 'NGUYỄN VĂN DŨNG', value: '0387091108', phoneNumber: '0387091108', cardNumber: '0008', limitCard: '100,000,000,000'},
	{id: '9', accountName: 'ĐẬU THỊ NHẬT MINH', value: '0387091109', phoneNumber: '0387091109', cardNumber: '0009', limitCard: '100,000,000,000'},
	{id: '10', accountName: 'LƯỜNG TÚ ANH', value: '0387091110', phoneNumber: '0387091110', cardNumber: '0010', limitCard: '100,000,000,000'},
];


// Data Số điện thoại
const optionUserCardNumber = [
	{id: '1', accountName: 'HỒ SỸ THẮNG', value: '0001', phoneNumber: '0387091101', cardNumber: '0001', limitCard: '100,000,000,000'},
	{id: '2', accountName: 'HÀ NHI NGUYỄN THỊ', value: '0002', phoneNumber: '0387091102', cardNumber: '0002', limitCard: '100,000,000,000'},
	{id: '3', accountName: 'LÊ THU HẢO', value: '0003', phoneNumber: '0387091103', cardNumber: '0003', limitCard: '100,000,000,000'},
	{id: '4', accountName: 'LÊ CÔNG TUẤN', value: '0004', phoneNumber: '0387091104',cardNumber: '0004', limitCard: '100,000,000,000'},
	{id: '5', accountName: 'VŨ HẢI ANH', value: '0005', phoneNumber: '0387091105', cardNumber: '0005', limitCard: '100,000,000,000'},
	{id: '6', accountName: 'TRỊNH ĐỨC ANH', value: '0006', phoneNumber: '0387091106', cardNumber: '0006', limitCard: '100,000,000,000'},
	{id: '7', accountName: 'HOÀNG THỊ TÂM', value: '0007', phoneNumber: '0387091107', cardNumber: '0007', limitCard: '100,000,000,000'},
	{id: '8', accountName: 'NGUYỄN VĂN DŨNG', value: '0008', phoneNumber: '0387091108', cardNumber: '0008', limitCard: '100,000,000,000'},
	{id: '9', accountName: 'ĐẬU THỊ NHẬT MINH', value: '0009', phoneNumber: '0387091109', cardNumber: '0009', limitCard: '100,000,000,000'},
	{id: '10', accountName: 'LƯỜNG TÚ ANH', value: '0010', phoneNumber: '0387091110', cardNumber: '0010', limitCard: '100,000,000,000'},
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
	[typeName.accountName]: '', // Chủ thẻ
	[typeName.phoneNumber]: '', // Số điện thoại
	[typeName.cardNumber]: '', // 4 Số cuối thẻ
	[typeName.limitCard]: 0, // Hạn mức
	[typeName.money]: 0, // Số tiền
	[typeName.devicePost]: '', // Tên thiết bị
	[typeName.percentBank]: 0, // % Phí ngân hàng
	[typeName.percentCustomer]: 0, // % Phí thu khách
	[typeName.type]: provinceDataType[0], // Hình thức
	[typeName.debit]: paymentDataStatus[0], // Trạng thái thanh toán
	[typeName.workTimestamp]: convertTimeStamp(), // Ngày làm
	[typeName.extends]: '', // Note
};

function useModalAddNew() {
	const [data, setData] = React.useState(() => {
		return initializationValue
	});

	const [dataSelectUser, setDataSelectUser] = React.useState({});

	// Khi người dùng select tên thiết bị
	const [dataSelectDevicePost, setDataSelectDevicePost] = React.useState(optionsDevicePost[0]);

	const [isDisabled, setIsDisabled] = React.useState(false);

	const setDisabled = (status) => {
		setIsDisabled(status);
	};

	const onDatePicker = (dataTimeStamp) => {
		// setDisabled(false);
		// Thời gian thực hiện.
		setData({ ...data, [typeName.workTimestamp]: dataTimeStamp });
	};

	const onChangeTag = (value) => {
		// setDisabled(false);
		// Hình thức
		setData({ ...data, [typeName.type]: value  });
	};

	const onChangeInput = (value, type) => {
		// setDisabled(false);
		setData({ ...data, [typeName[type]]: value })
	};

	// Todo QuanDX: chọn tên chủ thẻ.
	const onSelectAutoCompleteUser = (value, objItem) => {
		setDataSelectUser(objItem);
	};

	// Todo QuanDX: chọn tên tiết bị.
	const onSelectDevicePost = (value, objItem) => {
		setDataSelectDevicePost(objItem);
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
		paymentDataStatus,
		optionsDevicePost,
		optionsPercentBank,


		optionUser,
		optionUserPhoneNumber,
		optionUserCardNumber,
		dataSelectUser,
		onSelectAutoCompleteUser,

		onSelectDevicePost,
		dataSelectDevicePost,
	});
}

export default useModalAddNew;
