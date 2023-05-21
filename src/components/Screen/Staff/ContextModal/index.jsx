// TODO HungHVd - 14/04/2023: ...
import React from 'react';
import { Modal, message } from 'antd';

// Components
import ContentModal from './ContentModal';

const initState = {
    userId: '',
    isEdit: false,
    visible: false,
};

export const ContextModalState = React.createContext({
    setModalState: () => null,
    modalState: initState,
})

export const modalInfo = {
    edit: {
        type: 'edit',
        title: 'Sửa thông tin nhân viện',
    },
    detail: {
        type: 'detail',
        title: 'Thông tin nhân viên',
    },
    create: {
        type: 'create',
        title: 'Tạo mới nhân viên',
    }
};

const footer = {};

function ContextModal({children}) {
    const [modalState, setModalState] = React.useState(initState);

    const modalInfoSelect = modalState.userId ? modalState.isEdit ? modalInfo.edit : modalInfo.detail : modalInfo.create;
    const isDetailModal = modalInfoSelect.type === modalInfo.detail.type;

    const handleOk = () => {
        setModalState(initState);
        message.success('Thành công!');
    };

    const handleCancel = () => {
        setModalState(initState);
    };

    if (isDetailModal) {
        footer.footer = null;
    } else {
        delete footer.footer;
    }
    return (
        <React.Fragment>
            <ContextModalState.Provider value={{modalState, setModalState}}>{children}</ContextModalState.Provider>
            <Modal
                title={modalInfoSelect.title}
                open={modalState.visible}
                destroyOnClose={true}
                onOk={handleOk}
                onCancel={handleCancel}
                width={750}
                okText={'Lưu'}
                cancelText={'Đóng'}
                {...footer}
            >
                <ContentModal type={modalInfoSelect.type} />
            </Modal>
        </React.Fragment>
    );
}

export default ContextModal;
