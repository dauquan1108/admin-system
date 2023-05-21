// TODO HungHVd - 14/04/2023: ...
import React from 'react';
import { Table, Tag } from 'antd';
import styles from "./styles/index.module.scss";

const data = [
    {
        cardNumber: '123321',
        bankName: 'BIDV',
        limit: '100000000',
        transactionNumber: '3',
        unpaid: '145000',
        time: '14/04/2023',
    },
    {
        cardNumber: '456789',
        bankName: 'BIDV',
        limit: '100000000000',
        transactionNumber: '3',
        unpaid: '1450000',
        time: '14/04/2023',
    },
];

const columns = [
    {
        title: 'Số thẻ',
        dataIndex: 'cardNumber',
        key: 'cardNumber',
        align: 'center',
    },
    {
        title: 'Ngân hàng',
        dataIndex: 'bankName',
        key: 'bankName',
        align: 'center',
    },
    {
        title: 'Hạn mức (vnđ)',
        dataIndex: 'limit',
        key: 'limit',
        align: 'center',
    },
    {
        title: 'Số lần giao dịch',
        dataIndex: 'transactionNumber',
        key: 'transactionNumber',
        align: 'center',
    },
    {
        title: 'Phí chưa thu khách (vnđ)',
        key: 'unpaid',
        dataIndex: 'unpaid',
        render: (_, record) => (
            <Tag color={'#219653'} key={_}>
                <span className={styles.tag}>
                    {Number(_).toLocaleString('it-IT')}
                </span>
            </Tag>
        ),
        align: 'center',
    },
    {
        title: 'Lịch đáo thẻ',
        dataIndex: 'time',
        key: 'time',
        align: 'center',
    },
];

function ExpandableRowDebtsContent() {
    return (
        <div className={styles['expandable-row']}>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
            />
        </div>
    );
}

export default ExpandableRowDebtsContent;
