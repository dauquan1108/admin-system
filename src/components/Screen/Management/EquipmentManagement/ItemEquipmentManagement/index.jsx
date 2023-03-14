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
import PropTypes from 'prop-types';
import {Button, message} from "antd";

// Style
import styles from "./Styles/index.module.scss";

function ItemEquipmentManagement(props) {
	const { item } = props;

	const onclickDeleteItem = () => {
		message.success('Chức năng đang phát triển',5 );
	};

    return(
        <div className={styles.wrapItem}>
	        <span className={styles.text}>{item && item.value || ""}</span>
	        <Button type="primary" danger className={styles.btnEdit} onClick={onclickDeleteItem}>Xóa</Button>
        </div>
    );
}

ItemEquipmentManagement.propTypes = {
	item: PropTypes.object,
};

ItemEquipmentManagement.defaultProps = {
	item: {},
};

export default ItemEquipmentManagement;
