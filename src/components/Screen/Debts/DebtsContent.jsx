// TODO HungHVd - 14/04/2023: ...
import React from 'react';
import {DollarCircleFilled, EyeOutlined, ScheduleOutlined} from '@ant-design/icons';
import {Table, Tag, Tooltip} from 'antd';

// Components
import SearchInput from '../../common/SearchInput';
import ExpandableRowDebtsContent from './ExpanRowDebtsContent';

// Styles
import styles from './styles/index.module.scss';

const data = [
    {
        key: '1',
        name: 'John Brown',
        phoneNumber: '0385474645',
        cardNumber: '123456',
        address: 'New York No. 1 Lake Park',
        tags: ['123321', '111111'],
        unpaid: '100000',
    },
    {
        key: '2',
        name: 'John Brown',
        phoneNumber: '0385474645',
        cardNumber: '123456',
        address: 'New York No. 1 Lake Park',
        tags: ['123321'],
        unpaid: '200000',
    },
    {
        key: '3',
        name: 'John Brown',
        phoneNumber: '0385474645',
        cardNumber: '123456',
        address: 'New York No. 1 Lake Park',
        tags: ['123321', '111111'],
        unpaid: '450000',
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
        title: 'Tên chủ thẻ',
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
            <>
                {record.tags.map((tag) => (
                        <Tag color={'#2F80ED'} key={tag}>
                            <span className={styles.tag}>
                                {tag.toUpperCase()}
                            </span>
                        </Tag>
                    )
                )}
            </>
        ),
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

function DebtsContent({total = '900000'}) {
    return (
        <div className={styles.content}>
            <div className={styles['box-total']}>
                <div>
                    <DollarCircleFilled style={{fontSize: 60, color: '#fff'}} />
                    <div className={styles['total-info']}>
                        <span>Tổng tiền chưa thu</span>
                        <span>{Number(total).toLocaleString('it-IT')} vnđ</span>
                    </div>
                </div>
            </div>
            <SearchInput className={styles['input-search']} />
            <div className={styles['main-content']}>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{total: 90, pageSize: 8, showTotal: (total) => total}}
                    expandable={{
                        expandedRowRender: (record) => <ExpandableRowDebtsContent data={record} />,
                        rowExpandable: (record) => true,
                    }}
                />
            </div>
        </div>
    );
}

export default DebtsContent;
