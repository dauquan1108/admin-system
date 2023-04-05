/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 4/5/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from "react";

// Base
import { flagInput } from "../../../../Base/Regex/FlagInput";
import validationNumberDecimal from "../../../../Base/Regex/validationNumberDecimal";

// Shared
import { typeName } from "../../../Statistical/Shared/Synthetic";

function useModalAddDevice() {
	// Data from
	const [data, setData] = React.useState({
		// [typeName.devicePost]: "", // Tên thiết bị
		name: "", // Tên thiết bị
		[typeName.percentBank]: "", // % Phí ngân hàng
		[typeName.percentCustomer]: "", // % Phí thu khách
	});

	// Thông báo lỗi các trường
	const [messageError, setMessageError] = React.useState({
		// [typeName.devicePost]: "", // Tên thiết bị
		name: "", // Tên thiết bị
		[typeName.percentBank]: "", // % Phí ngân hàng
		[typeName.percentCustomer]: "", // % Phí thu khách
	});

	const onChangeInput = (value, type) => {
		setData({ ...data, [type]: value })
	};

	const onfocusInput = (type) => {
		setMessageError({ ...messageError, [type]: '' })
	};

	// Clear Data
	const onCleanData = () => {
		setData({
			// [typeName.devicePost]: "", // Tên thiết bị
			name: "", // Tên thiết bị
			[typeName.percentBank]: "", // % Phí ngân hàng
			[typeName.percentCustomer]: "", // % Phí thu khách
		});
	};

	const { SUCCESS } = flagInput;

	const checkValidateDevicePost = () => {
		// Tên thiết bị
		// const { devicePost } = data;
		const { name } = data;
		if (!name) {
			return 'Tên của thiết bị không được để trống!'
		}

		return SUCCESS;
	};

	const checkValidatePercentBank = () => {
		// % Phí ngân hàng
		const { percentBank } = data;
		const percentBank_ = Number(percentBank);

		if (!percentBank_) {
			return '% Phí ngân hàng không đúng vui lòng kiểm tra lại!'
		}

		if (!validationNumberDecimal(percentBank_)) {
			return '% Phí ngân hàng không đúng định dạng "1,2... hoặc 1" vui lòng kiểm tra lại!';
		}

		return SUCCESS;
	};

	const checkValidatePercentCustomer = () => {
		// % Phí thu khách
		const { percentBank, percentCustomer } = data;
		const percentBank_ = Number(percentBank);
		const percentCustomer_ = Number(percentCustomer);

		if (!percentCustomer_) {
			return '% Phí thu khách không đúng vui lòng kiểm tra lại!'
		}

		if (percentBank_ && percentCustomer_ && percentBank_ > percentCustomer_) {
			return '% Phí thu khách phải lớn hơn hoặc bằng % Phí ngân hàng vui lòng kiểm tra lại!'
		}

		if (!validationNumberDecimal(percentCustomer_)) {
			return '% Phí thu khách không đúng định dạng "1,2... hoặc 1" vui lòng kiểm tra lại!';
		}

		return SUCCESS;
	};

	const checkValidateAll = () => {
		const messageErrors = {
			// [typeName.devicePost]: checkValidateDevicePost(),
			name: checkValidateDevicePost(),
			[typeName.percentBank]: checkValidatePercentBank(),
			[typeName.percentCustomer]: checkValidatePercentCustomer(),
		};

		setMessageError(messageErrors);

		return Object.values(messageErrors).every((message) => message === SUCCESS);
	};

	return({
		data,
		onChangeInput,
		messageError,
		checkValidateAll,
		onfocusInput,
		onCleanData,
	});
}

export default useModalAddDevice;
