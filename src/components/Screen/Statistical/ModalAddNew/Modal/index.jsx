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
// import axios from "axios";
import PropTypes from 'prop-types';
import { Modal, message, Button } from 'antd';
import { WarningOutlined } from '@ant-design/icons';

// Component
import ContentModal from "./ContentModal";
import useModalAddNew from "../useModalAddNew";

// Base
import ModalBase from "../../../../Base/Modal";

// Util
// import { API_URL } from "../../../../../utils/Config";

// hooks custom
import useDispatchCore from "cores/hooks/useDispathCore";

// Style
import styles from './Styles/index.module.scss';

const { confirm } = Modal;

function ModalAddNew(props) {
	const { isModal, onCloseModal } = props;
	const dispatch = useDispatchCore();

	// const {
	// 	data,
	// 	messageError,
	// 	setMessageError,
	// 	checkValidateAll,
	// } = useModalAddNew();

	// Loading
	// const [confirmLoading, setConfirmLoading] = React.useState(false);

	// const resetValue = () => {
	// 	setData({
	// 		...data,
	// 		[typeName.accountName]: '', // Chủ thẻ
	// 	});
	// };

	const onCancelModal = () => {
		// resetValue();
		onCloseModal();
	};
	//
	// const onFinally = (status) => {
	// 	setConfirmLoading(status);
	// };
	//
	// const onSuccess = () => {
	// 	onCancelModal();
	// 	onFinally(false);
	// 	message.success('Thêm mới khách hàng thành công',5 );
	// };
	//
	// const onError = () => {
	// 	onFinally(false);
	// 	confirm({
	// 		okText: 'Thử lại',
	// 		icon: <WarningOutlined style={{ color: 'red', fontSize: 35 }} />,
	// 		cancelText: 'Đóng',
	// 		title: 'Thêm khách hàng không thành công.',
	// 		content: 'Rất tiếc vị sự bất tiện này, bạn có thể thử lại.',
	// 		onOk() {onCallApi()},
	// 		onCancel() {},
	// 	});
	// };
	//
	// const onCallApi = () => {
	// 	onFinally(true);
	// 	dispatch.dispatchCore(dispatch.TYPE.Transaction, dispatch.METHOD.ADD, data, {}, {}, onSuccess, onFinally); // ADD
	// };

	// const callApiAdd = () => {
	// 	axios({
	// 		method: "post",
	// 		url: API_URL,
	// 		data: {...data},
	// 	}).then((response) => {
	// 		if (response.status === 200) {
	// 			onSuccess();
	// 		}
	// 	}).catch((error) => {
	// 		onError();
	// 		throw new Error("Thêm khách hàng mới thất bại ======== [[ Error ]] ==========>:", error);
	// 	}).finally(() => {
	// 		onFinally();
	// 	});
	// };

	// const onOkModal = () => {
	// 	console.log('data: ========data ngoai========>', data); // Log QuanDX fix bug
	// 	console.log('messageError: ================>', messageError); // Log QuanDX fix bug
	// 	setMessageError(checkValidateAll);
	// 	// const { devicePost, accountName, workTimestamp, cardNumber, money, limitCard,percentBank, percentCustomer, type } = data;
	// 	// if (devicePost && workTimestamp && accountName && cardNumber && money && percentBank && percentCustomer && type) {
	// 	// 	onCallApi();
	// 	// } else {
	// 	// 	Modal.warning({
	// 	// 		title: 'Thông tin khách hàng không được để trống!',
	// 	// 		content: `Vui lòng nhập đầy đủ:
	// 	// 		${!devicePost ? 'Tên thiết bị, ' : ''}
	// 	// 		${!workTimestamp ? 'Ngày làm, ' : ''}
	// 	// 		${!accountName ? 'Chủ thẻ, ' : ''}
	// 	// 		${!cardNumber ? 'Số thẻ, ' : ''}
	// 	// 		${!money ? 'Số tiền, ' : ''}
	// 	// 		${!limitCard ? 'Hạn mức, ' : ''}
	// 	// 		${!percentBank ? '% Phí ngân hàng, ' : ''}
	// 	// 		${!percentCustomer ? '% Phí thu khách, ' : ''}
	// 	// 		${!type ? 'Hình thức.' : ''}`
	// 	// 	});
	// 	// }
	// };

	return(
		<ModalBase
			centered
			width={900}
			open={isModal}
			destroyOnClose
			maskClosable={false}
			onCancel={onCancelModal}
			title="Thêm mới khách hàng"
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
