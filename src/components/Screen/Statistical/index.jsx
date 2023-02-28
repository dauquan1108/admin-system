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
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Tag, Popconfirm } from "antd";

// Component
import Loading from '../../Loading';

import SelectOption from "./SelectOption";
import ModalNote from "./ModalNote";
import ModalAddNew from "./ModalAddNew";
import OpenChart from "./OpenChart";
import { listDataInvoice } from "./DataFake";

// Styles
import styles from './Styles/index.module.scss';

// Img
import note from '../../Img/notes.png';
import axios from "axios";

import { API_URL } from "../../../utils/Config";

function Statistical() {
	const [hasTransaction, setHasTransaction] = React.useState({});
	const [listDataTransaction, setListDataTransaction] = React.useState([]);

	const [isCallApi, setIsCallApi] = React.useState({ current: 1, pageSize: 10 })
	const refCurrent = React.useRef(null);

	const onSuccess = (HasTransaction, Transaction) => {
		setHasTransaction(HasTransaction)
		const listDataTransactionCustom = [];
		const listData = {...Transaction}
		if (Object.keys(listData).length) {
			for (const property in listData) {
				if (listData.hasOwnProperty(property)) {
					const itemInvoice = listData[property];
					// gán giá trị cũ vào thuộc tính mới
					itemInvoice.key = itemInvoice._id;
					// xóa thuộc tính mới
					// delete itemInvoice._id;
					listDataTransactionCustom.push(itemInvoice);
				}
			}
		}
		setListDataTransaction([...listDataTransaction,...listDataTransactionCustom]);
	};

	React.useEffect(() => {
		const { current, pageSize } = isCallApi;
		if (refCurrent.current < current) {
			refCurrent.current = current;
			axios({
				method: "get",
				url: `${API_URL}?limit=${pageSize}&&page=${current}`,
			}).then((response) => {
				if (response.status === 200) {
					const { data } = response.data;
					const { HasTransaction, Transaction } = data;
					HasTransaction && Transaction && onSuccess(HasTransaction, Transaction)
				}
			}).catch((error) => {
				throw new Error("Lấy danh sách dữ bảng thống kê thất bại ======== [[ Error ]] =====>:", error);
			}).finally(() => {

			});
		}
	}, [isCallApi, refCurrent]);



	const [searchText, setSearchText] = React.useState("");
	const [searchedColumn, setSearchedColumn] = React.useState("");
	const searchInput = React.useRef(null);

	// Đóng mở Modal
	const [dataInvoice, setDataInvoice] = React.useState({});

	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};

	const handleReset = (clearFilters, selectedKeys, confirm, dataIndex) => {
		clearFilters();
		setSearchText("");

		// Clear
		handleSearch(selectedKeys, confirm, dataIndex);
	};

	const getColumnSearchProps = (dataIndex, title) => ({
		filterDropdown: ({
             setSelectedKeys,
             selectedKeys,
             confirm,
             clearFilters,
             close
		}) => (
			<div
				style={{
					padding: 8
				}}
				onKeyDown={(e) => e.stopPropagation()}
			>
				<Input
					ref={searchInput}
					placeholder={`Tìm kiếm theo ${title}`}
					value={selectedKeys[0]}
					onChange={(e) =>
						setSelectedKeys(e.target.value ? [e.target.value] : [])
					}
					onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
					style={{
						marginBottom: 8,
						display: "block"
					}}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
						icon={<SearchOutlined />}
						size="small"
						style={{
							width: 100
						}}
					>
						Tìm kiếm
					</Button>
					<Button
						onClick={() => clearFilters && handleReset(clearFilters, selectedKeys, confirm, dataIndex)}
						size="small"
						style={{
							width: 100
						}}
					>
						Xóa tìm kiếm
					</Button>
					<Button
						type="link"
						size="small"
						onClick={() => {
							close();
						}}
					>
						Đóng
					</Button>
				</Space>
			</div>
		),

		filterIcon: (filtered) => (
			<SearchOutlined
				style={{
					color: filtered ? "#1890ff" : undefined
				}}
			/>
		),

		onFilter: (value, record) =>
			record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),

		onFilterDropdownOpenChange: (visible) => {
			if (visible) {
				setTimeout(() => searchInput.current?.select(), 100);
			}
		},

		render: (text) =>
			searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{
						backgroundColor: "#ffc069",
						padding: 0
					}}
					searchWords={[searchText]}
					autoEscape
					textToHighlight={text ? text.toString() : ""}
				/>
			) : (
				text
			)
	});


	const onClickNote = (record) => {
		setDataInvoice(record);
	};

	const onClickDeleteItem = (id) => {
		console.log('id: =========123=======>', id); // Log QuanDX fix bug
	};

	const columns = [
		{
			title: "Tên thiết bị",
			dataIndex: "devicePost",
			key: "devicePost",
			...getColumnSearchProps("devicePost", "tên thiết bị"),
			sorter: (a, b) => a.devicePost.length - b.devicePost.length,
			sortDirections: ["descend", "ascend"],
			width: 140,
			fixed: "left"
		},
		{
			title: "Ngày làm",
			dataIndex: "workTimestamp",
			key: "workTimestamp",
			width: 120,
			fixed: "left",
			// sorter: true
		},
		// {
		// 	title: "Chủ thẻ",
		// 	dataIndex: "accountName",
		// 	key: "accountName",
		// 	...getColumnSearchProps("accountName", "chủ thẻ"),
		// 	sorter: (a, b) => a.accountName.length - b.accountName.length,
		// 	sortDirections: ["descend", "ascend"]
		// },
		// {
		// 	title: "Số thẻ",
		// 	dataIndex: "cardNumber",
		// 	key: "cardNumber",
		// },
		{
			title: "Số tiền nhận từ khách",
			dataIndex: "money",
			key: "money",
			render: (value) => {
				const valueNew = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
				return (
					<span>
						{`${valueNew} vnđ`}
					</span>
				);
			}
		},
		{
			title: "% Phí ngân hàng",
			dataIndex: "percentBank",
			key: "percentBank",
			render: (value) => (
				<span>
					{`${value} %`}
				</span>
			),
		},
		// {
		// 	title: "Phí ngân hàng",
		// 	dataIndex: "bankFees",
		// 	key: "bankFees",
		// },
		{
			title: "% Phí thu khách",
			dataIndex: "percentCustomer",
			key: "percentCustomer",
			render: (value) => (
				<span>
					{`${value} %`}
				</span>
			),
		},
		// {
		// 	title: "Phí thu",
		// 	dataIndex: "fees",
		// 	key: "fees",
		// },
		// {
		// 	title: "Lãi",
		// 	dataIndex: "interestRate",
		// 	key: "interestRate",
		// },

		{
			title: "Hình thức",
			key: "type",
			dataIndex: "type",
			render: (_, { type }) => (
				<Tag color={ type.length > 5 ? "geekblue" : "green"} key={type}>
					{type.toUpperCase()}
				</Tag>
			)
		},
		{
			title: "Note",
			Key: "extends",
			dataIndex: "extends",
			align: "center",
			render: (_, record) => (
				<Space size="middle">
					<a onClick={() => onClickNote(record)}>
						<img src={note} alt='note' width="20px" />
					</a>
				</Space>
			),
		},
		{
			fixed: "right",
			align: "center",
			key: "operation",
			title: "Xóa thông tin",
			dataIndex: "operation",
			width: 130,
			render: (_, record) =>
				listDataInvoice.length >= 1 ? (
					<Popconfirm
						okText="Có"
						cancelText="Không"
						title="Bạn có chắc muốn xóa ?"
						onConfirm={() => onClickDeleteItem(record.key)}
					>
						<Button type="link" danger>Xóa</Button>
					</Popconfirm>
				) : null
		},
	];

	const cancel = (current, pageSize) => {
		setIsCallApi({ current, pageSize })
	};

	const total = hasTransaction.total || 0;

	return(
		<React.Fragment>
			{
				listDataTransaction.length > 0 ?
				(
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
							columns={columns}
							scroll={{x: 1800}}
							dataSource={listDataTransaction}
							pagination={{
								onChange: cancel,
								defaultCurrent: 1,
								total
							}}
						/>
						<ModalNote open={Object.values(dataInvoice).length !== 0} setOpen={onClickNote} dataInvoice={dataInvoice} />
					</div>
				) : (
					<Loading />
				)
			}
		</React.Fragment>
    );
}

export default React.memo(Statistical);
