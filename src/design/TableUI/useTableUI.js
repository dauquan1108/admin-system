// lib
import React, { useCallback } from 'react';
import { Popconfirm, Space, Tag, Tooltip, message, Spin } from "antd";
import { useSelector } from "react-redux";

// components
import { convertDMY } from "components/Shared/Time";

// icons
import iconEdit from "components/Img/edit.png";
import iconDelete from "components/Img/delete.png";
import iconEye from "components/Img/eye_1.png";

// styles
import styles from "components/Transaction/styles/index.module.scss";

// utils
import convertMoney from "cores/utils/functions/convertMoney";
import isInstanceof from "cores/utils/functions/isInstanceof";
import useDispatchCore from "cores/hooks/useDispathCore";
import selectorTransaction from "cores/selector/selectorTransaction";
import TYPE_STORE from "cores/utils/constants/TYPE_STORE";

const columnsDefault = [
    {
        key: "stt",
        dataIndex: "stt",
        title: "STT",
    },
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
    },
    {
        key: "devicePost",
        dataIndex: "devicePost",
        title: "Thiết bị",
        sortDirections: ["descend", "ascend"],
        // fixed: "left",
    },
    {
        title: "Chủ thẻ",
        dataIndex: "fullname",
        key: "fullname",
        render: (fullname, row) => {
            return <b><i>{`${fullname} ${row.cardNumber ? ' ' + row.cardNumber : ''}`}</i></b>
        },
    },
    {
        key: "money",
        dataIndex: "money",
        title: "Tiền giao dịch",
        with: '250px',
        render: (value) => <Tag color="#2db7f5"><b>{`${convertMoney(value) || 0} đ`}</b></Tag>,
    },
    {
        title: "Phí thu khách",
        key: "feesClient",
        dataIndex: "feesClient",
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
        width: 180,
        render: (_, record, data) =>
            data.dataSource.length >= 1 ? (
                <Space size="middle">
                    <Tooltip title='Xem chi tiết'>
                        <img src={iconEye} alt='icon eye' className={styles.icon} onClick={() => data.onShow(record)} />
                    </Tooltip>
                    <Tooltip title='Chỉnh sửa thông tin'>
                        <img src={iconEdit} alt='icon eye' className={styles.icon} onClick={() => data.onEdit(record)} />
                    </Tooltip>
                    <Popconfirm
                        okText="Có"
                        cancelText="Không"
                        title="Bạn có chắc muốn xóa ?"
                        onConfirm={() => data.onDelete(record.key)}
                    >
                        <Tooltip title='Xóa'>
                            <img src={iconDelete} alt='icon eye' className={styles.icon} />
                        </Tooltip>
                    </Popconfirm>
                </Space>
            ) : null
    },
];

// instance
const instanceData = {
    key: ['string', true],
    type: ['string', true],
    workTimestamp: ['string', true],
    devicePost: ['string', true],
    fullname: ['string', true],
    cardNumber: ['string', true],
}

const showLoading = () => (
    <div>
        <Spin size='large' />
    </div>
);

const pageDefault = ({ page: 1, limit: 7 })

function useTableUI({nameAPI = TYPE_STORE.Transaction, columns = columnsDefault, onShow, onEdit, onDelete, other}) {
    // custom hook
    const dispatch = useDispatchCore();

    // selector
    const { total, dataSource, pageIds } = useSelector((store) => selectorTransaction(store, nameAPI,pageDefault.limit));

    // states
    const [{ limit, page }, _setPagination] = React.useState(pageDefault);
    const [isLoading, setIsLoading] = React.useState(true);

    // methods actions
    const getList = useCallback((_limit = limit, _page = page) => {
        const params = { limit: _limit, page: _page };
        dispatch.dispatchCore(nameAPI, dispatch.METHOD.GET_LIST, {}, params, {}, onSuccess);
    }, [limit, page]);

    // methods
    const showMessage = () => {
        message.success("Thành công");
    }
    const onSuccess = () => {
        setIsLoading(false);
    };
    const setPagination = useCallback((page, limit) => {
        _setPagination({ page, limit });
        // console.log('pageIds: ', pageIds);
        // console.log('page: ', `${page}`);
        if (!(pageIds).includes(`${page}`)) {
            getList(limit, page)
            setIsLoading(true);
        }
    }, [pageIds]);

    const _onDelete = useCallback((key) => {
        isInstanceof({ key }, { key: ['string', true] })
        if (typeof onDelete === 'function') {
            onDelete(key);
        } else {
            setIsLoading(true);
            dispatch.dispatchCore(nameAPI, dispatch.METHOD.REMOTE, { id: key }, undefined, undefined, showMessage);
        }
    }, [onDelete]);

    const _onEdit = useCallback((data) => {
        isInstanceof(data, instanceData)
        if (typeof onEdit === 'function') {
            // Xử lý một đống logic tiếp trong đây
        }
    }, [onEdit]);

    const _onShow = useCallback((data) => {
        // isInstanceof(data, instanceData)
        if (typeof onShow === 'function') {
            // Xử lý một đống logic tiếp trong đây
        }
    }, [onShow]);

    const columnsBind = columns.map((column) => {
        if (column.key === 'operation') {
            // Cách 1:
            return {
                ...column,
                render: (text, record) => {
                    return column.render(text, record, {
                        onDelete: _onDelete,
                        onEdit: _onEdit,
                        onShow: _onShow,
                        dataSource,
                    });
                },
            }
            // Cách 2: Đây là các sử dụng this
            // return column?.render.bind({
            //     onDelete,
            //     onEdit,
            //     onShow,
            //     dataSource
            // });
        }
        return column;
    });

    // render
    return {
        columns: columnsBind,
        dataSource,
        setPagination,
        getList,
        loading: { indicator: showLoading(), spinning: isLoading, state: [isLoading, setIsLoading] },
        pagination: {
            defaultPageSize: pageDefault.limit,
            pageSize: limit,
            defaultCurrent: pageDefault.page,
            current: page,
            total,
            onChange: setPagination,
            showTotal: (total, range) => `${range[0]}-${range[1]} của ${total} giao dịch`
        },
        ...other,
    };
}

export default useTableUI;
