/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 3/12/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import { createSlice } from "@reduxjs/toolkit";

// Img
import a0 from '../../../src/components/Img/BackgroungImg/a0.jpg';
import a0000 from '../../../src/components/Img/BackgroungImg/a0000.jpg';
import a000 from '../../../src/components/Img/BackgroungImg/a000.jpg';
import a00 from '../../../src/components/Img/BackgroungImg/a00.jpeg';
// import a01 from '../../../src/components/Img/BackgroungImg/a01.jpeg';
import a1 from '../../../src/components/Img/BackgroungImg/a1.jpg';
import a2 from '../../../src/components/Img/BackgroungImg/a2.jpg';
import a9 from '../../../src/components/Img/BackgroungImg/a9.jpg';
import a10 from '../../../src/components/Img/BackgroungImg/a10.jpg';
import a11 from '../../../src/components/Img/BackgroungImg/a11.jpg';
import a12 from '../../../src/components/Img/BackgroungImg/a12.jpg';
import a13 from '../../../src/components/Img/BackgroungImg/a13.jpg';
import a14 from '../../../src/components/Img/BackgroungImg/a14.jpg';
import a15 from '../../../src/components/Img/BackgroungImg/a15.jpg';
import a16 from '../../../src/components/Img/BackgroungImg/a16.jpg';
import a17 from '../../../src/components/Img/BackgroungImg/a17.jpg';
import a18 from '../../../src/components/Img/BackgroungImg/a18.jpg';
import a19 from '../../../src/components/Img/BackgroungImg/a19.jpg';
import a20 from '../../../src/components/Img/BackgroungImg/a20.jpg';
import a21 from '../../../src/components/Img/BackgroungImg/a21.jpg';
import a22 from '../../../src/components/Img/BackgroungImg/a22.jpg';
import a23 from '../../../src/components/Img/BackgroungImg/a23.jpg';
import a24 from '../../../src/components/Img/BackgroungImg/a24.jpg';
import a26 from '../../../src/components/Img/BackgroungImg/a26.jpg';
import a28 from '../../../src/components/Img/BackgroungImg/a28.jpg';
import a31 from '../../../src/components/Img/BackgroungImg/a31.jpg';
import t1 from '../../../src/components/Img/BackgroungImg/t1.jpg';
import t3 from '../../../src/components/Img/BackgroungImg/t3.jpg';
import t4 from '../../../src/components/Img/BackgroungImg/t4.jpg';
import t5 from '../../../src/components/Img/BackgroungImg/t5.jpg';
import t6 from '../../../src/components/Img/BackgroungImg/t6.jpg';
import t7 from '../../../src/components/Img/BackgroungImg/t7.jpg';
import t8 from '../../../src/components/Img/BackgroungImg/t8.jpg';
import t9 from '../../../src/components/Img/BackgroungImg/t9.jpg';
import t10 from '../../../src/components/Img/BackgroungImg/t10.jpg';
import t11 from '../../../src/components/Img/BackgroungImg/t11.jpg';
import t12 from '../../../src/components/Img/BackgroungImg/t12.jpg';


export const reducersBackgroundImg = createSlice({
	name: "backgroundImg",
	initialState: {
		data: [
			{ id: 33, img: a000, status: true },
			{ id: 32, img: a00, status: false },
			{ id: 0, img: a1, status: false },
			{ id: 1, img: a2, status: false },
			{ id: 2, img: a10, status: false },
			{ id: 3, img: a9, status: false },
			{ id: 4, img: a11, status: false },
			{ id: 5, img: a12, status: false },
			{ id: 6, img: a13, status: false },
			{ id: 7, img: a14, status: false },
			{ id: 8, img: a15, status: false },
			{ id: 9, img: a16, status: false },
			{ id: 10, img: a17, status: false },
			{ id: 11, img: a18, status: false },
			{ id: 12, img: a19, status: false },
			{ id: 13, img: a20, status: false },
			{ id: 14, img: a21, status: false },
			{ id: 15, img: a22, status: false },
			{ id: 16, img: a23, status: false },
			{ id: 17, img: a24, status: false },
			{ id: 18, img: a26, status: false },
			{ id: 19, img: a28, status: false },
			{ id: 20, img: a31, status: false },
			{ id: 21, img: t1, status: false },
			{ id: 22, img: t3, status: false },
			{ id: 23, img: t4, status: false },
			{ id: 24, img: t5, status: false },
			{ id: 25, img: t6, status: false },
			{ id: 26, img: t7, status: false },
			{ id: 27, img: t8, status: false },
			{ id: 28, img: t9, status: false },
			{ id: 29, img: t10, status: false },
			{ id: 30, img: t11, status: false },
			{ id: 31, img: t12, status: false },
		],
	},
	reducers: {
		updateBackgroundImg: (state, action) => {
			const { id } = action.payload;
			const listBackgroundImg = state.data;
			for (let i = 0; i < listBackgroundImg.length; i++) {
				let element = listBackgroundImg[i];
				element.status = (element.id === id);
			}
		}
	}
});

export const { updateBackgroundImg } = reducersBackgroundImg.actions;

export const getLitBackgroundImg = (state) => {
	return state.backgroundImg.data;
};

export default reducersBackgroundImg.reducer;
