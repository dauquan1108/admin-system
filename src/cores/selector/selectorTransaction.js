import { createSelector } from '@reduxjs/toolkit';
import { v4 as createId } from 'uuid';

// Utils
import TYPE_STORE from "cores/utils/constants/TYPE_STORE";

// Selector trả về dữ liệu đầu vào
const getData = (state, typeStore) => state[typeStore];
const getHasData = (state, typeStore) => state[`Has${typeStore}`];
const _pageSize = (state, typeStore, limit) => limit;

const convertMoney = (money) => {
	return (money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
};

/**
 * Tính ra vị trí của mảng cần thế vào
 * Điểm chung: start = (page - 1) * limit và end = start + (limit - 1)
 * @param {*} page
 * @param {*} limit
 * @returns
 */
function getPageRange(page, limit) {
	const start = (page - 1) * limit;
	const end = start + limit - 1;
	return { start, end };
}

const defaultItem = {
	"userId": "admin",
	"companyId": "00000",
	"money": 0,
	"extends": "",
	"type": "Loading",
	"percentCustomer": 0,
	"percentBank": 0,
	"workTimestamp": new Date().getTime(),
	"timestamp": new Date().getTime(),
	"_id": "-1",
	"devicePost": "Loading ...",
	"customerId": "-1",
	"version": "v.0.0.0",
	// "key": createId(),
	"fullname": "Loading...",
	"bankMoney": "0",
	"feesClient": "0",
	"interestRate": "0",
	"loading": true,
}

// Selector để chuyển đổi dữ liệu đầu vào
const transformDataSelector = createSelector([getHasData, getData, _pageSize], (hasData = {}, _data = {}, limit = 0) => {
	const { itemIds = [], total = 0, page } = hasData;
	if (!itemIds.length) return { dataSource: [], total };
	const data = { ...JSON.parse(JSON.stringify(_data)) } // Mongker: fix tạm? Khi nào fix lại

	// Tạo ra mảng chưa độ dài tương ứng trong mảng
	const itemIdsPage = Array(total).fill('');
	for (let numberPage in page[limit]) {
		const { start } = getPageRange(numberPage, limit);
		itemIdsPage.splice(start, limit, ...page[limit][numberPage]);
	}

	// Đoạn này cần tối ưu lại để sử dụng cho nhiều nơi
	for (const id in data) {
		// Key
		data[id].key = data[id]._id;
		// data[id].fullname = 'NGUYEN THI THU HANG';
		// data[id].cardNumber = '0519';

		// Phí ngân hàng thu
		data[id].bankMoney = convertMoney((data[id].money * (data[id].percentBank / 100)).toFixed(0)) || 0;
		// Phí thu khách
		data[id].feesClient = convertMoney((data[id].money * (data[id].percentCustomer / 100)).toFixed(0)) || 0;

		// Tiền lãi
		const bankMoney = data[id].money * (data[id].percentBank / 100);
		const feesClient = data[id].money * (data[id].percentCustomer / 100);
		const interestRate = (feesClient - bankMoney).toFixed(0);
		data[id].interestRate = convertMoney(interestRate);
	}

	const dataSource = itemIdsPage.filter((id) => id === '' || itemIds.includes(id)).map((id, index) => {
		if (data[id]) {
			return { ...data[id], stt: index + 1 };
		}
		return { ...defaultItem, key: createId(), stt: index + 1 };
	});
	return {
		dataSource,
		total,
		pageIds: Object.keys(page[limit]) || [],
	};
});

export default transformDataSelector;
