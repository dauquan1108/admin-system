/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 1/15/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import { message, Tooltip } from "antd";

// Style
import styles from './Styles/index.module.scss';

// Img
import notification from "../../../Img/notification.png";

function MenuTop(props) {
	const onclickNotify = () => {
		message.success('Chức năng đang phát triển',5 );
	};

    return(
	    <div className={styles.menuTop}>
		    <Tooltip placement="bottom" title="Thông báo">
		        <img src={notification} alt='iconNotification' onClick={onclickNotify} className={styles.iconNotify} />
		    </Tooltip>
	    </div>
    );
}

MenuTop.propTypes = {
};

MenuTop.defaultProps = {
};

export default MenuTop;
