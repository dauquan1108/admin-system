/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 4/12/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';

// Share
import { typeName } from "./Share";

function usePersonalInformation() {
	const { TYPE_PHONE, TYPE_EMAIL, TYPE_DATE_BIRTH, TYPE_FULL_NAME, TYPE_SEX, TYPE_EXTEND } = typeName;

	const [dataPersonal, setDataPersonal] = React.useState({
		[TYPE_FULL_NAME]: '',
		[TYPE_DATE_BIRTH]: '',
		[TYPE_SEX]: '',
		[TYPE_PHONE]: '',
		[TYPE_EMAIL]: '',
		[TYPE_EXTEND]: '',
	});

	const [messageError, setMessageError] = React.useState({
		[TYPE_FULL_NAME]: '',
		[TYPE_DATE_BIRTH]: '',
		[TYPE_SEX]: '',
		[TYPE_PHONE]: '',
		[TYPE_EMAIL]: '',
		[TYPE_EXTEND]: '',
	});

    return {
		dataPersonal,
		setDataPersonal,
	    messageError,
	    setMessageError,
    };
}

export default usePersonalInformation;
