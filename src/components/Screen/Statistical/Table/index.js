/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 3/3/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Button, Popconfirm, Space, Tag, Table, Input} from "antd";

// Component
import ModalNote from "../ModalNote";

// Shared
import { convertDMY } from "../Shared/GeneralInformationTable";

// Img
import note from "../../../Img/notes.png";
import {SearchOutlined} from "@ant-design/icons";
import Highlighter from "react-highlight-words";

function TableComponent(props) {
	const { dataSource, total, setIsCallApi } = props;

	// Đóng mở Modal
	const [dataInvoice, setDataInvoice] = React.useState({});

	// const [searchText, setSearchText] = React.useState("");
	// const [searchedColumn, setSearchedColumn] = React.useState("");
	// const searchInput = React.useRef(null);
	//
	// const handleSearch = (selectedKeys, confirm, dataIndex) => {
	// 	confirm();
	// 	setSearchText(selectedKeys[0]);
	// 	setSearchedColumn(dataIndex);
	// };
	//
	// const handleReset = (clearFilters, selectedKeys, confirm, dataIndex) => {
	// 	clearFilters();
	// 	setSearchText("");
	//
	// 	// Clear
	// 	handleSearch(selectedKeys, confirm, dataIndex);
	// };
	//
	// const getColumnSearchProps = (dataIndex, title) => ({
	// 	filterDropdown: ({
	// 		                 setSelectedKeys,
	// 		                 selectedKeys,
	// 		                 confirm,
	// 		                 clearFilters,
	// 		                 close
	// 	                 }) => (
	// 		<div
	// 			style={{
	// 				padding: 8
	// 			}}
	// 			onKeyDown={(e) => e.stopPropagation()}
	// 		>
	// 			<Input
	// 				ref={searchInput}
	// 				placeholder={`Tìm kiếm theo ${title}`}
	// 				value={selectedKeys[0]}
	// 				onChange={(e) =>
	// 					setSelectedKeys(e.target.value ? [e.target.value] : [])
	// 				}
	// 				onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
	// 				style={{
	// 					marginBottom: 8,
	// 					display: "block"
	// 				}}
	// 			/>
	// 			<Space>
	// 				<Button
	// 					type="primary"
	// 					onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
	// 					icon={<SearchOutlined />}
	// 					size="small"
	// 					style={{
	// 						width: 100
	// 					}}
	// 				>
	// 					Tìm kiếm
	// 				</Button>
	// 				<Button
	// 					onClick={() => clearFilters && handleReset(clearFilters, selectedKeys, confirm, dataIndex)}
	// 					size="small"
	// 					style={{
	// 						width: 100
	// 					}}
	// 				>
	// 					Xóa tìm kiếm
	// 				</Button>
	// 				<Button
	// 					type="link"
	// 					size="small"
	// 					onClick={() => {
	// 						close();
	// 					}}
	// 				>
	// 					Đóng
	// 				</Button>
	// 			</Space>
	// 		</div>
	// 	),
	//
	// 	filterIcon: (filtered) => (
	// 		<SearchOutlined
	// 			style={{
	// 				color: filtered ? "#1890ff" : undefined
	// 			}}
	// 		/>
	// 	),
	//
	// 	onFilter: (value, record) =>
	// 		record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
	//
	// 	onFilterDropdownOpenChange: (visible) => {
	// 		if (visible) {
	// 			setTimeout(() => searchInput.current?.select(), 100);
	// 		}
	// 	},
	//
	// 	render: (text) =>
	// 		searchedColumn === dataIndex ? (
	// 			<Highlighter
	// 				highlightStyle={{
	// 					backgroundColor: "#ffc069",
	// 					padding: 0
	// 				}}
	// 				searchWords={[searchText]}
	// 				autoEscape
	// 				textToHighlight={text ? text.toString() : ""}
	// 			/>
	// 		) : (
	// 			text
	// 		)
	// });

	const onClickNote = (record) => {
		// TODO: Update data để hiển thị modal NOTE
		setDataInvoice(record);
	};

	const onClickDeleteItem = (id) => {
		// TODO: Xóa Item khỏi danh sách
		const newData = dataSource.filter((item) => item.key !== id);
		console.log('newData: ========[ Xoa ]========>', newData); // Log QuanDX fix bug
	};

	const columns = [
		{
			title: "Tên thiết bị",
			dataIndex: "devicePost",
			key: "devicePost",
			// ...getColumnSearchProps("devicePost", "tên thiết bị"),
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
			render: (value) => {
				const workTimestamp = convertDMY(value);
				return (
					<span>
						{workTimestamp}
					</span>
				);
			}
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
				dataSource.length >= 1 ? (
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

	const cancel = (pageNumber, pageSize) => {
		setIsCallApi && setIsCallApi({ pageNumber, pageSize })
	};

    return(
    	<React.Fragment>
		    <Table
			    columns={columns}
			    scroll={{x: 1800}}
			    dataSource={dataSource}
			    pagination={{
				    onChange: cancel,
				    defaultCurrent: 1,
				    total: total
			    }}
		    />
		    <ModalNote open={Object.values(dataInvoice).length !== 0} setOpen={onClickNote} dataInvoice={dataInvoice} />
	    </React.Fragment>
    );
}

TableComponent.propTypes = {
	setIsCallApi: PropTypes.func,
	dataSource: PropTypes.array,
	total: PropTypes.number,
};

TableComponent.defaultProps = {
	setIsCallApi: () => null,
	dataSource: [],
	total: 0,
};

export default React.memo(TableComponent);
