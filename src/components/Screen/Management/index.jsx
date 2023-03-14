/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 3/12/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
	SyncOutlined,
	PieChartOutlined,
	SnippetsOutlined,
	AreaChartOutlined,
	BarChartOutlined
} from "@ant-design/icons";

// Component
import WrapItemManagement from "./WrapItem";
import EmployeeManager from "./EmployeeManager";
import SettingBackgroundImg from "./SettingBackgroundImg";

// Style
import styles from "./Styles/index.module.scss";
import RevenueManagement from "./RevenueManagement";
import EquipmentManagement from "./EquipmentManagement";
import BankFeeManagement from "./BankFeeManagement";
import CustomerFeeManagement from "./CustomerFeeManagement";

function Management() {
    return(
        <div className={styles.wrapManagement}>
	        <div className={styles.contentManagementTop}>
		        <WrapItemManagement
			        classNameContent={styles.content}
			        className={classNames(styles.wrapContentItem_1, styles.blur)}
		        >
			        <RevenueManagement />
		        </WrapItemManagement>

		        <WrapItemManagement
		            classNameContent={styles.content}
		            className={classNames(styles.wrapContentItem_2, styles.blur)}
		        >
			        <EquipmentManagement />
		        </WrapItemManagement>

		        <WrapItemManagement
			        classNameContent={styles.content}
			        className={classNames(styles.wrapContentItem_3, styles.blur)}
		        >
			        <BankFeeManagement />
		        </WrapItemManagement>

		        <WrapItemManagement
		            classNameContent={styles.content}
		            className={classNames(styles.wrapContentItem_4, styles.blur)}
		        >
			        <CustomerFeeManagement />
		        </WrapItemManagement>
	        </div>
	        <div className={styles.contentManagementBottom}>
		        <WrapItemManagement className={classNames(styles.wrapContentItemBottomLeft, styles.blur)}>
			        <SettingBackgroundImg />
		        </WrapItemManagement>
		        <WrapItemManagement className={classNames(styles.wrapContentItemBottomRight, styles.blur)}>
			        <EmployeeManager />
		        </WrapItemManagement>
	        </div>
        </div>
    );
}

// Management.propTypes = {};
//
// Management.defaultProps = {};

export default Management;
