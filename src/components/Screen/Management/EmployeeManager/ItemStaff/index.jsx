/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 3/13/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import { Button, message, Tooltip } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

// Component
import Avatar from "../../../../Avatar";

// Style
import styles from "./Styles/index.module.scss";

function ItemStaff(props) {
	const { value, className } = props;

	const onClickEdit = () => {
		message.success('Chức năng đang phát triển',5 );
	};

    return(
        <div className={classNames(styles.wrap, className)}>
	        <div className={styles.wrapLeft}>
		        <Avatar url={value.avatar || ""} className={styles.avatar} />
		        <span className={styles.name}>{value.name || 'Chưa có dữ liệu'}</span>
	        </div>
	        <div className={styles.wrapContent}>
		        <span>{value.position || 'Chưa có dữ liệu'}</span>
		        <span>{value.phone || 'Chưa có dữ liệu'}</span>
	        </div>
	        <div className={styles.wrapRight}>
		        <Button type="primary" onClick={onClickEdit}>Chỉnh sửa</Button>
		        <Tooltip placement="bottom" title="Thông tin chi tiết">
		            <MoreOutlined className={styles.iconOption} onClick={onClickEdit} />
		        </Tooltip>
	        </div>
        </div>
    );
}

ItemStaff.propTypes = {
	value: PropTypes.object,
	className: PropTypes.string,
};

ItemStaff.defaultProps = {
	value: {},
};

export default ItemStaff;
