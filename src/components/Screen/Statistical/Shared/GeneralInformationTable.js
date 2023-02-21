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

import moment from "moment";

const dateFormatList = ["DD/MM/YYYY"];

const today = () => {
	const dates = new Date();
	return (
		("0" + dates.getDate()).slice(-2) + "/" + ("0" + (dates.getMonth() + 1)).slice(-2) + "/" +dates.getFullYear()
	);
};

const todayMoment = () => {
	const todayNew = today();
	// Todo check lại đoạn này
	console.log('todayNew: =======555=========>', todayNew); // Log QuanDX fix bug
	// return moment(`"${todayNew}"`).valueOf();
	return moment("22/02/2023").valueOf();
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

const tetx = {
	"devicePost": "QuanDX", // Tên máy Pos làm
	"customerId": "000000000", // Id khách hàng
	"extends": "{}", // Trường thông tin lưu thêm
	"percentCustomer": 1.8, // % Phí thu khách
	"percentBank": 1.2, // % Phí ngân hàng thu
	"workTimestamp": "1673769027519", // Thời gian khách đến giao dịch
	"money": 1000000,  // Số tiền
}

// // Tên máy Pos làm
// devicePost: {
// 	type: String,
// 		require: true,
// },

// // Id khách hàng
// customerId: {
// 	type: String,
// 		require: true,
// },

// // Trường thông tin lưu thêm
// extends: {
// 	type: String,
// 		require: true,
// default: new Date().getTime(),
// },

// // Phí thu khách
// percentCustomer: {
// 	type: Number,
// 		require: true,
// default: new Date().getTime(),
// },

// // Phí ngân hàng thu
// percentBank: {
// 	type: Number,
// 		require: true,
// default: new Date().getTime(),
// },

// // Thời gian khách đến giao dịch
// workTimestamp: {
// 	type: String,
// default: new Date().getTime(),
// },

// // Thời gian khởi tạo trong database
// timestamp: {
// 	type: String,
// default: new Date().getTime(),
// },

export { dateFormatList, today, todayMoment, typeName };
