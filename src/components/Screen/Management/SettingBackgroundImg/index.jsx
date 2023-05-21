/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 3/12/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import { useSelector } from 'react-redux';

// Component
import ItemImg from "./ItemImg";

// Reducers
import { getLitBackgroundImg } from "../../../../cores/reducers/backgroundImg"

// Style
import styles from "./Styles/index.module.scss";

function SettingBackgroundImg(props) {
	const { className } = props;
	const listBackgroundImg = useSelector(getLitBackgroundImg);

    return(
        <div className={classNames(styles.wrapSettingBackgroundImg, className)}>
	         <div className={styles.title}>
		         <span>Quản lý hình nền của bạn</span>
			 </div>
	        <div className={styles.contentList}>
		        {
			        listBackgroundImg.length > 0 && listBackgroundImg.map((item) => <ItemImg key={item.id} value={item} />)
		        }
	        </div>
        </div>
    );
}

SettingBackgroundImg.propTypes = {
	className: PropTypes.string,
};

SettingBackgroundImg.defaultProps = {

};

export default SettingBackgroundImg;
