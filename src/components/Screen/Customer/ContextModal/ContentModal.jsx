// TODO HungHVd - 10/04/2023: ...
import React from 'react';
import {Form, Input, Table, Tag, Tooltip} from 'antd';

// Const
import {modalInfo} from './index';

// Styles
import styles from './styles/index.module.scss';

const data = [
    {
        cardNumber: '0345',
        bankName: 'BIDV',
        limit: '100000000',
        transNum: '3',
        paid: '100000000',
        unpaid: '0',
        time: '14/04/2023',
    },
    {
        cardNumber: '0346',
        bankName: 'VP',
        limit: '100000000',
        transNum: '3',
        paid: '90000000',
        unpaid: '10000000',
        time: '15/04/2023',
    }
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
        render: (_) => Number(_).toLocaleString('it-IT')
    },
    {
        title: 'Số lần giao dịch',
        dataIndex: 'transNum',
        key: 'transNum',
        align: 'center',
    },
    {
        title: 'Đã đóng (vnđ)',
        dataIndex: 'paid',
        key: 'paid',
        align: 'center',
        render: (_) => Number(_).toLocaleString('it-IT')
    },
    {
        title: 'Chưa đóng (vnđ)',
        dataIndex: 'unpaid',
        key: 'unpaid',
        align: 'center',
        render: (_) => Number(_).toLocaleString('it-IT')
    },
    {
        title: 'Lịch đáo thẻ',
        dataIndex: 'time',
        key: 'time',
        align: 'center',
    }
];

function ContentModal({type = modalInfo.detail.type, customer = {name: 'Lê Văn Mong', phoneNumber: '0385474645', citizenId: '153331223'}}) {
    const [name, setName] = React.useState(customer.name || '');
    const [phoneNumber, setPhoneNumber] = React.useState(customer.phoneNumber || '');
    const [citizenId, setCitizenId] = React.useState(customer.citizenId || '');
    const isDetailModal = type === modalInfo.detail.type;
    const labelSpan = isDetailModal ? 3 : 6;
    return (
        <div className={`${styles['content-modal']} ${isDetailModal ? styles['modal-detail'] : ''}`}>
            <div>
                {isDetailModal && <p className={styles['general-title']}>Thông chung</p>}
                <Form
                    name="basic"
                    labelCol={{span: labelSpan}}
                    wrapperCol={{span: 12}}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Chủ thẻ"
                        name="name"
                        rules={[{required: !isDetailModal}]}
                        labelAlign={'left'}
                    >
                        <Input defaultValue={name} value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        label="Số điện thoại"
                        name="phoneNumber"
                        rules={[{required: !isDetailModal}]}
                        labelAlign={'left'}
                    >
                        <Input defaultValue={phoneNumber} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        label="CMT/CCCD"
                        name="citizenId"
                        rules={[{required: !isDetailModal}]}
                        labelAlign={'left'}
                    >
                        <Input defaultValue={citizenId} value={citizenId} onChange={(e) => setCitizenId(e.target.value)} />
                    </Form.Item>
                </Form>
            </div>
            {isDetailModal && <div>
                <p className={styles['card-title']}>Thông tin thẻ</p>
                <Table columns={columns} dataSource={data} pagination={false} />
            </div>}
        </div>
    );
}

export default ContentModal;
