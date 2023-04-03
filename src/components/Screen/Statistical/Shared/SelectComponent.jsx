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
	const { data, typeName, onChangeInput, ...otherProps } = props;

	const onChangeTag = (value) => {
		onChangeInput(value, typeName);
	};

	return(
    	<Select
			size="large"
			onChange={onChangeTag}
			style={{ width: '100%' }}
			defaultValue={data[0]}
			options={data.map((province) => ({
				label: province,
				value: province,
			}))}
			{...otherProps}
		/>
    );
}

SelectComponent.propTypes = {
	data: PropTypes.array,
	typeName: PropTypes.string,
	onChangeInput: PropTypes.func,
};

SelectComponent.defaultProps = {
	data: [],
	onChangeInput: () => null,
};

export default React.memo(SelectComponent);
