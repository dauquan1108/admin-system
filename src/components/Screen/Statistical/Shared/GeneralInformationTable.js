/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 1/8/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

const dateFormatList = ["DD/MM/YYYY"];

// TODO: Lấy ra ngày hiện tại "Ngày/Tháng/Năm"
const today = () => {
	const dates = new Date();
	return (
		("0" + dates.getDate()).slice(-2) + "/" + ("0" + (dates.getMonth() + 1)).slice(-2) + "/" +dates.getFullYear()
	);
};

// TODO: Chuyển đổi date sang "Tháng/Ngày/Năm"
const convertMDY = (dateStringDMY) => {
	const dataNew = dateStringDMY || today();
	const parts = dataNew.split('/');
	return parts[1] + '/' + parts[0] + '/' + parts[2];
};

// TODO: Chuyển đổi date("Tháng/Ngày/Năm") => TimeStamp
const convertTimeStamp = (dateStringMDY) => {
	const dateString = dateStringMDY || convertMDY();
	const dateObject = new Date(dateString);
	return dateObject.getTime();
};

// TODO: Chuyển đổi từ TimeStamp => Ngày/Tháng/Năm
const convertDMY = (timeStamp) => {
	const date = new Date(timeStamp);
	const day = ("0" + date.getDate()).slice(-2);
	const month = ("0" + (date.getMonth() + 1)).slice(-2);
	const year = date.getFullYear();
	return (`${day}/${month}/${year}`);
};


const typeName = {
	devicePost: 'devicePost', // Tên máy Pos làm
	workTimestamp: 'workTimestamp', // Ngày làm
	accountName: 'accountName', // Chủ thẻ
	cardNumber: 'cardNumber', // Số thẻ
	money: 'money', // Số tiền
	percentBank: 'percentBank', // % Phí ngân hàng
	bankFees: 'bankFees', // Phí ngân hàng
	percentCustomer: 'percentCustomer', // % Phí thu khách
	fees: 'fees', // Phí thu
	interestRate: 'interestRate', // Lãi
	extends: 'extends',  // Note
	type: 'type', // Hình thức
}

export { dateFormatList, today, convertMDY, convertTimeStamp, convertDMY, typeName };
