/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 12/24/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import axios from "axios";

// Component
import Table from "./Table";
import OpenChart from "./OpenChart";
import Loading from '../../Loading';
import ModalAddNew from "./ModalAddNew";
import SelectOption from "./SelectOption";

// Styles
import styles from './Styles/index.module.scss';

// Utils
import { API_URL } from "../../../utils/Config";

function Statistical() {
	const [hasTransaction, setHasTransaction] = React.useState({});
	const [dataSource, setDataSource] = React.useState({});

	const [isCallApi, setIsCallApi] = React.useState({ pageNumber: 1, pageSize: 10 })

	const onSuccess = (Transaction, HasTransaction) => {
		setHasTransaction(HasTransaction);
		const listItem = {};
		const listDataItem = [];
		const { pageNumber } = isCallApi;
		const listData = {...Transaction}
		if (Object.keys(listData).length) {
			for (const property in listData) {
				if (listData.hasOwnProperty(property)) {
					const itemInvoice = listData[property];
					itemInvoice.key = itemInvoice._id;
					listDataItem.push(itemInvoice);
				}
			}
		}
		listItem[pageNumber] = listDataItem;
		setDataSource({...dataSource, ...listItem});
	};

	const callApi = (pageSize, pageNumber) => {
		axios({
			method: "get",
			url: `${API_URL}?limit=${pageSize}&&page=${pageNumber}`,
		}).then((response) => {
			if (response.status === 200) {
				const { data } = response.data;
				const { HasTransaction, Transaction } = data;
				HasTransaction && Transaction && onSuccess(Transaction, HasTransaction);
			}
		}).catch((error) => {
			throw new Error("Lấy danh sách dữ bảng thống kê thất bại ======== [[ Error ]] =====>:", error);
		}).finally(() => {

		});
	};

	React.useEffect(() => {
		const { pageSize, pageNumber } = isCallApi;
		callApi(pageSize, pageNumber);
	}, []);


	const listDataSource = () => {
		const { pageNumber } = isCallApi;
		if (!dataSource.hasOwnProperty(pageNumber)) {
			const { pageSize, pageNumber } = isCallApi;
			callApi(pageSize, pageNumber);
		} else {
			return dataSource[pageNumber];
		}
	};

	const total = hasTransaction.total || 0;

	return(
		<React.Fragment>
			<div className={styles.wrapInvoice}>
				<div className={styles.invoiceHeader}>
					<div className={styles.contentLeft}>
						<ModalAddNew />
						<SelectOption />
					</div>
					<div className={styles.contentRight}>
						<OpenChart />
					</div>
				</div>
				<Table
					total={total}
					dataSource={listDataSource()}
					setIsCallApi={setIsCallApi}
				/>
			</div>
		</React.Fragment>
    );
}

export default React.memo(Statistical);
