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
import selectorTransaction from "cores/selector/selectorTransaction";

// Styles
import styles from './Styles/index.module.scss';

// Utils
import { API_URL } from "../../../utils/Config";

// Hooks custom
import useDispatchCore from "../../../cores/hooks/useDispathCore";

function Statistical() {
	const [_, setDataSource] = React.useState({});
	const [isLoading, setIsLoading] = React.useState(true);

	const [{ limit, page }, setPagination] = React.useState({ page: 1, limit: 7 });

	// const refpage = React.useRef(null);

	const dispatch = useDispatchCore();
	const { total, dataSource } = useSelector(selectorTransaction);

	const onFinally = () => {
		setIsLoading(false);
	};

	React.useEffect(() => {
		getList(limit, page);
	}, [limit, page]);

	// const getList = (limit, page) => {
	const getList = () => {
		// if (refpage.current !== page) {
		// refpage.current = page;
		const params = { limit, page };
		dispatch.dispatchCore(dispatch.TYPE.Transaction, dispatch.METHOD.GET_LIST, {}, params, {}, onFinally, onFinally);
		// }
	};

	const onDeleteItemSuccess = (valueNew, page) => {
		const dataSourceNew = dataSource;
		dataSourceNew[page] = valueNew;
		setDataSource({ ...dataSourceNew });
	};

	const onDeleteItemError = () => {
		message.error('Chức năng xóa không thành công vui lòng thử lại.', 5);
	};

	const callApiDeleteItem = (id) => {
		dispatch.dispatchCore(dispatch.TYPE.Transaction, dispatch.METHOD.REMOTE, { id }, {}, {},);
	};

	const onDeleteItemDataSource = (id, valueNew, page) => {
		setIsLoading(true);
		callApiDeleteItem(id, valueNew, page);
	};

	return (
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
					<OpenChart />
				</div>
			</div>
			<Table
				isLoading={isLoading}
				page={page}
				limit={limit}
				total={total}
				setPagination={setPagination}
				setIsLoading={setIsLoading}
				dataSource={dataSource}
				onDeleteItemDataSource={onDeleteItemDataSource}
			/>
		</div>
	);
}

export default React.memo(Statistical);
