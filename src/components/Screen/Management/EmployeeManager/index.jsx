/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 3/13/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
// import PropTypes from 'prop-types';

// Style
import styles from "./Styles/index.module.scss";
import ItemStaff from "./ItemStaff";

const data = [
	{ id: 1, name: 'Nguyễn Hồng Đăng', avatar : 'https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/327029693_708725687418667_9163197552793877487_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=v91CkCFtbqMAX9xxTSE&_nc_ht=scontent.fhan14-4.fna&oh=00_AfCNtx7Yq6YBn8wYanToARC19rZNOysYSA022ZbLEXRBcg&oe=64153A58' ,position: 'Nhân viên', phone: '0387091106' },
	{ id: 2, name: 'Lê Thị Ngân', avatar: 'https://i.pinimg.com/564x/70/84/38/70843832d8bb7f2851b8e329df51fe39.jpg', position: 'Nhân viên', phone: '0330933044' },
	{ id: 3, name: 'Lê Công Tuấn', avatar: 'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/321680773_680923370361351_1800594972224573671_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MUznndX5o78AX9LXkHi&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAKdxs-eR3dQowOnHsRjzrbgLzINVysyzERX-IaU4drbA&oe=6413B772 ', position: 'Nhân viên', phone: '0387778888' },
	{ id: 4, name: 'Lê Thị Phương', avatar: 'https://i.pinimg.com/564x/a7/03/5d/a7035d6b9273d5f2333ef1b8af225541.jpg', position: 'Nhân viên', phone: '0386667777' },
	{ id: 5, name: 'Đậu Thị Nhật Minh', avatar: 'https://i.pinimg.com/564x/07/96/ab/0796abe006c80a75d1e26549c55bca1e.jpg', position: 'Nhân viên', phone: '0387099056' },
	{ id: 6, name: 'Nguyễn Thu Huyền', avatar: 'https://i.pinimg.com/564x/7b/00/db/7b00dbcd370afb399eefd5ecee3d1373.jpg', position: 'Nhân viên', phone: '03870112233' },
];

function EmployeeManager(props) {

    return(
        <div className={styles.wrap}>
	        <div className={styles.title}>
		        <span>Quản lý nhân viên</span>
	        </div>
	        <div className={styles.contentList}>
		        {data.length > 0 && data.map((item) => <ItemStaff key={item.id} value={item} /> )}
	        </div>
        </div>
    );
}

// EmployeeManager.propTypes = {};
//
// EmployeeManager.defaultProps = {};

export default EmployeeManager;
