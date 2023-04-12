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
import { Select } from 'antd';
import PropTypes from 'prop-types';
import classNames from "classnames";

// Style
import styles from './Styles/index.module.scss';

function SelectComponent(props) {
	const { title, obligatory, typeName, className, optionsData } = props;

	return(
		<div className={classNames(styles['input-select-wrap'], className)}>
			{title && <span className={styles['input-select-title']}>{title}{!obligatory && ':'}{obligatory && <span className={styles['input-select-obligatory']}>*</span>}</span>}
			<Select
				size='large'
				labelInValue
				defaultValue={{
					value: optionsData[0].value,
					label: optionsData[0].label,
				}}
				// options={[{ value: 'Nam', label: 'Nam' }, { value: 'Nữ', label: 'Nữ' }]}
				options={optionsData}
			/>
		</div>
	);
}

SelectComponent.propTypes = {
	obligatory: PropTypes.bool,
	title: PropTypes.string,
	className: PropTypes.string,
	placeholder: PropTypes.string,
	optionsData: PropTypes.array,
	onSelectDevicePost: PropTypes.func,
};

SelectComponent.defaultProps = {
	obligatory: false,
	optionsData: [],
	onSelectDevicePost: () => null,
};

export default React.memo(SelectComponent);
