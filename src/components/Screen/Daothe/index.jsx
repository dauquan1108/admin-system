// TODO HungHVd - 14/04/2023: ...
import React from 'react';

// Components
import DaotheCompContent from './DaotheCompContent';

// Styles
import styles from './styles/index.module.scss';

function DaotheComponent() {
    return (
        <div className={styles['customer-root']}>
            <div className={styles['head']}>
                <h3>Lịch đáo thẻ của khách hàng</h3>
            </div>
            <DaotheCompContent />
        </div>
    );
}

export default DaotheComponent;
