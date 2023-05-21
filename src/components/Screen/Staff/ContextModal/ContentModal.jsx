// TODO HungHVd - 14/04/2023: ...
import React from 'react';
import {Form, Input, Row, Col, Select, Checkbox, Modal, message} from 'antd';

// Components
import CropAvatar from './CropAvatar';

// Utils
import getCroppedImg from '../../../common/CropMedia/getCroppedImg';

// Const
import {modalInfo} from './index';

// Styles
import styles from './styles/index.module.scss';

const options = [
    {
        value: 'male',
        label: 'Nam',
    },
    {
        value: 'female',
        label: 'Nữ',
    }
];

const createObjectURL = (object) => (window.URL ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object));

function ContentModal({type = modalInfo.detail.type, staff = {
    avatar: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/328812992_931644181344244_2850350465287247179_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ONE_LEFHy2gAX-nb8dz&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBEoo1V0tJ-IrcstOLNvHA5uiw804YFcTN4fLJWfgtyZw&oe=643CF51C',
    sex: 'male',
    id: '123abc',
    dateOfBirth: '01/04/2023',
    name: 'Lê Văn Mong',
    transProcessed: 13,
    phoneNumber: '0385474645',
    status: true,
    email: 'monglv@gmail.com',
}}) {
    const {} = staff;
    const [avatar, setAvatar] = React.useState(staff.avatar || '');
    const [sex, setSex] = React.useState(staff.sex || '');
    const [id, setId] = React.useState(staff.id || '');
    const [dateOfBirth, setDateOfBirth] = React.useState(staff.dateOfBirth || '');
    const [name, setName] = React.useState(staff.name || '');
    const [transProcessed, setTransProcessed] = React.useState(staff.transProcessed || '');
    const [phoneNumber, setPhoneNumber] = React.useState(staff.phoneNumber || '');
    const [status, setStatus] = React.useState(staff.status || '');
    const [email, setEmail] = React.useState(staff.email || '');
    const [openModalCrop, setVisibleModalCrop] = React.useState(false);
    const cropDataRef = React.useRef(null);
    const isDetailModal = type === modalInfo.detail.type;

    const onChangeAvatar = (event, onPaste, imageList) => {
        const files = imageList && imageList.length > 0 ? imageList : onPaste ? event : event.target.files;
        const src = createObjectURL(files[0]);
        setAvatar(src);
        setVisibleModalCrop(true);
    };

    const handleOk = async () => {
        const _croppedImage = await getCroppedImg(avatar, cropDataRef.current);
        setAvatar(_croppedImage);
        setVisibleModalCrop(!openModalCrop);
    };

    const handleCancel = () => {
        setVisibleModalCrop(!openModalCrop);
    };

    return (
        <div className={`${styles['content-modal']} ${isDetailModal ? styles['modal-detail'] : ''}`}>
            <Modal
                title={'Cắt ảnh'}
                open={openModalCrop}
                destroyOnClose={true}
                onOk={handleOk}
                onCancel={handleCancel}
                width={isDetailModal ? 950 : 550}
                okText={'Lưu'}
                cancelText={'Đóng'}
            >
                <CropAvatar url={avatar} cropDataRef={cropDataRef} />
            </Modal>
            <Form name="basic" labelCol={{span: 10}}>
                <Row gutter={30}>
                    <Col span={12}>
                        <Form.Item
                            label="Ảnh"
                            name="avatar"
                            labelAlign={'left'}
                        >
                            <div className={styles['form-item-input']}>
                                <img id={'avatar-view'} src={avatar} alt={''} width={50} height={50} className={styles.avatar} />
                                {!isDetailModal && <input id={'avatar-view'} type={'file'} multiple={false} onChange={onChangeAvatar} />}
                            </div>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Giới tính"
                            name="sex"
                            labelAlign={'left'}
                        >
                            {isDetailModal ? <Input defaultValue={sex === options[0].value ? options[0].label : options[1].label} /> :
                            <Select
                                defaultValue={sex}
                                style={{
                                    width: 120,
                                }}
                                onChange={setSex}
                                options={options}
                            />}
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Mã nhân viên"
                            name="id"
                            rules={[{required: !isDetailModal}]}
                            labelAlign={'left'}
                        >
                            <Input defaultValue={id} value={id} onChange={(e) => setId(e.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Ngày sinh"
                            name="dateOfBirth"
                            rules={[{required: !isDetailModal}]}
                            labelAlign={'left'}
                        >
                            <Input defaultValue={dateOfBirth} value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Tên nhân viên"
                            name="name"
                            rules={[{required: !isDetailModal}]}
                            labelAlign={'left'}
                        >
                            <Input defaultValue={name} value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Số giao dịch đã xử lý"
                            name="transProcessed"
                            labelAlign={'left'}
                        >
                            <Input defaultValue={transProcessed} value={transProcessed} onChange={(e) => setTransProcessed(e.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Số điện thoại"
                            name="phoneNumber"
                            rules={[{required: !isDetailModal}]}
                            labelAlign={'left'}
                        >
                            <Input defaultValue={phoneNumber} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Trạng thái"
                            name="status"
                            labelAlign={'left'}
                        >
                            {isDetailModal ? <Input className={status ? styles['green-text'] : styles['red-text']} defaultValue={status ? 'Đang hoạt động' : 'Tài khoản khóa'} /> :
                            <Checkbox onChange={(e) => setStatus(e.target.checked)}>Khóa tài khoản</Checkbox>}
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Email"
                            name="email"
                            labelAlign={'left'}
                        >
                            <Input defaultValue={email} value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default ContentModal;
