// TODO HungHVd - 14/04/2023: ...
import React from 'react';

// Components
import Generals from './components/Generals';
import TransAmountTotal from './components/TransAmountTotal';
import TransCustomer from './components/TransCustomer';
import TopCustomer from './components/TopCustomer';

// Styles
import styles from './styles/index.module.scss';

function General() {
    return (
        <div className={styles['general-root']}>
            <div className={styles.generals}>
                <Generals />
            </div>
            <div className={styles['trans-amount-total']}>
                <TransAmountTotal />
            </div>
            <div>
                <div className={styles['trans-customer']}>
                    <TransCustomer />
                </div>
                <div className={styles['trans-customer']}>
                    <TopCustomer />
                </div>
            </div>
        </div>
    );
}

export default General;