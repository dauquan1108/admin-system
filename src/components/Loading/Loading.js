import React from 'react';
import { Spin } from 'antd';

function LoadingLazy({ style = {}, className = '', children = null }) {
    return (
        <div className={`${className} loading`} style={style}>
            {
                children ? children : <Spin tip="Loading" size="large" />
            }
        </div>
    );
}


export default LoadingLazy;