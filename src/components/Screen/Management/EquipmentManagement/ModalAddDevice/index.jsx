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

// Base
import ModalBase from "../../../../Base/Modal";

// Style
import styles from "./Styles/index.module.scss";
import AutoCompleteCustom from "../../../Statistical/ModalAddNew/AutoCompleteCustom";
import classNames from "classnames";
import {typeName} from "../../../Statistical/Shared/Synthetic";

function ModalAddDevice(props) {
	const { openModal, onCloneModal } = props;
    return(
	    <ModalBase
		    centered
		    width={450}
		    open={openModal}
		    onCancel={onCloneModal}
		    title="Thêm mới thiệt bị"
		    footer={null}
	    >
		   <div className={styles.wrapContent}>
			   <AutoCompleteCustom
				   obligatory
				   title='% Phí ngân hàng'
				   // messageError={messageError}
				   // dataSelectDevicePost={dataSelectDevicePost}
				   // className={classNames(styles.wrapContent, styles._flex1, styles.contentLeft)}
				   style={{ width: '100%' }}
				   // onfocusInput={onfocusInput}
				   // onChangeInput={onChangeInput}
				   typeName={typeName.percentBank}
				   // optionsData={optionsPercentBank}
				   placeholder="% phí ngân hàng..."
			   />
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

export default ModalAddDevice;
