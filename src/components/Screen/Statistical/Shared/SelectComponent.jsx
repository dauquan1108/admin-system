/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 2/23/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

function SelectComponent(props) {
	const { data, onSelect, style } = props;

	const refSelect = React.useRef(data[0]);

	const onChangeTag = (value) => {
		refSelect.current = value;
	};

	const onblurSelect = () => {
		const value = refSelect.current;
		onSelect(value);
	};

	return(
    	<Select
			size="large"
			onBlur={onblurSelect}
			onChange={onChangeTag}
			style={{ ...style }}
			defaultValue={data[0]}
			options={data.map((province) => ({
				label: province,
				value: province,
			}))}
		/>
    );
}

SelectComponent.propTypes = {
	data: PropTypes.array,
	style: PropTypes.object,
	onSelect: PropTypes.func,
};

SelectComponent.defaultProps = {
	data: [],
	style: {},
};

export default React.memo(SelectComponent);
