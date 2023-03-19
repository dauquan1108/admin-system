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
import { useSelector } from "react-redux";
import { Button, message, Tooltip } from 'antd';
// import { SyncOutlined } from "@ant-design/icons";

// Component
import Table from "./Table";
import OpenChart from "./OpenChart";
import ModalAddNew from "./ModalAddNew";
import SelectOption from "./SelectOption";

// Selector
import { mySelector } from "../../../cores/selector";

// Styles
import styles from './Styles/index.module.scss';

// Utils
import { API_URL } from "../../../utils/Config";

// Hooks custom
import useDispatchCore from "../../../cores/hooks/useDispathCore";

function Statistical() {
	const [dataSource, setDataSource] = React.useState( {});
	const [isLoading, setIsLoading] = React.useState(true);

	const [isCallApi, setIsCallApi] = React.useState({ pageNumber: 1, pageSize: 8 });

	const refPageNumber = React.useRef(null);

	const dispatch = useDispatchCore();

	const { selectorTransaction } = useSelector(mySelector);

	// const onSuccess = (Transaction) => {
	// 	const listItem = {};
	// 	const listDataItem = [];
	// 	const { pageNumber } = isCallApi;
	// 	const listData = {...Transaction}
	// 	if (Object.keys(listData).length) {
	// 		for (const property in listData) {
	// 			if (listData.hasOwnProperty(property)) {
	// 				const itemInvoice = listData[property];
	// 				itemInvoice.key = itemInvoice._id;
	// 				listDataItem.push(itemInvoice);
	// 			}
	// 		}
	// 	}
	// 	listItem[pageNumber] = listDataItem;
	// 	setDataSource({...dataSource, ...listItem});
	// };

	const onFinally = () => {
		setIsLoading(false);
	};

	React.useEffect(() => {
		const { pageSize, pageNumber } = isCallApi;
		callApiGetListData(pageSize, pageNumber);
	}, [isCallApi]);

	const callApiGetListData = (pageSize, page) => {
		if (refPageNumber.current !== page) {
			refPageNumber.current = page;
			const params = { limit: pageSize, page };
			dispatch.dispatchCore(dispatch.TYPE.Transaction, dispatch.METHOD.GET_LIST, {}, params, {}, onFinally, onFinally);
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
		// dispatch.dispatchCore(dispatch.TYPE.Transaction, dispatch.METHOD.REMOTE, { id }, {}, {}, );
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

	const { pageNumber } = isCallApi;

	// const onClickRefresh = () => {
	// 	callApiGetListData(1, pageNumber);
	// };

	return(
		<div className={styles.wrapInvoice}>
			<div className={styles.invoiceHeader}>
				<div className={styles.contentLeft}>
					<ModalAddNew />
					<SelectOption />
					{/*<Tooltip placement="bottom" title='Làm mới' onClick={onClickRefresh}>*/}
					{/*	<Button type="primary" className={styles.contentLeftBtnRefresh} icon={<SyncOutlined />} />*/}
					{/*</Tooltip>*/}
				</div>
				<div className={styles.contentRight}>
					{/*<OpenChart />*/}
				</div>
			</div>
			<Table
				isLoading={isLoading}
				pageNumber={pageNumber}
				setIsCallApi={setIsCallApi}
				setIsLoading={setIsLoading}
				dataSource={selectorTransaction}
				dataSourceOrigin={dataSource}
				onDeleteItemDataSource={onDeleteItemDataSource}
			/>
		</div>
    );
}

export default React.memo(Statistical);
