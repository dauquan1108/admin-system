// TODO HungHVd - 14/04/2023:...
import React from 'react';
import { LockOutlined, EyeOutlined, EditFilled } from '@ant-design/icons';
import {Table, Tooltip, Popconfirm, message} from 'antd';

// Components
import SearchInput from '../../../common/SearchInput';
import SelectFilter from '../../../common/SelectFilter';

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
const staff_action = {
    LOCK: 'lock',
    DETAIL: 'detail',
    EDIT: 'edit',
    VIEW_CREDIT: ' view_credit',
}

const data = [
    {
        key: '1',
        avatar: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/328812992_931644181344244_2850350465287247179_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ONE_LEFHy2gAX-nb8dz&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBEoo1V0tJ-IrcstOLNvHA5uiw804YFcTN4fLJWfgtyZw&oe=643CF51C',
        id: '123abc',
        name: 'Lê Văn Mong',
        phoneNumber: '0385474645',
        transProcessed: '13',
        action,
    },
    {
        key: '1',
        avatar: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/328812992_931644181344244_2850350465287247179_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ONE_LEFHy2gAX-nb8dz&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBEoo1V0tJ-IrcstOLNvHA5uiw804YFcTN4fLJWfgtyZw&oe=643CF51C',
        id: '123abc',
        name: 'Lê Văn Mong',
        phoneNumber: '0385474645',
        transProcessed: '13',
        action,
    },
    {
        key: '1',
        avatar: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/328812992_931644181344244_2850350465287247179_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ONE_LEFHy2gAX-nb8dz&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBEoo1V0tJ-IrcstOLNvHA5uiw804YFcTN4fLJWfgtyZw&oe=643CF51C',
        id: '123abc',
        name: 'Lê Văn Mong',
        phoneNumber: '0385474645',
        transProcessed: '13',
        action,
    },
    {
        key: '1',
        avatar: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/328812992_931644181344244_2850350465287247179_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ONE_LEFHy2gAX-nb8dz&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBEoo1V0tJ-IrcstOLNvHA5uiw804YFcTN4fLJWfgtyZw&oe=643CF51C',
        id: '123abc',
        name: 'Lê Văn Mong',
        phoneNumber: '0385474645',
        transProcessed: '13',
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
        title: 'Ảnh',
        dataIndex: 'avatar',
        key: 'avatar',
        align: 'center',
        render: (_) => <img className={styles.avatar} src={_} alt={''} width={50} height={50} />
    },
    {
        title: 'Mã nhân viên',
        dataIndex: 'id',
        key: 'id',
        align: 'center',
    },
    {
        title: 'Tên nhân viên',
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
        title: 'Số giao dịch đã xử lý',
        dataIndex: 'transProcessed',
        key: 'transProcessed',
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
                    onConfirm={() => record.action.onClick(staff_action.LOCK, record)}
                    okText="Yes"
                    cancelText="No"
                >
                    <Tooltip title="Khóa tài khoản">
                        <LockOutlined style={{color: '#2F80ED'}} />
                    </Tooltip>
                </Popconfirm>
                <Tooltip title="Xem chi tiết"><span onClick={() => record.action.onClick(staff_action.DETAIL, record)}><EyeOutlined style={{padding: '0 7px'}}/></span></Tooltip>
                <Tooltip title="Sửa tài khoản"><span onClick={() => record.action.onClick(staff_action.EDIT, record)}><EditFilled style={{color: '#2F80ED'}} /></span></Tooltip>
            </span>
        ),
        align: 'center'
    },
];

function ContentStaff() {
    const {modalState, setModalState} = React.useContext(ContextModalState);

    action.onClick = (actionType, payload) => {
        if (!modalState.visible) {
            switch (actionType) {
                case staff_action.DETAIL:
                    setModalState({...modalState, userId: '123', visible: true});
                    break;
                case staff_action.EDIT:
                    setModalState({...modalState, isEdit: true, userId: '123', visible: true});
                    break;
                case staff_action.LOCK:
                    message.success('Thành công!');
                    break;
                default:
                    break;
            }
        }
    }

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className={styles.content}>
            <div className={styles.search}>
                <SearchInput className={styles['input-search']} placeholder={'Tìm kiếm nhân viên'} />
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
        </div>
    );
}

export default ContentStaff;
