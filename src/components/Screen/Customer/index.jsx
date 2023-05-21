// TODO By HungHVd - 10/04/2023: ...
import React from 'react';

// Components
import HeadCustomer from './Head';
import ContentCustomer from './Content';
import ContextModal from './ContextModal';

// Styles
import styles from './styles/index.module.scss';

function Customer() {
    return (
        <ContextModal>
            <div className={styles['customer-root']}>
                <HeadCustomer />
                <ContentCustomer />
            </div>
        </ContextModal>
    );
}

export default Customer;
