import { createSelector } from '@reduxjs/toolkit';

// Utils
import TYPE_STORE from "cores/utils/constants/TYPE_STORE";

// Selector trả về dữ liệu đầu vào
const getData = (state) => state[TYPE_STORE.Transaction];
const getHasData = (state) => state[TYPE_STORE.HasTransaction];

const convertMoney = (money) => {
	return (money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
};

// Selector để chuyển đổi dữ liệu đầu vào
const transformDataSelector = createSelector([getHasData, getData], (hasData = {}, _data = {}) => {
	const { itemIds = [], total = 0 } = hasData;
	const data = { ...JSON.parse(JSON.stringify(_data)) } // Mongker: fix tạm
	for (const id in data) {
		// Key
		data[id].key = data[id]._id;
		data[id].fullname = 'Khách hàng mới';

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

	const dataSource = itemIds.map((id) => data[id]);
	return {
		dataSource,
		total
	};
});

export default transformDataSelector;
