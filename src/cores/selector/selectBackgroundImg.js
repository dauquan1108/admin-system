/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 4/11/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import { createSelector } from '@reduxjs/toolkit';

// Selector trả về dữ liệu đầu vào
const getDataBackgroundImg = (state) => state.backgroundImg.data;

const selectBackgroundImg = createSelector([getDataBackgroundImg], (data = {}) => {
	const litBackgroundImgNew = data.filter((item) => item.status === true);
	return litBackgroundImgNew[0];
});

export default selectBackgroundImg;
