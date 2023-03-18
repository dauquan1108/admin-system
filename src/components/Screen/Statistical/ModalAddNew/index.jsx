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
import { Button } from 'antd';
import { PlusCircleOutlined } from "@ant-design/icons";

// Component
import Modal from "./Modal";

// Style
import styles from './Styles/index.module.scss';

function WrapModalAddNew() {
	const [isModal, setIsModal] = React.useState(false);

	const onShowModal = () => {
		setIsModal(true);
	};

	const onCloseModal = () => {
		setIsModal(false);
	}

    return(
        <div className={styles.wrapModalAddNew}>
	        <Button type="primary" onClick={onShowModal} icon={<PlusCircleOutlined />}>
		        Thêm mới
	        </Button>
	        <Modal isModal={isModal} onCloseModal={onCloseModal} />
        </div>
    );
}

export default React.memo(WrapModalAddNew);
