import { createSelector } from '@reduxjs/toolkit';

// Utils
import TYPE_STORE from "cores/utils/constants/TYPE_STORE";

// Selector trả về dữ liệu đầu vào
const getData = (state) => state[TYPE_STORE.Device];
const getHasData = (state) => state[TYPE_STORE.HasDevice];


// Selector để chuyển đổi dữ liệu đầu vào
const deviceDataSelector = createSelector([getHasData, getData], (hasData = {}, _data = {}) => {
	const data = { ...JSON.parse(JSON.stringify(_data)) } // Mongker: fix tạm
	console.log('_data: ========ffffff========>', _data); // Log QuanDX fix bug

	return null;
});

export default deviceDataSelector;
