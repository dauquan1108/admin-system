// TODO HungHVd - 13/04/2023: ...
import React from 'react';
import { Select } from 'antd';

// Styles
import styles from './styles/index.module.scss';

function SelectFilter({label = 'Trạng thái', options = [], defaultValue = '', style = {}, onChange = () => null, className}) {
    return (
        <div className={`${styles['select-search']} ${className}`}>
            <span>{label}:</span>
            <Select
                defaultValue={defaultValue}
                style={{ width: 110, ...style }}
                onChange={onChange}
                options={options}
            />
        </div>
    );
}

export default SelectFilter;