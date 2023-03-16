/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 3/16/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from "antd";

// Style
import styles from './Styles/index.module.scss';

// Img
import close from "../../../../Img/close.png";
import classNames from "classnames";

function UpdateUserInformation(props) {
	const { open, onCloneModal } = props;

	const [active, setActive] = React.useState(true);

	const onClickEditAvatar = () => {
		setActive(true);
	};
	const onClickEditUserInformation = () => {
		setActive(false);
	};

    return(
	    <Modal
		    open={open}
		    width={600}
		    onCancel={onCloneModal}
		    title={active ? "Cập nhật avatar" : "Cập nhật thông tin cá nhân"}
		    wrapClassName={styles.modalUpdateUserInformation}
		    closeIcon={<img src={close} alt="" width='12px' />}
		    footer={null}
	    >
		    <div className={styles.wrapBtn}>
				<span className={classNames(styles.text, active && styles.textActive)} onClick={onClickEditAvatar}>
					Chỉnh sửa avatar
				</span>
			    <span className={classNames(styles.text, !active && styles.textActive)} onClick={onClickEditUserInformation}>
					Chỉnh sửa thông tin cá nhân
				</span>
		    </div>
		    <div className={styles.content} />
	    </Modal>
    );
}

UpdateUserInformation.propTypes = {
	open: PropTypes.bool,
	onCloneModal: PropTypes.func,
};

UpdateUserInformation.defaultProps = {
	PropTypes: false,
	onCloneModal: () => null,
};

export default React.memo(UpdateUserInformation);
