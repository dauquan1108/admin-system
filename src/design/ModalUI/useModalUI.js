import React, {useCallback, useState} from 'react';
import styles from './styles/index.module.scss';
import classNames from "classnames";
import {Button} from "antd";

const BtnCancel = ({onCancel = () => null}) => (
    <Button
        key="cancel"
        type="primary"
        danger size='large'
        onClick={onCancel}
    >
        Đóng
    </Button>
);

const BtnOk = ({onOk = () => null}) => (
    <Button
        key="ok"
        size='large'
        type="primary"
        onClick={onOk}
        // disabled={isDisabled || confirmLoading}
        // loading={confirmLoading}
    >
        Lưu
    </Button>
);

const footerDefault = [
    <BtnCancel />,
    <BtnOk />,
];

export default function useModalUI({wrapClassName, footer = footerDefault, ...otherProps}) {
    const [isModal, _setIsModal] = useState(false);
    const [isLoading, _setIsLoading] = useState(false);

    const onShow = useCallback(() => {
        _setIsModal(true);
    }, []);

    const onCancel = useCallback(() => {
        _setIsModal(false);
    }, []);

    const onOk = useCallback(() => {
        _setIsModal(false);
    }, []);

    // code tiếp
    const footerUI = footer.map((item) => item && React.cloneElement(item, { onCancel, onOk }));

    // render
    return {
        isModal,
        onShow,
        onCancel,
        wrapClassName: classNames(styles.modalAddNew, wrapClassName),
        footer: footerUI,
        ...otherProps
    };
}
