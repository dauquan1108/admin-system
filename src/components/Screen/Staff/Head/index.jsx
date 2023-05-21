// TODO HungHVd - 14/04/2023:...
import React from 'react';
import { PlusOutlined } from '@ant-design/icons';

import { ContextModalState } from '../ContextModal/index';

// Styles
import styles from './styles/index.module.scss';

function HeadStaff() {
    const {modalState, setModalState} = React.useContext(ContextModalState);
    const handleAdd = () => {
        if (!modalState.visible) {
            setModalState({...modalState, visible: true});
        }
    };
    return (
        <div className={styles.head}>
            <h3 className={styles.title}>Danh sách nhân viên</h3>
            <button className={styles['button-add']} onClick={handleAdd}>
                <PlusOutlined />
                <span>Thêm mới</span>
            </button>
        </div>
    );
}

export default HeadStaff;
