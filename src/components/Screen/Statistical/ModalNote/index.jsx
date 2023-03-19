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
import { Modal, Button, Tag } from 'antd';

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
	const bankMoney = dataInvoice.bankMoney;
	const percentCustomer = dataInvoice.percentCustomer || "";
	const feesClient = dataInvoice.feesClient;
	const interestRate = dataInvoice.interestRate;
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
		    <div className={styles.wrap}>
			    <div className={classNames(styles.wrapText, styles.flex_1)}>
				    Hình thức:
				    <Tag className={styles.contentText} color={ type.length > 5 ? "geekblue" : "green"}>{type}</Tag>
			    </div>

			    <div className={classNames(styles.wrapText, styles.flex_1)}>
				    Tên thiết bị:
				    <span className={classNames(styles.contentText, styles.textColor)}> {devicePost}</span>
			    </div>
		    </div>

		    <div className={styles.wrap}>
			    <div className={classNames(styles.wrapText, styles.flex_1)}>
				    Thời gian làm:
				    <span className={classNames(styles.contentText, styles.textColor)}> {workTimestamp}</span>
			    </div>
			    <div className={classNames(styles.wrapText, styles.flex_1)}>
				    Thời gian nhập lên hệ thống:
				    <span className={classNames(styles.contentText, styles.textColor)}> {timestampNew}</span>
			    </div>
		    </div>


		    {/*<p className={styles.wrapText}>Chủ thẻ:*/}
			{/*    <span className={classNames(styles.contentText, styles.textColor)}> {name}</span>*/}
			{/*</p>*/}
		    {/*<p className={styles.wrapText}>Mã số thẻ:*/}
			{/*    <span className={classNames(styles.contentText, styles.textColor)}> {cardNumber}</span>*/}
			{/*</p>*/}
		    <div className={styles.wrap}>
			    <div className={classNames(styles.wrapText, styles.flex_1)}>
				    Số tiền làm khách:
				    <span className={classNames(styles.contentText, styles.textColor)}> {amountOfMoneyNew}</span>
				</div>
			    <div className={classNames(styles.wrapText, styles.flex_1)}>
				    Số tiền lãi:
				    <span className={classNames(styles.contentText, styles.textColor)}> {interestRate} vnđ</span>
			    </div>
		    </div>

		    <div className={styles.wrap}>
			    <div className={classNames(styles.wrapText, styles.flex_1)}>
			        % Phí ngân hàng:
				    <span className={classNames(styles.contentText, styles.textColor)}> {percentBank} %</span>
			    </div>
			    <div  className={classNames(styles.wrapText, styles.flex_1)}>
			        Phí thu ngân hàng:
				    <span className={classNames(styles.contentText, styles.textColor)}> {bankMoney} vnđ</span>
			    </div>
		    </div>

		    <div className={styles.wrap}>
			    <div className={classNames(styles.wrapText, styles.flex_1)}>
				    % Phí thu khách:
				    <span className={classNames(styles.contentText, styles.textColor)}> {percentCustomer} %</span>
			    </div>
			    <div className={classNames(styles.wrapText, styles.flex_1)}>
				    Phí thu khách:
				    <span className={classNames(styles.contentText, styles.textColor)}> {feesClient} vnđ</span>
			    </div>
		    </div>

		    <div className={classNames(styles.wrapText, styles.flex_1)}>Note:
				<span className={classNames(styles.contentText, styles.textColor)}> {note}</span>
		    </div>
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
