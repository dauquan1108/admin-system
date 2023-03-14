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
import { Spin, message } from 'antd';

// Component
import Table from "./Table";
import OpenChart from "./OpenChart";
import ModalAddNew from "./ModalAddNew";
import SelectOption from "./SelectOption";

// Styles
import styles from './Styles/index.module.scss';

// Utils
import { API_URL } from "../../../utils/Config";

function Statistical() {
	const [hasTransaction, setHasTransaction] = React.useState({});
	const [dataSource, setDataSource] = React.useState( {});
	const [isLoading, setIsLoading] = React.useState(true);

	const [isCallApi, setIsCallApi] = React.useState({ pageNumber: 1, pageSize: 10 });

	const refPageNumber = React.useRef(null);

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

	const onFinally = () => {
		setIsLoading(false);
	};

	const callApiGetListData = (pageSize, pageNumber) => {
		if (refPageNumber.current !== pageNumber) {
			refPageNumber.current = pageNumber;
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
				onFinally();
			});
		}
	};

	const listDataSource = () => {
		const { pageNumber } = isCallApi;
		if (!dataSource.hasOwnProperty(pageNumber)) {
			const { pageSize, pageNumber } = isCallApi;
			callApiGetListData(pageSize, pageNumber);
		} else {
			return dataSource[pageNumber];
		}
	};

	const onDeleteItemSuccess = (valueNew, page) => {
		const dataSourceNew = dataSource;
		dataSourceNew[page] = valueNew;
		setDataSource({...dataSourceNew});
	};

	const onDeleteItemError = () => {
		message.error('Chức năng xóa không thành công vui lòng thử lại.', 5);
	};

	const callApiDeleteItem = (id, valueNew, page) => {
		axios({
			method: "delete",
			url: `${API_URL}/${id}`,
		}).then((response) => {
			if (response.status === 200) {
				onDeleteItemSuccess(valueNew, page);
			}
		}).catch((error) => {
			onDeleteItemError();
			throw new Error("Xóa item thất bại ======== [[ Error ]] =====>:", error);
		}).finally(() => {
			onFinally();
		});
	};

	const onDeleteItemDataSource = (id, valueNew, page) => {
		setIsLoading(true);
		callApiDeleteItem(id, valueNew, page);
	};

	const total = hasTransaction.total || 0;

	const { pageNumber } = isCallApi;

	return(
		<div className={styles.wrapInvoice}>
			<div className={styles.invoiceHeader}>
				<div className={styles.contentLeft}>
					<ModalAddNew />
					<SelectOption />
					{
						isLoading && (
							<Spin style={{ marginTop: '2px', marginLeft: '12px' }} />
						)
					}
				</div>
				<div className={styles.contentRight}>
					<OpenChart />
				</div>
			</div>
			<Table
				total={total}
				pageNumber={pageNumber}
				setIsCallApi={setIsCallApi}
				setIsLoading={setIsLoading}
				dataSource={listDataSource()}
				dataSourceOrigin={dataSource}
				onDeleteItemDataSource={onDeleteItemDataSource}
			/>
		</div>
    );
}

export default React.memo(Statistical);
