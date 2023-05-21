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
import classNames from "classnames";
import { message } from "antd";

// Custom hooks
import useDispatchCore from "../../../../../cores/hooks/useDispathCore";

// Style
import styles from "./Styles/index.module.scss";

// Img
import editIcon from "../../../../Img/edit.png";
import deleteIcon from "../../../../Img/delete.png";

function ItemEquipmentManagement(props) {
	const { item } = props;

	const dispatch = useDispatchCore();

	const onFail = () => {
		message.error(`Đã sảy ra lỗi khi xóa thiết bị: ${item.value || ""}`,5 );
	};

	const onclickEdit = () => {
		message.success('Chức năng đang phát triển',5 );
	};

	const onclickDeleteItem = () => {
		const id = item._id;
		dispatch.dispatchCore(dispatch.TYPE.Device, dispatch.METHOD.REMOTE, {id}, {}, {}, null, onFail); // get danh sách thiết bị
	};

    return(
    	<React.Fragment>
		    {
			    item &&
			    <div className={styles.wrapItem}>
				    <span className={styles.text} title={item.value || ""}>
					    {item.value || ""}
				    </span>
				    <div className={styles.wrapIcon}>
					    <img src={editIcon} className={classNames(styles.icon, styles.iconEdit)} alt=''  onClick={onclickEdit} />
					    <img src={deleteIcon} className={styles.icon} alt='' onClick={onclickDeleteItem} />
				    </div>
			    </div>
		    }
	    </React.Fragment>
    );
}

ItemEquipmentManagement.propTypes = {
	item: PropTypes.object,
};

ItemEquipmentManagement.defaultProps = {
	item: {},
};

export default React.memo(ItemEquipmentManagement);
