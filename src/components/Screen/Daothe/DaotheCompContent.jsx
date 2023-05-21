// TODO HungHVd - 14/04/2023: ...
import React from 'react';
import {EyeOutlined, ScheduleOutlined} from '@ant-design/icons';
import {Table, Tag, Tooltip} from 'antd';

// Components
import SearchInput from '../../common/SearchInput';
import SelectFilter from '../../common/SelectFilter';

// Styles
import styles from './styles/index.module.scss';

const getDayMonthYear = (dateString) => {
    const date = dateString ? new Date(dateString) : new Date();
    return {day: date.getDate(), month: date.getMonth(), year: date.getFullYear()};
};

const dateNow = getDayMonthYear();

const data = [
    {
        key: '1',
        name: 'John Brown',
        phoneNumber: '0385474645',
        cardNumber: '123456',
        transMoney: '100000000',
        collect: '100000',
        date_daothe: '04/14/2023',
    },
    {
        key: '1',
        name: 'John Brown',
        phoneNumber: '0385474645',
        cardNumber: '123456',
        transMoney: '100000000',
        collect: '100000',
        date_daothe: '04/16/2023',
    },
    {
        key: '1',
        name: 'John Brown',
        phoneNumber: '0385474645',
        cardNumber: '123456',
        transMoney: '100000000',
        collect: '100000',
        date_daothe: '04/15/2023',
    },
    {
        key: '1',
        name: 'John Brown',
        phoneNumber: '0385474645',
        cardNumber: '123456',
        transMoney: '100000000',
        collect: '100000',
        date_daothe: '04/20/2023',
    }
];

const columns = [
    {
        title: 'STT',
        dataIndex: 'key',
        key: 'key',
        align: 'center',
    },
    {
        title: 'Tên khách hàng',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
        align: 'center',
    },
    {
        title: 'Số thẻ',
        key: 'cardNumber',
        dataIndex: 'cardNumber',
        render: (_, record) => (
            <Tag color={'#2F80ED'} key={_}>
                <span className={styles.tag}>
                    {_}
                </span>
            </Tag>
        ),
        align: 'center',
    },
    {
        title: 'Tiền giao dịch (vnđ)',
        key: 'transMoney',
        dataIndex: 'transMoney',
        render: (_, record) => (
            <Tag color={'#F2C94C'} key={_}>
                <span className={styles.tag}>
                    {Number(_).toLocaleString('it-IT')}
                </span>
            </Tag>
        ),
        align: 'center',
    },
    {
        title: 'Phí thu khách (vnđ)',
        key: 'collect',
        dataIndex: 'collect',
        render: (_, record) => (
            <Tag color={'#2F80ED'} key={_}>
                <span className={styles.tag}>
                    {Number(_).toLocaleString('it-IT')} (1.22%)
                </span>
            </Tag>
        ),
        align: 'center',
    },
    {
        title: 'Ngày đáo thẻ',
        key: 'date_daothe',
        dataIndex: 'date_daothe',
        // render: (_, record) => (
        //     <Tag color={'#2F80ED'} key={_}>
        //         <span className={styles.tag}>
        //             {Number(_).toLocaleString('it-IT')} (1.22%)
        //         </span>
        //     </Tag>
        // ),
        render: (dateString) => {
            const date = getDayMonthYear(dateString);
            if (date.month === dateNow.month && date.year === dateNow.year) {
                if (date.day === dateNow.day) {
                    return <span className={styles.due}>Đến hạn hôm nay</span>;
                }
                if (date.day - dateNow.day <= 2 && date.day - dateNow.day >= 0) {
                    return <span className={styles['near-due']}>{dateString}</span>;
                }
            }
            return dateString;
        },
        align: 'center',
    },
    {
        title: 'Thao tác',
        key: 'action',
        render: (_, record) => (
            <span>
                <Tooltip title="Xem chi tiết"><EyeOutlined style={{padding: '0 7px'}}/></Tooltip>
                <Tooltip title="Sửa tài khoản"><ScheduleOutlined style={{color: '#F2C94C'}} /></Tooltip>
            </span>
        ),
        align: 'center'
    },
];

const option_select = [
    { value: 'lucy', label: 'Tất cả' },
    { value: 'Yiminghe', label: 'yiminghe' },
    { value: 'disabled', label: 'Disabled', disabled: true },
];

const rowClassName = (record, index) => {
    const date = getDayMonthYear(record.date_daothe);
    if (date.month === dateNow.month && date.year === dateNow.year) {
        if (date.day === dateNow.day) {
            return styles['highlight-due'];
        }
        if (date.day - dateNow.day <= 2 && date.day - dateNow.day >= 0) {
            return styles['highlight-near-due'];
        }
    }
    return '';
};

function DaotheCompContent({dueNumber = 3}) {
    return (
        <div className={styles.content}>
            <div className={styles['box-search']}>
                <SearchInput className={styles['input-search']} />
                <SelectFilter label={'Phí thu khách'} options={option_select} />
            </div>

            <div className={styles['main-content']}>
                <p className={styles['due-number']}>Số lượng thẻ đến hạn: {dueNumber}</p>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{total: 90, pageSize: 8, showTotal: (total) => total}}
                    rowClassName={rowClassName}
                />
            </div>
        </div>
    );
}

export default DaotheCompContent;
