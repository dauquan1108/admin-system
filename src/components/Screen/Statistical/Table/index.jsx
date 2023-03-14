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
import locales from "antd/es/locale/vi_VN";
import { WarningFilled } from '@ant-design/icons';
import { Button, Popconfirm, Space, Tag, Table, ConfigProvider  } from "antd";

// Component
import ModalNote from '../ModalNote';
import useModalAddNew from "../ModalAddNew/useModalAddNew";

// Shared
import { convertDMY } from "../Shared/Time";

// Search
import Search from "../Shared/useSearch";

// Img
import note from "../../../Img/notes.png";

// Style
import styles from "./Styles/index.module.scss";

function TableComponent(props) {
	const {
		total,
		dataSource,
		pageNumber,
		setIsLoading,
		setIsCallApi,
		dataSourceOrigin,
		onDeleteItemDataSource,
	} = props;

	const { getColumnSearchProps } = Search();

	// Đóng mở Modal
	const [dataInvoice, setDataInvoice] = React.useState({});

	const onClickNote = (record) => {
		// TODO: Update data để hiển thị modal NOTE
		setDataInvoice(record);
	};

	const onClickDeleteItem = (id) => {
		// TODO: Xóa Item khỏi danh sách
		const newData = dataSource.filter((item) => item.key !== id);
		onDeleteItemDataSource && onDeleteItemDataSource(id, newData, pageNumber);
	};

	const convertMoney = (money) => {
	    return (money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	};

	const { provinceDataType } = useModalAddNew();

	const columns = [
		{
			key: "devicePost",
			dataIndex: "devicePost",
			title: "Tên thiết bị",
			...getColumnSearchProps("devicePost", "tên thiết bị"),
			sortDirections: ["descend", "ascend"],
			width: 180,
			fixed: "left"
			// sorter: (a, b) => a.devicePost.length - b.devicePost.length,
		},
		{
			key: "workTimestamp",
			dataIndex: "workTimestamp",
			title: "Ngày làm",
			render: (value) => {
				const workTimestamp = convertDMY(value);
				return (
					<span>
						{workTimestamp}
					</span>
				);
			},
			// fixed: "left",
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
			key: "money",
			dataIndex: "money",
			title: "Số tiền nhận từ khách",
			render: (value) => <span>{`${convertMoney(value) || 0} vnđ`}</span>
		},
		{
			key: "percentBank",
			dataIndex: "percentBank",
			title: "% Phí ngân hàng",
			render: (value) => (
				<span>
					{`${value || 0} %`}
				</span>
			),
		},
		{
			title: "Phí ngân hàng thu",
			key: "bankMoney",
			dataIndex: "money",
			render: (value, row) => {
				// bank_money ( Phí ngân hàng thu) = money  * (percentBank /  100 )
				const bank_money = (value * (row.percentBank /  100 )).toFixed(2);
				const bankMoney = convertMoney(bank_money);
				return (
					<span>{`${bankMoney || 0} vnđ`}</span>
				);
			}
		},
		{
			key: "percentCustomer",
			dataIndex: "percentCustomer",
			title: "% Phí thu khách",
			render: (value) => (
				<span>
					{`${value} %`}
				</span>
			),
		},
		{
			title: "Phí thu khách",
			key: "feesClient",
			dataIndex: "money",
			render: (value, row) => {
				//  customer_money (Phí thu khách) = money  * (percentCustomer /  100 )
				const feesClient = (value * (row.percentCustomer /  100)).toFixed(2);
				const feesClientNew = convertMoney(feesClient);
				return (
					<span>{`${feesClientNew || 0} vnđ`}</span>
				);
			}
		},
		{
			title: "Tiền lãi",
			key: "interestRate",
			dataIndex: "money",
			render: (value, row) => {
				// Lãi = bank_money - customer_money;
				const bankMoney = value * (row.percentBank /  100 );
				const feesClient = value * (row.percentCustomer /  100);
				const interestRate = (feesClient- bankMoney).toFixed(2);
				const interestRateNew = convertMoney(interestRate);
				return (
					<span>{`${interestRateNew || 0} vnđ`}</span>
				);
			}
		},
		{
			key: "type",
			dataIndex: "type",
			title: "Hình thức",
			align: "center",
			render: (_, { type }) => (
				<Tag color={ type.length > 5 ? "geekblue" : "green"} key={type}>
					{type.toUpperCase()}
				</Tag>
			),
			filters: [
				{
					text: provinceDataType[0],
					value: provinceDataType[0],
				},
				{
					text: provinceDataType[1],
					value: provinceDataType[1],
				},
			],
			onFilter: (value, record) => record.type.indexOf(value) === 0,

		},
		{
			Key: "extends",
			dataIndex: "extends",
			title: "Note",
			align: "center",
			render: (_, record) => (
				<Space size="middle">
					<a onClick={() => onClickNote(record)}>
						<img src={note} alt='note' width="22px" />
					</a>
				</Space>
			),
		},
		{
			key: "operation",
			dataIndex: "operation",
			title: "Xóa thông tin",
			align: "center",
			fixed: "right",
			width: 120,
			render: (_, record) =>
				dataSource.length >= 1 ? (
					<Popconfirm
						okText="Có"
						cancelText="Không"
						title="Bạn có chắc muốn xóa ?"
						onConfirm={() => onClickDeleteItem(record.key)}
					>
						<Button type="link" danger style={{ fontSize: '15px', fontWeight: '600' }}>Xóa</Button>
					</Popconfirm>
				) : null
		},
	];

	const cancel = (pageNumber, pageSize) => {
		setIsCallApi && setIsCallApi({ pageNumber, pageSize });
		if (dataSourceOrigin && !dataSourceOrigin.hasOwnProperty(pageNumber)) {
			setIsLoading && setIsLoading(true);
		}
	};

	let locale = {
		emptyText: (
			<span>
				<WarningFilled style={{ fontSize: '25px', marginRight: '10px', color: '#f8b310' }} />
                Chưa có dữ liệu.
            </span>
		)
	};

    return(
    	<React.Fragment>
		    <ConfigProvider locale={locales}>
			    <Table
				    locale={locale}
				    columns={columns}
				    scroll={{x: 2000}}
				    dataSource={dataSource}
				    rowClassName={(record, index) => (record.type === provinceDataType[0] ? styles.withdrawMoney : styles.unique)}
				    pagination={{
					    onChange: cancel,
					    defaultCurrent: 1,
					    total: total
				    }}
				    // showSorterTooltip={{ title: 'Click để sắp xếp giảm dần' }}
			    />
		    </ConfigProvider>
		    <ModalNote open={Object.values(dataInvoice).length !== 0} setOpen={onClickNote} dataInvoice={dataInvoice} />
	    </React.Fragment>
    );
}

TableComponent.propTypes = {
	total: PropTypes.number,
	pageNumber: PropTypes.number,
	dataSource: PropTypes.array,
	dataSourceOrigin: PropTypes.object,
	setIsCallApi: PropTypes.func,
	setIsLoading: PropTypes.func,
	getColumnSearchProps: PropTypes.func,
	onDeleteItemDataSource: PropTypes.func,
};

TableComponent.defaultProps = {
	total: 0,
	dataSource: [],
	dataSourceOrigin: {},
	setIsCallApi: () => null,
	setIsLoading: () => null,
	getColumnSearchProps: () => null,
	onDeleteItemDataSource: () => null,
};

export default React.memo(TableComponent);
