/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 1/6/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import "dayjs/locale/vi";
import PropTypes from 'prop-types';

// Component
import ContentModal from "./ContentModal";

// Base
import ModalBase from "../../../../Base/Modal";

// Style
import styles from './Styles/index.module.scss';

function ModalAddNew(props) {
	const { isModal, onCloseModal } = props;

	return(
		<ModalBase
			centered
			width={1000}
			open={isModal}
			destroyOnClose
			maskClosable={false}
			onCancel={onCloseModal}
			title="Thêm mới giao dịch"
			wrapClassName={styles['modal-add-new']}
			footer={null}
		>
			{ isModal && <ContentModal onCloseModal={onCloseModal} /> }
		</ModalBase>
    );
}

ModalAddNew.propTypes = {
	isModal: PropTypes.bool,
	onCloseModal: PropTypes.func,
};

ModalAddNew.defaultProps = {
	isModal: false,
	onCloseModal: () => null,
};

export default React.memo(ModalAddNew);
