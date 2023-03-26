/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 3/26/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import { Modal } from "antd";
import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import styles from "./Styles/index.module.scss";

// Image
import close from "../../Img/close.png";


function ModalBase({ children, wrapClassName ,...otherProps }) {
    return(
	    <Modal
		    wrapClassName={classNames(styles['wrap-modal'], wrapClassName)}
		    closeIcon={<img src={close} alt="" width='12px' />}
		    {...otherProps}
	    >
		    {children}
	    </Modal>
    );
}
ModalBase.propTypes = {
	wrapClassName: PropTypes.string,
};

export default ModalBase;
