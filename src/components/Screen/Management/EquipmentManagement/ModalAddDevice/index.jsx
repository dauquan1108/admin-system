/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 4/4/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

// Component
import useModalAddDevice from "./useModalAddDevice";
import InputNumberCustom from "./ComponentInputs/InputNumberCustom";
import InputComponentCustom from "./ComponentInputs/InputCompleteCustom";

// Shared
import { typeName } from "../../../Statistical/Shared/Synthetic";

// Base
import ModalBase from "../../../../Base/Modal";

// Custom hooks
import useDispatchCore from "../../../../../cores/hooks/useDispathCore";

// Style
import styles from "./Styles/index.module.scss";

function ModalAddDevice(props) {
	const { openModal, onCloneModal } = props;

	const {
		data,
		onChangeInput,
		messageError,
		checkValidateAll,
		onfocusInput,
		onCleanData,
	} = useModalAddDevice();

	const dispatch = useDispatchCore();

	const [confirmLoading, setConfirmLoading] = React.useState(false);
	const [isClear, setIsClear] = React.useState(false);

	const updateLoading = (status) => {
		setConfirmLoading(status);
	};

	const onSuccess = () => {
		updateLoading(false);
		onCleanData();
		setIsClear(!isClear);
		message.success('Thêm mới thiết bị thành công',5 );
	};

	const onFinally = () => {
		updateLoading(false);
		message.error('Thêm mới thiết bị thất bại',5 );
	};

	const onOkModal = () => {
		const isError = checkValidateAll();
		isError && updateLoading(true);
		isError && dispatch.dispatchCore(dispatch.TYPE.Device, dispatch.METHOD.ADD, data, {}, {}, onSuccess, onFinally); // ADD
	};

	const onCloneModalComponent = () => {
		onCloneModal();
		updateLoading(false);
	};

    return(
	    <ModalBase
		    centered
		    width={450}
		    open={openModal}
		    onCancel={onCloneModalComponent}
		    title="Thêm mới thiệt bị"
		    footer={null}
	    >
		   <div className={styles['modal-add-device-content-wrap']}>
			   <InputComponentCustom
				   obligatory
				   title='Tên thiết bị'
				   style={{ width: '100%' }}
				   messageError={messageError}
				   onfocusInput={onfocusInput}
				   onChangeInput={onChangeInput}
				   // typeName={typeName.devicePost}
				   isClearData={isClear}
				   typeName='name'
				   placeholder="Vui lòng nhập tên thiết bị..."
			   />

			   <InputNumberCustom
				   obligatory
				   title='% Phí ngân hàng'
				   isClearData={isClear}
				   messageError={messageError}
				   onfocusInput={onfocusInput}
				   onChangeInput={onChangeInput}
				   typeName={typeName.percentBank}
				   placeholder="Vui lòng nhập % phí ngân hàng..."
			   />

			   <InputNumberCustom
				   obligatory
				   title='% Phí thu khách'
				   isClearData={isClear}
				   messageError={messageError}
				   onfocusInput={onfocusInput}
				   onChangeInput={onChangeInput}
				   typeName={typeName.percentCustomer}
				   placeholder="Vui lòng nhập % phí thu khách..."
			   />

			   <div className={styles['wrap-btn']}>
				   <Button
					   key="ok"
					   size='large'
					   type="primary"
					   onClick={onOkModal}
					   disabled={confirmLoading}
				   >
					   { confirmLoading ? <LoadingOutlined/> : "Lưu" }
				   </Button>
			   </div>
		   </div>
	    </ModalBase>
    );
}

ModalAddDevice.propTypes = {
	openModal: PropTypes.bool,
	onCloneModal: PropTypes.func,
};

ModalAddDevice.defaultProps = {
	openModal: false,
	onCloneModal: () => null,
};

export default React.memo(ModalAddDevice);
