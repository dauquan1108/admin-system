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
import { convertDMY } from "../Shared/Time";

// Search
import Search from "../Shared/useSearch";

// Img
import iconEye from "../../../Img/eye.png";
import iconEdit from "../../../Img/edit.png";
import iconDelete from "../../../Img/delete.png";

// Style
import styles from "./Styles/index.module.scss";

function TableComponent(props) {
	const {
		isLoading,
		dataSource,
		pageNumber,
		setIsLoading,
		setIsCallApi,
		dataSourceOrigin,
		onDeleteItemDataSource,
	} = props;

	const { getColumnSearchProps } = Search();

	const dispatch = useDispatchCore();

	const hasTransaction = useSelector(store => store[dispatch.TYPE.HasTransaction]);

	// Đóng mở Modal
	const [dataInvoice, setDataInvoice] = React.useState({});

	const onClickNote = (record) => {
		// TODO: Update data để hiển thị modal NOTE
		setDataInvoice(record);
	};

	const onClickEdit = () => {
		message.success('Chức năng đang phát triển',5 );
	};

	const onClickDeleteItem = (id) => {
		// TODO: Xóa Item khỏi danh sách
		message.success('Chức năng đang phát triển',5 );
		// const newData = dataSource.filter((item) => item.key !== id);
		// onDeleteItemDataSource && onDeleteItemDataSource(id, newData, pageNumber);
	};

	const convertMoney = (money) => {
	    return (money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	};

	const { provinceDataType } = useModalAddNew();

	const columns = [
		{
			key: "type",
			dataIndex: "type",
			title: "Hình thức",
			align: "center",
			fixed: "left",
			width: 120,
			visible: true, // hiển thị cột Hình thức
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
			key: "workTimestamp",
			dataIndex: "workTimestamp",
			title: "Ngày làm",
			width: 120,
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
			width: 180,
			fixed: "left",
			visible: true, // hiển thị cột Tên thiết bị,

			// sorter: (a, b) => a.devicePost.length - b.devicePost.length,
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
			title: "Số tiền làm cho khách",
			// render: (value) => <Tag color="geekblue">{`${convertMoney(value) || 0} vnđ`}</Tag>
			render: (value) => <span>{`${convertMoney(value)} vnđ`}</span>,
			visible: true, // hiển thị cột Name
		},
		{
			key: "percentBank",
			dataIndex: "percentBank",
			title: "% Phí ngân hàng",
			visible: false, // ẩn cột percentBank
			render: (value) => (
				<span>
					{`${value} %`}
				</span>
			),
		},
		{
			title: "Phí ngân hàng thu",
			key: "bankMoney",
			dataIndex: "bankMoney",
			visible: true, // hiển thị cột Phí ngân hàng thu
			render: (value, row) => {
				return (
					<span>{`${value} vnđ, (${row.percentBank} %)`}</span>
				);
			}
		},
		{
			key: "percentCustomer",
			dataIndex: "percentCustomer",
			title: "% Phí thu khách",
			visible: false, // ẩn thị cột % Phí thu khách
			render: (value) => (
				<span>
					{`${value} %`}
				</span>
			),
		},
		{
			title: "Phí thu khách",
			key: "feesClient",
			dataIndex: "feesClient",
			visible: true, // hiển thị cột Phí thu khách
			render: (value, row) => {
				return (
					<span>{`${value} vnđ, (${row.percentCustomer} %)`}</span>
				);
			}
		},
		{
			title: "Tiền lãi",
			key: "interestRate",
			dataIndex: "interestRate",
			visible: true, // hiển thị cột Tiền lãi
			render: (value) => {
				return (
					<span>{`${value} vnđ`}</span>
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

	const cancel = (pageNumber, pageSize) => {
		setIsCallApi && setIsCallApi({ pageNumber, pageSize });
		if (dataSourceOrigin && !dataSourceOrigin.hasOwnProperty(pageNumber)) {
			setIsLoading && setIsLoading(true);
		}
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

	const total = hasTransaction.total || 0;

    return(
    	<React.Fragment>
		    <ConfigProvider locale={locales}>
			    <Table
				    pageSize={10}
				    // columns={columns}
				    columns={columns.filter((column) => column.visible)}
				    scroll={{x: 1400}}
				    dataSource={dataSource}
				    className={styles.wrapTable}
				    locale={!isLoading && !dataSource.length && locale}
				    loading={{ indicator: showLoading(), spinning: isLoading }}
				    // rowClassName={(record) => (record.type === provinceDataType[0] ? styles.withdrawMoney : styles.unique)}
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
	isLoading: PropTypes.bool,
	pageNumber: PropTypes.number,
	dataSource: PropTypes.array,
	dataSourceOrigin: PropTypes.object,
	setIsCallApi: PropTypes.func,
	setIsLoading: PropTypes.func,
	getColumnSearchProps: PropTypes.func,
	onDeleteItemDataSource: PropTypes.func,
};

TableComponent.defaultProps = {
	dataSource: [],
	isLoading: false,
	dataSourceOrigin: {},
	setIsCallApi: () => null,
	setIsLoading: () => null,
	getColumnSearchProps: () => null,
	onDeleteItemDataSource: () => null,
};

export default React.memo(TableComponent);
