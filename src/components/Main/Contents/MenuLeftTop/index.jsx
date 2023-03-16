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
import { message } from "antd";
import { useSelector } from "react-redux";
import { CameraOutlined } from "@ant-design/icons";

// Component
import Avatar from "../../../Avatar";
import UpdateUserInformation from "./UpdateUserInformation";

// Reducer
import { selectUserInformation } from "../../../../cores/reducers/userInformation";

// Style
import styles from './Styles/index.module.scss';

function MenuLeftTop(props) {
	const [open, setOpen] = React.useState(false);
	const dataUser = useSelector(selectUserInformation);


	const onclickNotify = () => {
		message.success('Chức năng đang phát triển',5 );
	};

	const onclickIconCamera = () => {
		setOpen(!open);
	};

    return(
    	<React.Fragment>
		    <div className={styles.wrapMenuLeftTop}>
			    <div className={styles.wrapAvatar}>
				    <Avatar url={dataUser && dataUser.avatar || ''} size={100} />
				    <div className={styles.iconCamera} onClick={onclickIconCamera}>
					    <CameraOutlined style={{ fontSize: '18px' }} />
				    </div>
			    </div>
			    <span className={styles.name}>
			    {dataUser && dataUser.name || ''}
			</span>
		    </div>
		    <UpdateUserInformation open={open} onCloneModal={onclickIconCamera} />
	    </React.Fragment>
    );
}

MenuLeftTop.propTypes = {
};

MenuLeftTop.defaultProps = {
};

export default React.memo(MenuLeftTop);
