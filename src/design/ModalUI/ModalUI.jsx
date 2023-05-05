import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Modal} from 'antd';

// components
import useModalUI from "./useModalUI";

function ModalUI({children,  btnModal, title, _onOk, ...otherProps}) {
    const {
        isModal,
        onShow,
        ...propsModal
    } = useModalUI({title, ...otherProps});

    // render

    return (
        <React.Fragment>
            {btnModal(onShow)}
            <Modal open={isModal} title={title} {...propsModal}>
                {children}
            </Modal>
        </React.Fragment>
    );
};

ModalUI.propTypes = {
    children: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element, PropTypes.string]).isRequired,
    btnModal: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element, PropTypes.string]),

    title: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element, PropTypes.string]),
};

ModalUI.defaultProps = {
    title: 'Thêm mới',
    btnModal: null,
};

export default React.memo(ModalUI);
