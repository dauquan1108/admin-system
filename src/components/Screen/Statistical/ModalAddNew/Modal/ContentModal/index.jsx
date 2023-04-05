/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 4/2/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import { Button, message } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

// Component
import useModalAddNew from "../../useModalAddNew";
import AutoCompleteCustom from "../../AutoCompleteCustom";
import AutoCompleteUserCustom from "../../AutoCompleteUserCustom";

// Shared
import { typeName } from "../../../Shared/Synthetic";
import SelectComponent from "../../../Shared/SelectComponent";
import DatePickerComponent from "../../../Shared/DatePickerComponent";
import InputNumberComponent from "../../../Shared/InputNumberComponent";
import InputSelectComponent from "../../../Shared/inputSelectComponent";
import InputTextAreaComponent from "../../../Shared/InputTextAreaComponent";

// custom hooks
import useDispatchCore from "../../../../../../cores/hooks/useDispathCore";

// Style
import styles from "./Styles/index.module.scss";

function ContentModal(props) {
	const { onCloseModal } = props;

	// Loading
	const [confirmLoading, setConfirmLoading] = React.useState(false);

	const {
		data,
		onChangeInput,
		provinceDataType,
		paymentDataStatus,
		optionsDevicePost,
		optionsPercentBank,
		optionUser,
		dataSelectUser,
		optionUserPhoneNumber,
		optionUserCardNumber,
		onSelectAutoCompleteUser,
		onSelectDevicePost,
		dataSelectDevicePost,
		paymentOption,
		messageError,
		checkValidateAll,
		onfocusInput,
		onCleanData,
		optionsBankName,
		onSelectBankName,
	} = useModalAddNew();

	const dispatch = useDispatchCore();

	const onCancelModal = () => {
		onCloseModal();
	};

	const updateLoading = (status) => {
		setConfirmLoading(status);
	};

	const onSuccess = () => {
		updateLoading(false);
		onCleanData();
		message.success('Thêm mới giao dịch thành công',5 );
	};

	const onFinally = () => {
		updateLoading(false);
		message.error('Thêm mới giao dịch thất bại',5 );
	};

	const onOkModal = () => {
		const isError = checkValidateAll();
		isError && updateLoading(true);
		isError && dispatch.dispatchCore(dispatch.TYPE.Transaction, dispatch.METHOD.ADD, data, {}, {}, onSuccess, onFinally); // ADD
	};

	const disabledPaymentOption = data && data.type && data.type === provinceDataType[1];

    return(
       <div className={styles['content-modal-wrap']}>
	       <div className={styles.wrap}>
		       <AutoCompleteUserCustom
			       obligatory
			       title='Chủ thẻ'
			       className={classNames(styles.wrapContent, styles.contentLeft, styles._flex4)}
			       onSelectAutoComplete={onSelectAutoCompleteUser}
			       dataSelectUser={dataSelectUser}
			       messageError={messageError}
			       onfocusInput={onfocusInput}
			       onChangeInput={onChangeInput}
			       typeName={typeName.accountName}
			       optionsData={optionUser}
			       placeholder="Vui lòng nhập tên chủ thẻ..."
		       />

		       <AutoCompleteUserCustom
			       obligatory
			       title='Số điện thoại'
			       className={classNames(styles.wrapContent, styles.contentLeft, styles._flex2)}
			       onSelectAutoComplete={onSelectAutoCompleteUser}
			       dataSelectUser={dataSelectUser}
			       messageError={messageError}
			       onfocusInput={onfocusInput}
			       onChangeInput={onChangeInput}
			       typeName={typeName.phoneNumber}
			       optionsData={optionUserPhoneNumber}
			       placeholder="Vui lòng nhập số điện thoại..."
		       />

		       <AutoCompleteUserCustom
			       obligatory
			       title='4 số cuối của thẻ'
			       className={classNames(styles.wrapContent, styles._flex2)}
			       onSelectAutoComplete={onSelectAutoCompleteUser}
			       dataSelectUser={dataSelectUser}
			       messageError={messageError}
			       onfocusInput={onfocusInput}
			       onChangeInput={onChangeInput}
			       typeName={typeName.cardNumber}
			       optionsData={optionUserCardNumber}
			       placeholder="Nhập mã số thẻ..."
		       />
	       </div>

	       <div className={styles.wrap}>
		       <InputSelectComponent
			       obligatory
			       title='Tên ngân hàng'
			       optionsData={optionsBankName}
			       placeholder="Vui lòng nhập tên ngân hàng..."
			       onSelectDevicePost={onSelectBankName}
			       className={classNames(styles.wrapContent, styles._flex6, styles.contentLeft)}
		       />

		       <InputNumberComponent
			       obligatory
			       title='Hạn mức'
			       onfocusInput={onfocusInput}
			       messageError={messageError}
			       dataSelectUser={dataSelectUser}
			       className={classNames(styles.wrapContent, styles._flex4, styles.contentLeft)}
			       onChangeInput={onChangeInput}
			       typeName={typeName.limitCard}
			       placeholder="Vui lòng nhập hạn mức..."
		       />
		       <InputNumberComponent
			       obligatory
			       messageError={messageError}
			       title='Số tiền  làm cho khách'
			       className={classNames(styles.wrapContent, styles._flex4)}
			       onfocusInput={onfocusInput}
			       typeName={typeName.money}
			       onChangeInput={onChangeInput}
			       placeholder="Vui lòng nhập số tiền làm cho khách..."
		       />
	       </div>

	       <div className={styles.wrap}>
		       <InputSelectComponent
			       obligatory
			       title='Tên thiết bị'
			       optionsData={optionsDevicePost}
			       placeholder="Vui lòng nhập tên thiết bị..."
			       onSelectDevicePost={onSelectDevicePost}
			       className={classNames(styles.wrapContent, styles._flex3, styles.contentLeft)}
		       />

		       <AutoCompleteCustom
			       obligatory
			       title='% Phí ngân hàng'
			       messageError={messageError}
			       dataSelectDevicePost={dataSelectDevicePost}
			       className={classNames(styles.wrapContent, styles._flex1, styles.contentLeft)}
			       style={{ width: '100%' }}
			       onfocusInput={onfocusInput}
			       onChangeInput={onChangeInput}
			       typeName={typeName.percentBank}
			       optionsData={optionsPercentBank}
			       placeholder="% phí ngân hàng..."
		       />

		       <AutoCompleteCustom
			       obligatory
			       title='% Phí thu khách'
			       messageError={messageError}
			       dataSelectDevicePost={dataSelectDevicePost}
			       className={classNames(styles.wrapContent, styles._flex1)}
			       style={{ width: '100%' }}
			       onfocusInput={onfocusInput}
			       onChangeInput={onChangeInput}
			       optionsData={optionsPercentBank}
			       typeName={typeName.percentCustomer}
			       placeholder="% phí thu khách..."
		       />
	       </div>

	       <div className={styles.wrap}>
		       <DatePickerComponent
			       obligatory
			       title='Ngày làm'
			       onfocusInput={onfocusInput}
			       className={classNames(styles.wrapContent, styles._flex1, styles.contentLeft)}
			       messageError={messageError}
			       typeName={typeName.workTimestamp}
			       style={{ width: '100%' }}
			       onChangeInput={onChangeInput}
		       />

		       <div className={classNames(styles.wrapContent, styles._flex1, styles.contentLeft)}>
			       <span className={styles.titleText}>Hình thức<span className={styles.textObligatory}>*</span></span>
			       <SelectComponent
				       data={provinceDataType}
				       typeName={typeName.type}
				       onChangeInput={onChangeInput}
			       />
		       </div>

		       <div className={classNames(styles.wrapContent, styles._flex1, styles.contentLeft)}>
			       <span className={styles.titleText}>Trạng thái đáo<span className={styles.textObligatory}>*</span></span>
			       <SelectComponent
				       disabled={disabledPaymentOption}
				       data={paymentOption}
				       typeName={typeName.paymentOption}
				       onChangeInput={onChangeInput}
			       />
		       </div>

		       <div className={classNames(styles.wrapContent, styles._flex1, styles.contentLeft)}>
			       <span className={styles.titleText}>Trạng thái thanh toán<span className={styles.textObligatory}>*</span></span>
			       <SelectComponent
				       data={paymentDataStatus}
				       typeName={typeName.debit}
				       onChangeInput={onChangeInput}
			       />
		       </div>

		       <DatePickerComponent
			       title='Ngày đáo thẻ'
			       onfocusInput={onfocusInput}
			       className={classNames(styles.wrapContent, styles._flex1)}
			       messageError={messageError}
			       typeName={typeName.cardExpirationDate}
			       style={{ width: '100%' }}
			       onChangeInput={onChangeInput}
		       />
	       </div>

	       <InputTextAreaComponent
		       title='Note:'
		       maxLength={250}
		       typeName={typeName.extends}
		       onChangeInput={onChangeInput}
		       style={{ marginBottom: '25px' }}
	       />

		   <div className={styles.wrapBtn}>
			   <Button
				   key="ok"
				   size='large'
				   type="primary"
				   onClick={onOkModal}
				   disabled={confirmLoading}
			   >
				   {confirmLoading ? <LoadingOutlined/> : "Lưu"}
			   </Button>
			   <Button
				   key="cancel"
				   type="primary"
				   danger size='large'
				   onClick={onCancelModal}
			   >
				   Đóng
			   </Button>
		   </div>
       </div>
    );
}

ContentModal.propTypes = {
	data: PropTypes.object,
	onCloseModal: PropTypes.func,
};

ContentModal.defaultProps = {
	data: {},
	onCloseModal: () => null,
};

export default React.memo(ContentModal);
