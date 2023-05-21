// TODO By HungHVd - 14/04/2023: ...
import React from 'react';

// Components
import HeadStaff from './Head';
import ContentStaff from './Content';
import ContextModal from './ContextModal';

// Styles
import styles from './styles/index.module.scss';

function Staff() {
    return (
        <ContextModal>
            <div className={styles['staff-root']}>
                <HeadStaff />
                <ContentStaff />
            </div>
        </ContextModal>
    );
}

export default Staff;
