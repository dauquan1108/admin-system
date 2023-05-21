// TODO HungHVd - 14/04/2023: ...
import React from 'react';
import {Table} from 'antd';

// Styles
import styles from './styles/index.module.scss';

const data = [
    {
        key: '1',
        fullname: 'Lê Văn Mong',
        phoneNumber: '0385474645',
        transNum: '12',
    },
    {
        key: '2',
        fullname: 'Lê Văn Mong',
        phoneNumber: '0385474645',
        transNum: '2',
    },
    {
        key: '3',
        fullname: 'Lê Văn Mong',
        phoneNumber: '0385474645',
        transNum: '1',
    },
    {
        key: '4',
        fullname: 'Lê Văn Mong',
        phoneNumber: '0385474645',
        transNum: '10',
    },
];

const columns = [
    {
        title: 'STT',
        dataIndex: 'key',
        key: 'key',
        align: 'center',
    },
    {
        title: 'Họ và tên',
        dataIndex: 'fullname',
        key: 'fullname',
        align: 'center',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
        align: 'center',
    },
    {
        title: 'Số lần giao dịch',
        dataIndex: 'transNum',
        key: 'transNum',
        align: 'center',
    }
];

function TopCustomer() {
    return (
        <div className={styles.generals}>
            <div className={styles.head}>
                <h3>Top 5 khách hàng giao dịch nhiều nhất trong tháng</h3>
            </div>
            <div className={styles.content}>
                <Table columns={columns} dataSource={data} pagination={false} />
            </div>
        </div>
    );
}

export default TopCustomer;