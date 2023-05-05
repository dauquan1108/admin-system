// lib
import React from 'react';
import {Button, Tooltip} from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

// components
import ModalUI from "design/ModalUI/ModalUI";
import BodyModal from "./BodyModal";

function AddTransaction() {
    // render
    const btnModal = (onShow) => (
        <Tooltip placement="bottom" title="Thêm mới khách hàng">
            <Button type="primary" onClick={onShow} icon={<PlusCircleOutlined />}>
                Thêm mới
            </Button>
        </Tooltip>
    );
    return(
        <ModalUI btnModal={btnModal} centered width={900} title={'Thêm mới giao dịch'}>
            <BodyModal />
        </ModalUI>
    );
}

export default AddTransaction;
