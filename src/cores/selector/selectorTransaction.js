/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 3/19/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import { createSelector } from '@reduxjs/toolkit';

// Utils
import TYPE_STORE from "cores/utils/constants/TYPE_STORE";

// Selector trả về dữ liệu đầu vào
const getData = (state) => state[TYPE_STORE.Transaction];

const convertMoney = (money) => {
	return (money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
};

// Selector để chuyển đổi dữ liệu đầu vào
const transformData = createSelector([getData], (data) => {
	console.log('data: ================>', data); // Log QuanDX fix bug

	const litTransactionNew = [];

	if (Object.keys(data).length) {
		for (const property in data) {
			if (data.hasOwnProperty(property)) {
				const itemObjectTransaction = data[property];
				// TODO: QuanDX thêm mới các trường dữ liệu
				// Tạo ra item mới
				const itemObjectTransaction_ = {...itemObjectTransaction};
				// Key
				itemObjectTransaction_.key = itemObjectTransaction_._id;
				// Phí ngân hàng thu
				itemObjectTransaction_.bankMoney = convertMoney((itemObjectTransaction_.money * (itemObjectTransaction_.percentBank /  100 )).toFixed(0)) || 0;
				// Phí thu khách
				itemObjectTransaction_.feesClient = convertMoney((itemObjectTransaction_.money * (itemObjectTransaction_.percentCustomer /  100 )).toFixed(0)) || 0;
				// Tiền lãi
				const bankMoney = itemObjectTransaction_.money * (itemObjectTransaction_.percentBank /  100 );
				const feesClient = itemObjectTransaction_.money * (itemObjectTransaction_.percentCustomer /  100);
				const interestRate = (feesClient- bankMoney).toFixed(0);
				itemObjectTransaction_.interestRate =  convertMoney(interestRate);
				litTransactionNew.push(itemObjectTransaction_);
			}
		}
	}
	return litTransactionNew;
});

export default transformData;
