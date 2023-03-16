
/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 3/16/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import {createSlice} from "@reduxjs/toolkit";

export const reducersUserInformation = createSlice({
	name: "userInformation",
	initialState: {
		data: {
			id: 1,
			name: 'Tên người dùng',
			avatar: 'https://i.pinimg.com/564x/b3/ac/d9/b3acd9852dcb091868874a6534f3e2cd.jpg',
			phone: '0387091106',
			email: '',
			address: '',
		},
	},
	reducers: {
		// updateUserInformation: (state, action) => {
		// }
	}
});

// export const { updateBackgroundImg } = reducersUserInformation.actions;

export const selectUserInformation = (state) => {
	return state.userInformation.data;
};

export default reducersUserInformation.reducer;
