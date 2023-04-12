/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 3/26/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import { Button } from 'antd';
// import PropTypes from 'prop-types';
import classNames from "classnames";

// Shared
import { typeName } from "./Share";

// Component
import InputCustom from "./ComponentInputs/InputCustom";
import InputTextArea from "./ComponentInputs/InputTextArea";
import usePersonalInformation from "./usePersonalInformation";
import SelectComponent from "./ComponentInputs/SelectComponent";
import DatePickerComponent from "./ComponentInputs/DatePickerComponent";

// Style
import styles from "./Styles/index.module.scss";

function PersonalInformation(props) {
	const {
		dataPersonal,
		setDataPersonal,
		messageError,
		setMessageError,
	} = usePersonalInformation();

	const { TYPE_PHONE, TYPE_EMAIL, TYPE_DATE_BIRTH, TYPE_FULL_NAME, TYPE_SEX, TYPE_EXTEND } = typeName;

    return(
        <div className={styles['wrap-personal-information']}>
	        <div className={styles.wrap}>
		        <InputCustom
			        title='Họ và tên'
			        obligatory
			        typeName={TYPE_FULL_NAME}
			        placeholder='Nhập họ và tên...'
			        className={classNames(styles.flex_1, styles.content_right)}
		        />
		        <div className={classNames(styles.flex_1, styles.content_left)}>
			        <div className={styles.wrap}>
				        <SelectComponent
					        title='Giới tính'
					        typeName={TYPE_SEX}
					        className={classNames(styles.flex_1, styles.content_right)}
					        optionsData={[{ value: 'Nam', label: 'Nam' }, { value: 'Nữ', label: 'Nữ' }]}
				        />
				        <DatePickerComponent
					        className={classNames(styles.flex_1, styles.content_left)}
				            title='Ngày sinh'
					        placeholder='Ngày sinh...'
					        typeName={TYPE_DATE_BIRTH}
				        />
			        </div>
		        </div>
	        </div>

	        <div className={styles.wrap}>
		        <InputCustom
			        title='Email'
			        obligatory
			        typeName={TYPE_EMAIL}
			        placeholder='Nhập email...'
			        className={classNames(styles.flex_2, styles.content_right)}
		        />
		        <InputCustom
			        title='Số điện thoại'
			        obligatory
			        typeName={TYPE_PHONE}
			        placeholder='Nhập số điện thoại....'
			        className={classNames(styles.flex_1, styles.content_left)}
		        />
	        </div>

	        <InputTextArea
		        typeName={TYPE_EXTEND}
		        maxLength={200}
		        title='Thông tin thêm'
		        placeholder='Nhập thông tin thêm...'
	        />

	        <div className={styles['wrap-personal-content-btn']}>
				<Button type="primary" size='large'>Lưu</Button>
	        </div>
        </div>
    );
}

// PersonalInformation.propTypes = {};
//
// PersonalInformation.defaultProps = {};

export default PersonalInformation;
