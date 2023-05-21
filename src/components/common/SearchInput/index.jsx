// TODO HungHVd - 13/04/2023:...
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

// Styles
import styles from './styles/index.module.scss';

function SearchInput({ value = '', onChange = () => null, placeholder = 'Tìm kiếm khách hàng', className = '' }) {
    return (
        <div className={`${styles['text-search']} ${className}`}>
            <SearchOutlined />
            <input value={value} onChange={onChange} type={'text'} placeholder={placeholder} />
        </div>
    );
}

export default SearchInput;