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

'use strict';

import React from 'react';
// import PropTypes from 'prop-types';
import classNames from "classnames";
import { message, Tooltip } from "antd";
import { PieChartOutlined, SyncOutlined } from "@ant-design/icons";

// Style
import styles from "./Styles/index.module.scss";

function RevenueManagement(props) {
	const onclickReset = () => {
		message.success('Chức năng đang phát triển',5 );
	};

    return(
        <div className={styles.wrapContent}>
	        <div className={styles.contentTop}>
		         <span className={styles.titleWrapContent} style={{ color: '#8a77ea' }}>
		            Quản lý doanh thu
	            </span>
		        <div className={styles.contentTopWrapIcon}>
			        <Tooltip placement="bottom" title="Làm mới">
				        <div className={classNames(styles.icon, styles.iconSync)} onClick={onclickReset}>
					        <SyncOutlined />
				        </div>
			        </Tooltip>
			        <div className={styles.icon}>
				        <PieChartOutlined style={{ color: '#8a77ea' }} />
			        </div>
		        </div>
	        </div>
	        <div className={styles.contentBottom}>
		        <div className={styles.contentItem}>
			        <p className={styles.textContentItemTitle}>
				        Doanh thu theo ngày
			        </p>
			        <span className={styles.textContentItemText}>
						1,000,000 vnđ
					</span>
		        </div>
		        <div className={styles.contentItem}>
			        <p className={styles.textContentItemTitle}>
				        Doanh thu theo tháng
			        </p>
			        <span className={styles.textContentItemText}>
					    1,000,000,000 vnđ
					</span>
		        </div>
		        <div className={styles.contentItem}>
			        <p className={styles.textContentItemTitle}>
				        Doanh thu theo năm
			        </p>
			        <span className={styles.textContentItemText}>
					    1,000,000,000,000 vnđ
					</span>
		        </div>
	        </div>
        </div>
    );
}

// RevenueManagement.propTypes = {};
//
// RevenueManagement.defaultProps = {};

export default RevenueManagement;
