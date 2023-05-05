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
import { useSelector } from "react-redux";
import locales from "antd/es/locale/vi_VN";
import { WarningFilled } from '@ant-design/icons';
import { Popconfirm, Space, Tag, Table, ConfigProvider, Spin, Tooltip, message } from "antd";

// Component
import ModalNote from '../ModalNote';
import useModalAddNew from "../ModalAddNew/useModalAddNew";

// Hooks custom
import useDispatchCore from "../../../../cores/hooks/useDispathCore";

// Shared
import { convertDMY } from "../../../Shared/Time";

// Search
import Search from "../../../Shared/useSearch";

// Img
import iconEye from "../../../Img/eye_1.png";
import iconEdit from "../../../Img/edit.png";
import iconDelete from "../../../Img/delete.png";

// Style
import styles from "./Styles/index.module.scss";

TableComponent.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	page: PropTypes.number.isRequired,
	limit: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	dataSource: PropTypes.array.isRequired,
	setPagination: PropTypes.func,
	setIsLoading: PropTypes.func,
	getColumnSearchProps: PropTypes.func,
	onDeleteItemDataSource: PropTypes.func,
	pageDefault: PropTypes.object,
};

TableComponent.defaultProps = {
	pageDefault: {
		defaultCurrent: 1, // vị trí page được chọn
		defaultPageSize: 7, // limit một lần lấy về và vẽ ra bao nhiêu
	},
	dataSource: [],
	isLoading: false,
	setPagination: () => null,
	setIsLoading: () => null,
	getColumnSearchProps: () => null,
	onDeleteItemDataSource: () => null,
};

