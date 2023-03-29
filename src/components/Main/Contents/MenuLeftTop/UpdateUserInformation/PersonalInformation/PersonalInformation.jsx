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
// import PropTypes from 'prop-types';
import classNames from "classnames";
import { Button, Select } from 'antd';

// Shared
import DatePickerComponent from "../../../../../Screen/Statistical/Shared/DatePickerComponent";

// Component
import InputPersonalInformation from "./Share/InputPersonalInformation";

// Style
import styles from "./Styles/index.module.scss";


function PersonalInformation(props) {

    return(
        <div className={styles['wrap-personal-information']}>
	        <div className={styles.wrap}>
		        <InputPersonalInformation
			        className={classNames(styles.flex_1, styles.content_right)}
			        title='Họ và tên:'
			        placeholder='Nhập họ và tên...'
			        required
		        />
		        <div className={classNames(styles.flex_1, styles.content_left)}>
			        <div className={styles.wrap}>
				        <div className={classNames(styles['wrap-content'], styles.flex_1, styles.content_right)}>
					         <span className={styles['wrap-content-title']}>
						        Giới tính:
					        </span>
					        <Select
						        size='large'
						        labelInValue
						        defaultValue={{
							        value: 'Nam',
							        label: 'Nam',
						        }}
						        // onChange={handleChange}
						        options={[{ value: 'Nam', label: 'Nam' }, { value: 'Nữ', label: 'Nữ' }]}
					        />
				        </div>
				        <div className={classNames(styles['wrap-content'], styles.flex_1, styles.content_left)}>
							<span className={styles['wrap-content-title']}>
							    Ngày sinh:
							</span>
							<DatePickerComponent
								placeholder="Ngày sinh"
							    // style={{width: '100%'}}
							/>
				        </div>
			        </div>
		        </div>
	        </div>
	        <div className={styles.wrap}>
		        <InputPersonalInformation
			        title='Email:'
			        placeholder='Nhập email...'
			        className={classNames(styles.flex_2, styles.content_right)}
		        />
		        <InputPersonalInformation
			        title='Số điện thoại:'
			        placeholder='Nhập số điện thoại...'
			        className={classNames(styles.flex_1, styles.content_left)}
		        />
	        </div>
	        <InputPersonalInformation
		        title='Thông tin thêm:'
		        textArea
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
