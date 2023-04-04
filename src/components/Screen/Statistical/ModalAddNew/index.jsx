/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 1/2/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import { Button, Tooltip } from 'antd';
import { useSelector } from "react-redux";
import { PlusCircleOutlined } from "@ant-design/icons";

// Component
import Modal from "./Modal";

// selector
import selectorDevice from "../../../../cores/selector/selectorDevice";

// hooks custom
import useDispatchCore from "../../../../cores/hooks/useDispathCore";

// Style
import styles from './Styles/index.module.scss';

function WrapModalAddNew() {
	const dispatch = useDispatchCore();
	const [isModal, setIsModal] = React.useState(false);

	// Danh sách thiết bị.
	const optionsDevicePost = useSelector(selectorDevice);

	// Call API Lấy danh sách thiết bị
	React.useLayoutEffect(() => {
		const params = { limit: 100, page: 1 };
		dispatch.dispatchCore(dispatch.TYPE.Device, dispatch.METHOD.GET_LIST, {}, params, {}, null, null); // get danh sách thiết bị
	}, []);

	const onShowModal = () => {
		setIsModal(true);
	};

	const onCloseModal = () => {
		setIsModal(false);
	};

    return(
        <div className={styles.wrapModalAddNew}>
	        <Tooltip placement="bottom" title="Thêm mới khách hàng">
		        <Button type="primary" onClick={onShowModal} icon={<PlusCircleOutlined />}>
			        Thêm mới
		        </Button>
	        </Tooltip>
	        { optionsDevicePost.length > 0 && <Modal isModal={isModal} onCloseModal={onCloseModal}/> }
        </div>
    );
}

export default React.memo(WrapModalAddNew);
