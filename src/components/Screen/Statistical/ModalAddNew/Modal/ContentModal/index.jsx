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
import { Button } from 'antd';
import PropTypes from 'prop-types';
import classNames from "classnames";

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

// Style
import styles from "./Styles/index.module.scss";

function ContentModal(props) {
	const { onCloseModal } = props;
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

		messageError,
		setMessageError,
		checkValidateAll,
	} = useModalAddNew();


	const onCancelModal = () => {
		onCloseModal();
	};

	const onOkModal = () => {
		console.log('data: ======== Bên trong ========>', data); // Log QuanDX fix bug
		console.log('messageError: ================>', messageError); // Log QuanDX fix bug
		setMessageError(checkValidateAll());
	}

    return(
       <div className={styles['content-modal-wrap']}>
	       <div className={styles.wrap}>
		       <AutoCompleteUserCustom
			       obligatory
			       title='Chủ thẻ'
			       className={classNames(styles.wrapContent, styles.contentLeft, styles._flex4)}
			       onSelectAutoComplete={onSelectAutoCompleteUser}
			       dataSelectUser={dataSelectUser}

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

			       onChangeInput={onChangeInput}
			       typeName={typeName.cardNumber}
			       optionsData={optionUserCardNumber}
			       placeholder="Nhập mã số thẻ..."
		       />
	       </div>

	       <div className={styles.wrap}>
		       <InputNumberComponent
			       obligatory
			       title='Hạn mức'
			       dataSelectUser={dataSelectUser}
			       className={classNames(styles.wrapContent, styles._flex1, styles.contentLeft)}

			       onChangeInput={onChangeInput}
			       typeName={typeName.limitCard}
			       placeholder="Vui lòng nhập hạn mức..."
		       />
		       <InputNumberComponent
			       obligatory
			       title='Số tiền  làm cho khách'
			       className={classNames(styles.wrapContent, styles._flex1)}

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
			       dataSelectDevicePost={dataSelectDevicePost}
			       className={classNames(styles.wrapContent, styles._flex1, styles.contentLeft)}

			       style={{ width: '100%' }}
			       onChangeInput={onChangeInput}
			       typeName={typeName.percentBank}
			       optionsData={optionsPercentBank}
			       placeholder="% phí ngân hàng..."
		       />

		       <AutoCompleteCustom
			       obligatory
			       title='% Phí thu khách'
			       dataSelectDevicePost={dataSelectDevicePost}
			       className={classNames(styles.wrapContent, styles._flex1)}

			       style={{ width: '100%' }}
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
			       className={classNames(styles.wrapContent, styles._flex1, styles.contentLeft)}

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
		       <div className={classNames(styles.wrapContent, styles._flex1)}>
			       <span className={styles.titleText}>Trạng thái thanh toán<span className={styles.textObligatory}>*</span></span>
			       <SelectComponent
				       data={paymentDataStatus}
				       typeName={typeName.debit}
				       onChangeInput={onChangeInput}
			       />
		       </div>
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
				   // disabled={confirmLoading}
				   // loading={confirmLoading}
			   >
				   Lưu
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
	onCloseModal: PropTypes.func,
};

ContentModal.defaultProps = {
	onCloseModal: () => null,
};

export default React.memo(ContentModal);
