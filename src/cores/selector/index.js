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

import { createStructuredSelector } from "reselect";

// Selector
import deviceData from "./selectorDevice";
import transformData from "./selectorTransaction";
import backgroundImgData from "./selectBackgroundImg";

export const mySelector = createStructuredSelector({
	selectorDevice: deviceData,
	selectorTransaction: transformData,
	selectBackgroundImg: backgroundImgData,
});

