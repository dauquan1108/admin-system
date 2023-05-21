// TODO HungHVd - 14/04/2023: ...
import React from 'react';
import { Select } from 'antd';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

// Styles
import styles from './styles/index.module.scss';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
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
            type: 'line',
            label: 'Dataset 1',
            borderColor: '#219653',
            borderWidth: 2,
            fill: false,
            data: [90, 140, 190, 240, 215, 165, 115],
        },
        {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: '#F2C94C',
            data: [400, 600, 800, 1000, 850, 750, 500],
            borderColor: 'white',
            borderWidth: 2,
        },
        {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: '#EB5757',
            data: [100, 150, 200, 250, 225, 175, 125],
        },
        {
            type: 'bar',
            label: 'Dataset 4',
            backgroundColor: '#3751FF',
            data: [140, 170, 250, 260, 230, 200, 150],
        },
    ],
};

const options = [
    { value: 'month', label: 'Tháng' },
    { value: 'quarter', label: 'Quý' },
    { value: 'year', label: 'Năm' },
];

function TransAmountTotal() {
    return (
        <div className={styles.generals}>
            <div className={styles.head}>
                <h3>Tổng tiền giao dịch (vnđ)</h3>
                <Select
                    defaultValue={'month'}
                    style={{ width: 110 }}
                    options={options}
                />
            </div>
            <div className={styles.content}>
                <Chart type='bar' data={data} options={optionsChart} />
            </div>
        </div>
    );
}

export default TransAmountTotal;