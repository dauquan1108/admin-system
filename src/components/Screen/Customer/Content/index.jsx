// TODO HungHVd - 10/04/2023:...
import React from 'react';
import { LockOutlined, EyeOutlined, EditFilled } from '@ant-design/icons';
import {Table, Tag, Tooltip, Popconfirm, message, Modal} from 'antd';

// Components
import SearchInput from '../../../common/SearchInput';
import SelectFilter from '../../../common/SelectFilter';
import ModalViewInfoCredit from '../ModalViewInfoCredit';

// Context
import { ContextModalState } from '../ContextModal';

// Styles
import styles from './styles/index.module.scss';

const option_select = [
    { value: 'lucy', label: 'Tất cả' },
    { value: 'Yiminghe', label: 'yiminghe' },
    { value: 'disabled', label: 'Disabled', disabled: true },
];

const action = {
    onClick: (actionType, payload) => null
}
const customer_action = {
    LOCK: 'lock',
    DETAIL: 'detail',
    EDIT: 'edit',
    VIEW_CREDIT: ' view_credit',
}

const data = [
    {
        key: '1',
        name: 'John Brown',
        phoneNumber: '0385474645',
        cardNumber: '123456',
        address: 'New York No. 1 Lake Park',
        tags: ['123321', '111111'],
        transactionNumber: 10,
        action,
    },
    {
        key: '2',
        name: 'Jim Green',
        phoneNumber: '0385474646',
        cardNumber: '321123',
        address: 'London No. 1 Lake Park',
        tags: ['123456'],
        transactionNumber: 6,
        action,
    },
    {
        key: '3',
        name: 'Joe Black',
        phoneNumber: '0385474647',
        cardNumber: '456654',
        address: 'Sydney No. 1 Lake Park',
        tags: ['456654', '444444'],
        transactionNumber: 5,
        action,
    },
    {
        key: '4',
        name: 'John Brown',
        phoneNumber: '0385474645',
        cardNumber: '123456',
        address: 'New York No. 1 Lake Park',
        tags: ['123321', '111111'],
        transactionNumber: 10,
        action,
    },
    {
        key: '5',
        name: 'Jim Green',
        phoneNumber: '0385474646',
        cardNumber: '321123',
        address: 'London No. 1 Lake Park',
        tags: ['123456'],
        transactionNumber: 6,
        action,
    },
    {
        key: '6',
        name: 'Joe Black',
        phoneNumber: '0385474647',
        cardNumber: '456654',
        address: 'Sydney No. 1 Lake Park',
        tags: ['456654', '444444'],
        transactionNumber: 5,
        action,
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
            <>
                {record.tags.map((tag) => (
                        <Tag color={'geekblue'} key={tag}>
                            <span className={styles.tag} onClick={() => record.action.onClick(customer_action.VIEW_CREDIT, record)}>
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
        title: 'Tổng số lần giao dịch',
        dataIndex: 'transactionNumber',
        key: 'transactionNumber',
        align: 'center',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <span>
                <Popconfirm
                    title="Khóa tài khoản"
                    description="Bạn có thực sự muốn khóa tài khoản?"
                    onConfirm={() => record.action.onClick(customer_action.LOCK, record)}
                    okText="Yes"
                    cancelText="No"
                >
                    <Tooltip title="Khóa tài khoản">
                        <LockOutlined style={{color: '#2F80ED'}} />
                    </Tooltip>
                </Popconfirm>
                <Tooltip title="Xem chi tiết"><span onClick={() => record.action.onClick(customer_action.DETAIL, record)}><EyeOutlined style={{padding: '0 7px'}}/></span></Tooltip>
                <Tooltip title="Sửa tài khoản"><span onClick={() => record.action.onClick(customer_action.EDIT, record)}><EditFilled style={{color: '#2F80ED'}} /></span></Tooltip>
            </span>
        ),
        align: 'center'
    },
];

function ContentCustomer() {
    const {modalState, setModalState} = React.useContext(ContextModalState);
    const [visibleModalInfoCredit, setVisibleModalInfoCredit] = React.useState(false);

    action.onClick = (actionType, payload) => {
        if (!modalState.visible) {
            switch (actionType) {
                case customer_action.DETAIL:
                    setModalState({...modalState, userId: '123', visible: true});
                    break;
                case customer_action.EDIT:
                    setModalState({...modalState, isEdit: true, userId: '123', visible: true});
                    break;
                case customer_action.LOCK:
                    message.success('Thành công!');
                    break;
                case customer_action.VIEW_CREDIT:
                    !visibleModalInfoCredit && setVisibleModalInfoCredit(!visibleModalInfoCredit);
                    break;
                default:
                    break;
            }
        }
    }

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const handleOk = () => {
        setVisibleModalInfoCredit(false);
    };

    const handleCancel = () => {
        setVisibleModalInfoCredit(false);
    };

    return (
        <div className={styles.content}>
            <div className={styles.search}>
                <SearchInput className={styles['input-search']} />
                <SelectFilter
                    defaultValue="lucy"
                    style={{ width: 110 }}
                    onChange={handleChange}
                    options={option_select}
                />
            </div>
            <div className={styles['main-content']}>
                <Table columns={columns} dataSource={data} pagination={{total: 90, pageSize: 8, showTotal: (total) => total}} />
            </div>
            <Modal
                title={'Thông tin thẻ'}
                open={visibleModalInfoCredit}
                destroyOnClose={true}
                onOk={handleOk}
                onCancel={handleCancel}
                cancelText={'Đóng'}
                okText={'Xem chi tiết'}
                width={700}
            >
                <ModalViewInfoCredit />
            </Modal>
        </div>
    );
}

export default ContentCustomer;
