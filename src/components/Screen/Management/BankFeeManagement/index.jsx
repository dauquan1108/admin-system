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
import { message } from "antd";
import classNames from "classnames";
// import PropTypes from 'prop-types';
import { SnippetsOutlined, SyncOutlined, MoreOutlined } from "@ant-design/icons";

// Component
import ItemBankFeeManagement from "./ItemBankFeeManagement";

// Data
import useModalAddNew from "../../Statistical/ModalAddNew/useModalAddNew";

// Style
import styles from "./Styles/index.module.scss";

// Img
import option from "../../../Img/option_3.png";

function BankFeeManagement(props) {
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
			          Quản lý % phí ngân hàng
		        </span>
		        <div className={styles.contentTopWrapIcon}>
			        <div className={classNames(styles.icon, styles.iconSync)} onClick={onClick}>
				        {/*<MoreOutlined style={{ color: '#fcac87' }} />*/}
				        <img src={option} alt='' style={{ width: '15px', height: '15px' }} />
			        </div>
			        <div className={classNames(styles.icon, styles.iconSync)} onClick={onClick}>
				        <SyncOutlined />
			        </div>
			        <div className={styles.icon}>
				        <SnippetsOutlined style={{ color: '#fcac87' }} />
			        </div>
		        </div>
	        </div>
	        <div className={styles.contentBottom}>
		        {
			        optionsPercentBank.length > 0 && optionsPercentBank.map((item) => <ItemBankFeeManagement item={item} key={item.id} />)
		        }
	        </div>
        </div>
    );
}

// BankFeeManagement.propTypes = {};
//
// BankFeeManagement.defaultProps = {};

export default BankFeeManagement;
