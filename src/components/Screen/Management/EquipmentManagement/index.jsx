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
import { Tooltip } from "antd";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { SnippetsOutlined, SyncOutlined } from "@ant-design/icons";

// Base
import ModalBase from "../../../Base/Modal";

// Component
import ItemEquipmentManagement from "./ItemEquipmentManagement";

// selector
import selectorDevice from "../../../../cores/selector/selectorDevice";

// Custom hook
import useDispatchCore from "../../../../cores/hooks/useDispathCore";

// Img
import option from "../../../Img/option_1.png";

// Style
import styles from "./Styles/index.module.scss";
import ModalAddDevice from "./ModalAddDevice";

function EquipmentManagement() {
	const dispatch = useDispatchCore();
	// Danh sách thiết bị.
	const optionsDevicePost = useSelector(selectorDevice);

	const [openModal, setOpenModal] = React.useState(false);

	const onClickAddDevice = () => {
		setOpenModal(!openModal);
	};

	const onClickRefresh = () => {
		const params = { limit: 100, page: 1 };
		dispatch.dispatchCore(dispatch.TYPE.Device, dispatch.METHOD.GET_LIST, {}, params, {}, null, null); // get danh sách thiết bị
	};

    return(
        <div className={styles.wrap}>
	        <div className={styles.contentTop}>
		         <span className={styles.titleWrapContent} style={{ color: '#fcac87' }}>
			        Quản lý thiết bị
		        </span>
		        <div className={styles.contentTopWrapIcon}>
			        <Tooltip placement="bottom" title="Thêm mới thiết bị">
				        <div className={classNames(styles.icon, styles.iconSync)} onClick={onClickAddDevice}>
					        <img src={option} alt='' style={{ width: '15px', height: '15px' }} />
				        </div>
			        </Tooltip>
			        <Tooltip placement="bottom" title="Làm mới">
				        <div className={classNames(styles.icon, styles.iconSync)} onClick={onClickRefresh}>
					        <SyncOutlined />
				        </div>
			        </Tooltip>
			        <div className={styles.icon}>
				        <SnippetsOutlined style={{ color: '#fcac87' }} />
			        </div>
		        </div>
	        </div>
	        <div className={styles.contentBottom}>
		        {
			        optionsDevicePost && optionsDevicePost.length > 0 ? optionsDevicePost.map((item) => <ItemEquipmentManagement item={item} key={item.id} />) : <p>Chưa có dữ liệu!</p>
		        }
	        </div>
	        <ModalAddDevice openModal={openModal} onCloneModal={onClickAddDevice} />
        </div>
    );
}

export default EquipmentManagement;
