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
import classNames from "classnames";
// import PropTypes from 'prop-types';
import { message, Tooltip } from "antd";
import { SnippetsOutlined, SyncOutlined } from "@ant-design/icons";

// Component
import ItemCustomerFeeManagement from "./ItemCustomerFeeManagement";

// Data
import useModalAddNew from "../../Statistical/ModalAddNew/useModalAddNew";

// Style
import styles from "./Styles/index.module.scss";

// Img
import option from "../../../Img/option_2.png";

function CustomerFeeManagement(props) {
	const {
		optionsPercentBank,
	} = useModalAddNew();

	const onClick = () => {
		message.success('Chức năng đang phát triển',5 );
	};

    return(
        <div className={styles.wrap}>
	        <div className={styles.contentTop}>
		         <span className={styles.titleWrapContent} style={{ color: '#fcac87' }}>
			          Quản lý % phí thu khách
		        </span>
		        <div className={styles.contentTopWrapIcon}>
			        <Tooltip placement="bottom" title="Cập nhật thông tin">
				        <div className={classNames(styles.icon, styles.iconSync)} onClick={onClick}>
					        <img src={option} alt='' style={{ width: '15px', height: '15px' }} />
				        </div>
			        </Tooltip>
			        <Tooltip placement="bottom" title="Làm mới">
				        <div className={classNames(styles.icon, styles.iconSync)} onClick={onClick}>
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
			        optionsPercentBank.length > 0 && optionsPercentBank.map((item) => <ItemCustomerFeeManagement item={item} key={item.id} />)
		        }
	        </div>
        </div>
    );
}

// CustomerFeeManagement.propTypes = {};
//
// CustomerFeeManagement.defaultProps = {};

export default CustomerFeeManagement;
