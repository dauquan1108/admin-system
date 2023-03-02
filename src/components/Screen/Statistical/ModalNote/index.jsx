/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 12/25/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import { Modal, Button } from 'antd';

// Style
import styles from './Styles/index.module.scss';

// image
import close from '../../../Img/close.png';

function ModalNote({ open, setOpen, dataInvoice }) {

	const onClick = () => {
		setOpen({});
	};

	const convertTime = (time) => {
		const date = new Date(time);
		const day = ("0" + date.getDate()).slice(-2);
		const month = ("0" + (date.getMonth() + 1)).slice(-2);
		const year = date.getFullYear();
		return `${day}/${month}/${year}`;
	};


	const convertMoney = (value) => {
		const moneyNew = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
		return `${moneyNew} vnđ`;
	};

	const devicePost = dataInvoice.devicePost || "";
	const workTime = dataInvoice.workTimestamp || "";
	const workTimestamp = convertTime(workTime)

	const timestamp = dataInvoice.timestamp || "";
	const timestampNew = convertTime(timestamp)

	const name = dataInvoice.name || "";
	const cardNumber = dataInvoice.cardNumber || "";
	const amountOfMoney = dataInvoice.money || "0 vnđ";

	const amountOfMoneyNew = convertMoney(amountOfMoney)
	const percentBank =  dataInvoice.percentBank || "";
	const bankFees = dataInvoice.bankFees || "0 vnđ";
	const percentCustomer = dataInvoice.percentCustomer || "";
	const fees = dataInvoice.fees || "0 vnđ";
	const interestRate = dataInvoice.interestRate || "0 vnđ";
	const note = dataInvoice.extends || "";
	const type = dataInvoice.type || "";

	return(
	    <Modal
		    title="Thông tin chi tiết"
		    centered
		    open={open}
		    closeIcon={<img src={close} alt="" width='12px' />}
		    width={680}
		    onOk={onClick}
		    onCancel={onClick}
		    wrapClassName={styles.wrapModal}
		    footer={
			    <Button onClick={onClick} type="primary" size='large' danger>
				    Đóng
			    </Button>
		    }
	    >
		    <div className={styles.wrapText}>
			    Tên thiết bị:
			    <span className={styles.contentText}> {devicePost}</span>
		    </div>

		    <div className={styles.wrap}>
			    <div className={classNames(styles.wrapText, styles.flex_1)}>
				    Thời gian làm:
				    <span className={styles.contentText}> {workTimestamp}</span>
			    </div>
			    <div className={classNames(styles.wrapText, styles.flex_1)}>
				    Thời gian nhập lên hệ thống:
				    <span className={styles.contentText}> {timestampNew}</span>
			    </div>
		    </div>


		    {/*<p className={styles.wrapText}>Chủ thẻ:*/}
			{/*    <span className={styles.contentText}> {name}</span>*/}
			{/*</p>*/}
		    {/*<p className={styles.wrapText}>Mã số thẻ:*/}
			{/*    <span className={styles.contentText}> {cardNumber}</span>*/}
			{/*</p>*/}
		    <div className={styles.wrapText}>Số tiền nhận từ khách:
			    <span className={styles.contentText}> {amountOfMoneyNew}</span>
			</div>

		    <div className={styles.wrap}>
			    <div className={classNames(styles.wrapText, styles.flex_1)}>
			        % Phí ngân hàng:
				    <span className={styles.contentText}> {percentBank} %</span>
			    </div>
			    <div className={classNames(styles.wrapText, styles.flex_1)}>
				    % Phí thu khách:
				    <span className={styles.contentText}> {percentCustomer} %</span>
			    </div>
		    </div>
		    {/*<div className={styles.wrapText}>*/}
			{/*    Phí thu:*/}
			{/*    <span className={styles.contentText}> {fees}</span>*/}
		    {/*</div>*/}
		    {/*<p className={styles.wrapText}>Phí ngân hàng:*/}
			{/*    <span className={styles.contentText}> {bankFees}</span>*/}
			{/*</p>*/}

		    {/*<p className={styles.wrapText}> Số tiền lãi:*/}
			{/*    <span className={styles.contentText}> {interestRate}</span>*/}
			{/*</p>*/}
		    <div className={styles.wrapText}>
			    Hình thức:
			    <span className={styles.contentText}>{type}</span>
		    </div>
		    <p className={styles.wrapText}>Note:
				<span className={styles.contentText}> {note}</span>
		    </p>
	    </Modal>
    );
}

ModalNote.propTypes = {
	open: PropTypes.bool,
	setOpen: PropTypes.func,
	dataInvoice: PropTypes.object,
};

ModalNote.defaultProps = {
	open: false,
	dataInvoice: {},
};

export default React.memo(ModalNote);
