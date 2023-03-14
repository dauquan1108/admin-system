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

// Style
import styles from "./Styles/index.module.scss";
import classNames from "classnames";

function WrapItemManagement(props) {
	const { children, className, classNameContent } = props;
    return(
        <div className={classNames(styles.wrapItemManagement, className)}>
	        <div className={classNames(styles.padding_, classNameContent)}>
	            {children}
	        </div>
        </div>
    );
}

WrapItemManagement.propTypes = {
	className: PropTypes.string,
	classNameContent: PropTypes.string,
};

WrapItemManagement.defaultProps = {};

export default WrapItemManagement;
