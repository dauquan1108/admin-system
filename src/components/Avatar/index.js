/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 1/16/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

// Style
import styles from './Styles/index.module.scss';

// Img
import avatarDefault from '../Img/avatar.jpg';

function Avatar(props) {
	const { url, size, className } = props;
    return(
	    <div className={ClassNames(styles.wrapAvatar, className)} style={{ width: size, height: size }}>
	        <img src={url || avatarDefault } alt='avatar' className={styles.avatar} />
        </div>
    );
}

Avatar.propTypes = {
	url: PropTypes.string.isRequired,
	className: PropTypes.string,

	size: PropTypes.number,
};

Avatar.defaultProps = {
	url: '',
	size: 40, // Todo: QuanDX kích thước avatar mặc định là 40 X 40
};

export default Avatar;