function TableComponent(props) {
	const {
		isLoading,
		dataSource,
		page,
		limit,
		total,
		setIsLoading,
		setPagination,
		// dataSourceOrigin,
		onDeleteItemDataSource,
		pageDefault,
	} = props;

	const { getColumnSearchProps } = Search();

	// Đóng mở Modal
	const [dataInvoice, setDataInvoice] = React.useState({});

	const onClickNote = (record) => {
		// TODO: Update data để hiển thị modal NOTE
		setDataInvoice(record);
	};

	const onClickEdit = () => {
		message.success('Chức năng đang phát triển', 5);
	};

	const onClickDeleteItem = (id) => {
		// TODO: Xóa Item khỏi danh sách
		message.success('Chức năng đang phát triển', 5);
		// const newData = dataSource.filter((item) => item.key !== id);
		// onDeleteItemDataSource && onDeleteItemDataSource(id, newData, page);
	};

	const convertMoney = (money) => {
		return (money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	};

	// const { provinceDataType } = useModalAddNew();

	const columns = [
		{
			key: "type",
			dataIndex: "type",
			title: "Hình thức",
			align: "center",
			fixed: "left",
			visible: true, // hiển thị cột Hình thức
			render: (_, { type }) => (
				<Tag color={type.length > 5 ? "geekblue" : "green"} key={type}>
					{type.toUpperCase()}
				</Tag>
			),
			// filters: [
			// 	{
			// 		text: provinceDataType[0],
			// 		value: provinceDataType[0],
			// 	},
			// 	{
			// 		text: provinceDataType[1],
			// 		value: provinceDataType[1],
			// 	},
			// ],
			// onFilter: (value, record) => record.type.indexOf(value) === 0,
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
			fixed: "left",
			visible: true, // hiển thị cột Ngày làm
			// sorter: true
		},
		{
			key: "devicePost",
			dataIndex: "devicePost",
			title: "Tên thiết bị",
			...getColumnSearchProps("devicePost", "tên thiết bị"),
			sortDirections: ["descend", "ascend"],
			fixed: "left",
			visible: true, // hiển thị cột Tên thiết bị,

			// sorter: (a, b) => a.devicePost.length - b.devicePost.length,
		},
		{
			title: "Chủ thẻ",
			dataIndex: "fullname",
			key: "fullname",
			// ...getColumnSearchProps("fullname", "Chủ thẻ"),
			// sorter: (a, b) => a.fullname.length - b.fullname.length,
			// sortDirections: ["descend", "ascend"]
			render: (fullname) => {
				return <b><i>{fullname}</i></b>
			},
		},
		{
			title: "Số thẻ",
			dataIndex: "cardNumber",
			key: "cardNumber",
		},
		{
			key: "money",
			dataIndex: "money",
			title: "Số tiền làm cho khách",
			with: '250px',
			render: (value) => <Tag color="#2db7f5"><b>{`${convertMoney(value) || 0} đ`}</b></Tag>,
			// render: (value) => <span>{`${convertMoney(value)} đ`}</span>,
			visible: true, // hiển thị cột Name
		},
		// {
		// 	key: "percentBank",
		// 	dataIndex: "percentBank",
		// 	title: "% Phí ngân hàng",
		// 	visible: false, // ẩn cột percentBank
		// 	render: (value) => (
		// 		<span>
		// 			{`${value} %`}
		// 		</span>
		// 	),
		// },
		// {
		// 	key: "percentCustomer",
		// 	dataIndex: "percentCustomer",
		// 	title: "% Phí thu khách",
		// 	visible: false, // ẩn thị cột % Phí thu khách
		// 	render: (value) => (
		// 		<span>
		// 			{`${value} %`}
		// 		</span>
		// 	),
		// },
		{
			title: "Phí thu khách",
			key: "feesClient",
			dataIndex: "feesClient",
			visible: true, // hiển thị cột Phí thu khách
			render: (value, row) => {
				return (
					<Tag color={'#4fba69'}>{`${value} đ   (${row.percentCustomer} %)`}</Tag>
				);
			}
		},
		{
			title: "Phí ngân hàng thu",
			key: "bankMoney",
			dataIndex: "bankMoney",
			visible: true, // hiển thị cột Phí ngân hàng thu
			render: (value, row) => {
				return (
					<Tag color={'#f50'}>
						<b>
							{`${value}đ   (${row.percentBank} %)`}
						</b>
					</Tag>
				);
			}
		},
		{
			title: "Tiền lãi",
			key: "interestRate",
			dataIndex: "interestRate",
			align: "center",
			fixed: "right",
			visible: true, // hiển thị cột Option
			render: (value) => {
				return (
					<Tag color={'#87d068'}><b>{`${value} đ`}</b></Tag>
				);
			}
		},
		{
			key: "operation",
			dataIndex: "operation",
			title: "Option",
			align: "center",
			fixed: "right",
			width: 180,
			visible: true, // hiển thị cột Option
			render: (_, record) =>
				dataSource.length >= 1 ? (
					<Space size="middle">
						<Tooltip title='Xem chi tiết'>
							<img src={iconEye} alt='icon eye' className={styles.icon} onClick={() => onClickNote(record)} />
						</Tooltip>
						<Tooltip title='Chỉnh sửa thông tin'>
							<img src={iconEdit} alt='icon eye' className={styles.icon} onClick={onClickEdit} />
						</Tooltip>
						<Popconfirm
							okText="Có"
							cancelText="Không"
							title="Bạn có chắc muốn xóa ?"
							onConfirm={() => onClickDeleteItem(record.key)}
						>
							<Tooltip title='Xóa'>
								<img src={iconDelete} alt='icon eye' className={styles.icon} />
							</Tooltip>
						</Popconfirm>
					</Space>
				) : null
		},
	];

	const changePage = (page, limit) => {
		setPagination && setPagination({ page, limit });
		// if (dataSourceOrigin && !dataSourceOrigin.hasOwnProperty(page)) {
		setIsLoading && setIsLoading(true);
		// }
	};

	const locale = {
		emptyText: (
			<span>
				<WarningFilled style={{ fontSize: '25px', marginRight: '10px', color: '#f8b310' }} />
				Chưa có dữ liệu.
			</span>
		)
	};

	const showLoading = () => (
		<div>
			<Spin size='large' />
		</div>
	);

	return (
		<React.Fragment>
			<ConfigProvider locale={locales}>
				<Table
					columns={columns}
					scroll={{ x: 1400 }}
					dataSource={dataSource}
					className={styles.wrapTable}
					locale={!isLoading && !dataSource.length && locale}
					loading={{ indicator: showLoading(), spinning: isLoading }}
					// rowClassName={(record) => (record.type === provinceDataType[0] ? styles.withdrawMoney : styles.unique)}
					pagination={{
						onChange: changePage,

						pageSize: limit,

						total: total,
						current: page,

						...pageDefault
					}}
				// showSorterTooltip={{ title: 'Click để sắp xếp giảm dần' }}
				/>
			</ConfigProvider>
			<ModalNote open={Object.values(dataInvoice).length !== 0} setOpen={onClickNote} dataInvoice={dataInvoice} />
		</React.Fragment>
	);
}

export default React.memo(TableComponent);
