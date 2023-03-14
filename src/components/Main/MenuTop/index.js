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
import PropTypes from 'prop-types';
import { Button, Dropdown } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from "@ant-design/icons";

// Component
import Avatar from '../../Avatar';

// Style
import styles from  './Styles/index.module.scss';

const items = [
	{
		key: '1',
		label: (
			<div className={styles.wrapLogout}>
				<PoweroffOutlined />
				<span className={styles.text}>Đăng xuất</span>
			</div>
		),
	},
];

function MenuTop(props) {
    return(
	    <div className={styles.menuTop}>
		    <div />
		    <Avatar url='https://i.pinimg.com/564x/b3/ac/d9/b3acd9852dcb091868874a6534f3e2cd.jpg' className={styles.contentAvatar} />
	    </div>
    );
}

MenuTop.propTypes = {
};

MenuTop.defaultProps = {
};

export default MenuTop;
