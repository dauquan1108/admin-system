// TODO HungHVd - 14/04/2023: ...
import React from 'react';

// Components
import DebtsContent from './DebtsContent';

// Styles
import styles from './styles/index.module.scss';

function Debts() {
    return (
        <div className={styles['customer-root']}>
            <div className={styles['head']}>
                <h3>Danh sách khách hàng đang nợ lãi</h3>
            </div>
            <DebtsContent />
        </div>
    );
}

export default Debts;
