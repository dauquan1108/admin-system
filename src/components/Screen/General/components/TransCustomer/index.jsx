// TODO HungHVd - 14/04/2023: ...
import React from 'react';
import { Select } from 'antd';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Styles
import styles from './styles/index.module.scss';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const optionsChart = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [100, 150, 90, 200, 130, 20, 70],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ],
};

const options = [
    { value: 'month', label: 'Tháng' },
    { value: 'quarter', label: 'Quý' },
    { value: 'year', label: 'Năm' },
];

function TransCustomer() {
    return (
        <div className={styles.generals}>
            <div className={styles.head}>
                <h3>Khách hàng giao dịch trong tháng</h3>
                <Select
                    defaultValue={'month'}
                    style={{ width: 110 }}
                    options={options}
                />
            </div>
            <div className={styles.content}>
                <Line options={optionsChart} data={data} />
            </div>
        </div>
    );
}

export default TransCustomer;