/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 1/16/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import { Select, Tag } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

// Style
import styles from './Styles/index.module.scss';

const options = [
	{id: '1', value: 'day', label: 'Theo ngày'},
	{id: '2', value: 'month', label: 'Theo tháng'},
	{id: '3', value: 'year', label: 'Theo năm'},
];

function SelectOption() {
	const [text, setText] = React.useState("");

	const onChangeDevice = (value) => {
		let textValue;
		if (value === 'day') {
			textValue = 10000000000;
		} else if (value === 'month') {
			textValue = 100000000000000;
		} else if (value === 'year') {
			textValue = 100000000000000000000;
		}
		const valueNew = `${textValue}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		setText(valueNew);
	};

    return(
        <div className={styles.wrapSelectOption}>
	        <Tag color={'geekblue'} className={styles.title}>
		        Doanh thu
	        </Tag>
	        <Select
		        suffixIcon={<CaretDownOutlined />}
		        size="middle"
		        defaultValue={options[0].label}
		        onChange={onChangeDevice}
		        style={{
			        width: 120,
		        }}
		        options={options}
	        />
	        { text && <Tag color='geekblue' className={styles.text}>{text} vnđ</Tag> }
        </div>
    );
}

export default SelectOption;
