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
import axios from "axios";
import PropTypes from 'prop-types';
import classNames from "classnames";
import { Modal, message, Button } from 'antd';
import { WarningOutlined } from '@ant-design/icons';

// Component
import useModalAddNew from "../useModalAddNew";
import AutoCompleteCustom from "../AutoCompleteCustom";
import InputComponent from "../../Shared/InputComponent";
import InputNumberComponent from "../../Shared/InputNumberComponent";
import InputTextAreaComponent from "../../Shared/InputTextAreaComponent";
import InputComponentAccountName from "../../Shared/InputComponentAccountName";

// Shared
import { typeName } from '../../Shared/Synthetic';
import SelectComponent from "../../Shared/SelectComponent";
import DatePickerComponent from '../../Shared/DatePickerComponent';

// Util
// import { API_URL } from "../../../../../utils/Config";

// hooks custom
import useDispatchCore from "cores/hooks/useDispathCore";


// Style
import styles from './Styles/index.module.scss';

// image
import close from '../../../../Img/close.png';

const { confirm } = Modal;

function ModalAddNew(props) {
	const { isModal, onCloseModal } = props;
	const dispatch = useDispatchCore();

	const {
		data,
		setData,
		isDisabled,
		setDisabled,
		onChangeTag,
		onDatePicker,
		onChangeInput,
		provinceDataType,
		optionsDevicePost,
		optionsPercentBank,
	} = useModalAddNew();

	// Loading
	const [confirmLoading, setConfirmLoading] = React.useState(false);

	const resetValue = () => {
		setData({
			...data,
			[typeName.accountName]: '', // Chủ thẻ
		});
	};

	const onCancelModal = () => {
		resetValue();
		onCloseModal();
	};

	const onFinally = (status) => {
		setConfirmLoading(status);
	};

	const onSuccess = () => {
		onCancelModal();
		onFinally(false);
		message.success('Thêm mới khách hàng thành công',5 );
	};

	const onError = () => {
		onFinally(false);
		confirm({
			okText: 'Thử lại',
			icon: <WarningOutlined style={{ color: 'red', fontSize: 35 }} />,
			cancelText: 'Đóng',
			title: 'Thêm khách hàng không thành công.',
			content: 'Rất tiếc vị sự bất tiện này, bạn có thể thử lại.',
			onOk() {onCallApi()},
			onCancel() {},
		});
	};

	const onCallApi = () => {
		onFinally(true);
		dispatch.dispatchCore(dispatch.TYPE.Transaction, dispatch.METHOD.ADD, data, {}, {}, onSuccess, onFinally); // ADD
	};

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

	const onOkModal = () => {
		const { devicePost, accountName, workTimestamp, cardNumber, money, limitCard,percentBank, percentCustomer, type } = data;
		if (devicePost && workTimestamp && accountName && cardNumber && money && percentBank && percentCustomer && type) {
			onCallApi();
		} else {
			setDisabled(true);
			Modal.warning({
				title: 'Thông tin khách hàng không được để trống!',
				content: `Vui lòng nhập đầy đủ: 
				${!devicePost ? 'Tên thiết bị, ' : ''} 
				${!workTimestamp ? 'Ngày làm, ' : ''}
				${!accountName ? 'Chủ thẻ, ' : ''}
				${!cardNumber ? 'Số thẻ, ' : ''}
				${!money ? 'Số tiền, ' : ''}
				${!limitCard ? 'Hạn mức, ' : ''}
				${!percentBank ? '% Phí ngân hàng, ' : ''}
				${!percentCustomer ? '% Phí thu khách, ' : ''}
				${!type ? 'Hình thức.' : ''}`
			});
		}
	};

	return(
		<Modal
			centered
			width={900}
			open={isModal}
			destroyOnClose
			onOk={onOkModal}
			maskClosable={false}
			onCancel={onCancelModal}
			title="Thêm mới khách hàng"
			confirmLoading={confirmLoading}
			wrapClassName={styles.modalAddNew}
			closeIcon={<img src={close} alt="" width='12px' />}
			footer={[
				<Button
					key="cancel"
					type="primary"
					danger size='large'
					onClick={onCancelModal}
				>
					Đóng
				</Button>,
				<Button
					key="ok"
					size='large'
					type="primary"
					onClick={onOkModal}
					disabled={isDisabled || confirmLoading}
					loading={confirmLoading}
				>
					Lưu
				</Button>,
			]}
		>
			<div className={styles.wrap}>
				<div className={classNames(styles.wrapContent, styles._flex2, styles.contentLeft)}>
					<span className={styles.titleText}>Tên thiết bị:</span>
					<AutoCompleteCustom
						isText
						style={{ width: '100%' }}
						setDisabled={setDisabled}
						onChangeInput={onChangeInput}
						typeName={typeName.devicePost}
						optionsData={optionsDevicePost}
						placeholder="Vui lòng nhập tên thiết bị..."
					/>
				</div>
				<div className={classNames(styles.wrapContent, styles._flex1, styles.contentRight)}>
					<span className={styles.titleText}>Ngày làm:</span>
					<DatePickerComponent
						style={{width: '100%'}}
						onDatePicker={onDatePicker}
					/>
				</div>
			</div>

			<div className={styles.wrap}>
				<div className={classNames(styles.wrapContent, styles._flex2, styles.contentLeft)}>
					<span className={styles.titleText}>% Phí ngân hàng: </span>
					<AutoCompleteCustom
						data={data}
						style={{ width: '100%' }}
						setDisabled={setDisabled}
						onChangeInput={onChangeInput}
						typeName={typeName.percentBank}
						optionsData={optionsPercentBank}
						placeholder="Vui lòng nhập % phí ngân hàng..."
					/>
				</div>
				<div className={classNames(styles.wrapContent, styles._flex2)}>
					<span className={styles.titleText}>% Phí thu khách:</span>
					<AutoCompleteCustom
						data={data}
						style={{ width: '100%' }}
						setDisabled={setDisabled}
						onChangeInput={onChangeInput}
						optionsData={optionsPercentBank}
						typeName={typeName.percentCustomer}
						placeholder="Vui lòng nhập % phí thu khách..."
					/>
				</div>
				<div className={classNames(styles.wrapContent, styles._flex1, styles.contentRight)}>
					<span className={styles.titleText}>Hình thức:</span>
					<SelectComponent
						onSelect={onChangeTag}
						data={provinceDataType}
						style={{ width: '100%' }}
					/>
				</div>
			</div>

			<div className={styles.wrap}>
				<div className={classNames(styles.wrapContent, styles._flex1, styles.contentLeft)}>
					<span className={styles.titleText}>Số tiền  làm cho khách:</span>
					<InputNumberComponent
						data={data}
						typeName={typeName.money}
						setDisabled={setDisabled}
						onChangeInput={onChangeInput}
						placeholder="Vui lòng nhập số tiền làm cho khách..."
					/>
				</div>

				<div className={classNames(styles.wrapContent, styles._flex1, styles.contentRight)}>
					<span className={styles.titleText}>Hạn mức:</span>
					<InputNumberComponent
						data={data}
						setDisabled={setDisabled}
						onChangeInput={onChangeInput}
						typeName={typeName.limitCard}
						placeholder="Vui lòng nhập hạn mức..."
					/>
				</div>
			</div>

			<div className={styles.wrap}>
				<div className={classNames(styles.wrapContent, styles._flex1, styles.contentLeft)}>
					<span className={styles.titleText}>Chủ thẻ:</span>
					<InputComponentAccountName
						data={data}
						maxLength={100}
						setDisabled={setDisabled}
						placeholder="Tên chủ thẻ..."
						typeName={typeName.accountName}
						onChangeInput={onChangeInput}
					/>
				</div>

				<div className={classNames(styles.wrapContent, styles._flex1, styles.contentRight)}>
					<samp className={styles.titleText}>Số thẻ là [4 số cuối của thẻ]:</samp>
					<InputComponent
						data={data}
						maxLength={50}
						placeholder="Mã số thẻ..."
						setDisabled={setDisabled}
						onChangeInput={onChangeInput}
						typeName={typeName.cardNumber}
					/>
				</div>
			</div>

			<div>
				<span className={styles.titleText}>Note:</span>
				<InputTextAreaComponent
					maxLength={250}
					setDisabled={setDisabled}
					typeName={typeName.extends}
					onChangeInput={onChangeInput}
					style={{ marginBottom: '25px' }}
				/>
			</div>
		</Modal>
    );
}

ModalAddNew.propTypes = {
	isModal: PropTypes.bool,
	onCloseModal: PropTypes.func,
};

ModalAddNew.defaultProps = {
	isModal: false,
};

export default React.memo(ModalAddNew);
