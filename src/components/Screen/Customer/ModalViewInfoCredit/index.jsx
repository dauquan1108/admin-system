// TODO HungHVd - 14/04/2023: ...
import React from 'react';
import {Row, Col} from 'antd';

// Styles
import styles from './styles/index.module.scss';

function ModalViewInfoCredit({creditInfo = {
    name: 'Lê Hoàng Anh',
    cardNumber: '0398',
    bankName: 'Vietcombank',
    limit: '100000000',
    transNum: 3,
    paid: '90000000',
    unpaid: '10000000',
    time: '14/04/2023',
}}) {
    return (
        <Row gutter={[60, 20]} className={`${styles['text-styles']} ${styles.wrap}`}>
            <Col span={12}>
                <Row>
                    <Col span={12}>Chủ thẻ:</Col>
                    <Col span={12}>{creditInfo.name}</Col>
                </Row>
            </Col>
            <Col span={12}>
                <Row>
                    <Col span={12}>Số lần giao dịch:</Col>
                    <Col span={12}>{creditInfo.transNum}</Col>
                </Row>
            </Col>
            <Col span={12}>
                <Row>
                    <Col span={12}>Số thẻ</Col>
                    <Col span={12}>{creditInfo.cardNumber}</Col>
                </Row>
            </Col>
            <Col span={12}>
                <Row>
                    <Col span={12}>Đã đóng (vnđ):</Col>
                    <Col span={12}>{Number(creditInfo.paid).toLocaleString('it-IT')}</Col>
                </Row>
            </Col>
            <Col span={12}>
                <Row>
                    <Col span={12}>Ngân hàng:</Col>
                    <Col span={12}>{creditInfo.bankName}</Col>
                </Row>
            </Col>
            <Col span={12}>
                <Row>
                    <Col span={12}>Chưa đóng (vnđ):</Col>
                    <Col span={12}>{Number(creditInfo.unpaid).toLocaleString('it-IT')}</Col>
                </Row>
            </Col>
            <Col span={12}>
                <Row>
                    <Col span={12}>Hạn mức (vnđ):</Col>
                    <Col span={12}>{Number(creditInfo.limit).toLocaleString('it-IT')}</Col>
                </Row>
            </Col>
            <Col span={12}>
                <Row>
                    <Col span={12}>Lịch đáo thẻ:</Col>
                    <Col span={12}>{creditInfo.time}</Col>
                </Row>
            </Col>
        </Row>
    );
}

export default ModalViewInfoCredit;
