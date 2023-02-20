/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 1/15/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';

// Component
import MenuTop from './MenuTop';
import Contents from './Contents';

// Style
import styles from './Styles/index.module.scss';

function Main() {
    const [collapsed, setCollapsed] = React.useState(false);

    return (
        <div className={styles.wrapMain}>
            <MenuTop collapsed={collapsed} setCollapsed={setCollapsed} />
            <Contents collapsed={collapsed} />
        </div>
    );
}

export default Main;
