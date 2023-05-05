/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 1/2/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from 'antd';

// Component
import ChartColumn from "../../../ChartsColumn";

// Style
import styles from './Styles/index.module.scss';

// image
import close from '../../../Img/close.png';
import ChartPercent from "../../../ChartPercent";

function OpenChart() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const onClose = () => {
        setIsModalOpen(false);
    }
    const handleOk = () => {
        onClose();
    };

    return(
        <div>
            <Button type="primary" onClick={showModal} icon={<PlusCircleOutlined />}>
                Mở giao diện sơ đồ
            </Button>
            <Modal
                title="Sơ đồ"
                centered
                width={800}
                okText="Lưu"
                cancelText="Đóng"
                onOk={handleOk}
                onCancel={onClose}
                open={isModalOpen}
                wrapClassName={styles.wrapModalAdd}
                closeIcon={<img src={close} alt="" width='12px' />}
            >
            <ChartColumn />
            <ChartPercent />
            </Modal>
        </div>
    );
}

OpenChart.propTypes = {};

OpenChart.defaultProps = {};

export default React.memo(OpenChart);
