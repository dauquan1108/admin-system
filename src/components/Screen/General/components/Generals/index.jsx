// TODO HungHVd - 14/04/2023: ...
import React from 'react';
import {Select} from 'antd';

// svg
import chocolate from './assets/chocolate.svg';
import creditCard from './assets/credit-card.svg';
import economy from './assets/economy.svg';
import notificationBell from './assets/notification-bell.svg';
import onlineShop from './assets/online-shop.svg';
import user from './assets/user.svg';
import user1 from './assets/user2.svg';
import user2 from './assets/user3.svg';

// Styles
import styles from './styles/index.module.scss';

const contents = [
    {
        key: 'newCustomerTotal',
        title: 'Khách hàng mới',
        icon: user,
        backgroundColor: '#8EEBFF',
        color: '#219653',
    },
    {
        key: 'transTotal',
        title: 'Số giao dịch',
        icon: chocolate,
        backgroundColor: '#A37743',
        color: '#F2C94C',
    },
    {
        key: 'hanDao',
        title: 'Đến hạn đáo',
        icon: notificationBell,
        backgroundColor: '#E0E0E0',
        color: '#4F4F4F',
    },
    {
        key: 'transMoneyTotal',
        title: 'Tổng tiền giao dịch',
        icon: economy,
        backgroundColor: '#F2C94C',
        color: '#fff',
    },
    {
        key: 'fee',
        title: 'Tổng phí trả ngân hàng',
        icon: creditCard,
        backgroundColor: '#F2994A',
        color: '#fff',
    },
    {
        key: 'feeCollected',
        title: 'Tổng tiền thu khách',
        icon: user1,
        backgroundColor: '#2F80ED',
        color: '#fff',
    },
    {
        key: 'interest',
        title: 'Tổng doanh thu',
        icon: onlineShop,
        backgroundColor: '#219653',
        color: '#fff',
    },
    {
        key: 'notCollected',
        title: 'Tổng tiền chưa thu',
        icon: user2,
        backgroundColor: '#E40909',
        color: '#fff',
    },
]

const options = [
    { value: 'month', label: 'Tháng' },
    { value: 'quarter', label: 'Quý' },
    { value: 'year', label: 'Năm' },
];


function Generals({data = {
    newCustomerTotal: 100,
    transTotal: 30,
    hanDao: 10,
    transMoneyTotal: '1000000000',
    fee: '9000000',
    feeCollected: '20000000',
    interest: '19000000',
    notCollected: '10000000',
}}) {
    return (
        <div className={styles.generals}>
            <div className={styles.head}>
                <h3>Thống kê tổng quát</h3>
                <Select
                    defaultValue={'month'}
                    style={{ width: 110 }}
                    options={options}
                />
            </div>
            <div className={styles.content}>
                {contents.map((item) => (
                    <div key={item.key} className={styles.item} style={{backgroundColor: item.backgroundColor, color: item.color}}>
                        <img src={item.icon} />
                        <div>
                            <span>{item.title}</span>
                            <span>{data[item.key]}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Generals;