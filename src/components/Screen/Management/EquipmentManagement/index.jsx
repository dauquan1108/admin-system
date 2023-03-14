/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 3/14/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import { message } from "antd";
import classNames from "classnames";
// import PropTypes from 'prop-types';
import { SnippetsOutlined, SyncOutlined, MoreOutlined } from "@ant-design/icons";

// Component
import ItemEquipmentManagement from "./ItemEquipmentManagement";

// Data
import useModalAddNew from "../../Statistical/ModalAddNew/useModalAddNew";

// Img
import option from "../../../Img/option_1.png";

// Style
import styles from "./Styles/index.module.scss";

function EquipmentManagement(props) {
	const {
		optionsDevicePost,
	} = useModalAddNew();

	const onClick = () => {
		message.success('Chức năng đang phát triển',5 );
	};

    return(
        <div className={styles.wrap}>
	        <div className={styles.contentTop}>
		         <span className={styles.titleWrapContent} style={{ color: '#fcac87' }}>
			        Quản lý thiết bị
		        </span>
		        <div className={styles.contentTopWrapIcon}>
			        <div className={classNames(styles.icon, styles.iconSync)} onClick={onClick}>
				        <img src={option} alt='' style={{ width: '15px', height: '15px' }} />
			        </div>
			        <div className={classNames(styles.icon, styles.iconSync)} onClick={onClick}>
				        <SyncOutlined />
			        </div>
			        <div className={styles.icon}>
				        <SnippetsOutlined style={{ color: '#fcac87' }} />
			        </div>
		        </div>
	        </div>
	        <div className={styles.contentBottom}>
		        {
			        optionsDevicePost.length > 0 && optionsDevicePost.map((item) => <ItemEquipmentManagement item={item} key={item.id} />)
		        }
	        </div>
        </div>
    );
}

// EquipmentManagement.propTypes = {};
//
// EquipmentManagement.defaultProps = {};

export default EquipmentManagement;
