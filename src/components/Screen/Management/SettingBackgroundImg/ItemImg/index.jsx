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
import { useDispatch } from 'react-redux';

// Reducers
import { updateBackgroundImg } from "../../../../../cores/reducers/backgroundImg"


// Style
import styles from "./Styles/index.module.scss";

// img
import check from "../../../../Img/check.png";
import checkNot from "../../../../Img/checkNot.png";

function ItemImg(props) {
	const { className, value } = props;
	const dispatch = useDispatch();
	const { img, status, id } = value;

	const onClickItem = () => {
		dispatch(updateBackgroundImg(value));
	};

    return(
        <div className={classNames(styles.wrapItemImg, className)} onClick={onClickItem}>
	        <img src={img} alt='' className={styles.img} />
	        <img src={status ? check : checkNot} alt='' className={styles.icon} />
        </div>
    );
}

ItemImg.propTypes = {
	className: PropTypes.string,
	value: PropTypes.object,
};

ItemImg.defaultProps = {
	value: {},
};

export default React.memo(ItemImg);
