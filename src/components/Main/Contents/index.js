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

// lib
import React, { Suspense } from 'react';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
	UserOutlined,
	PieChartOutlined,
	CalendarOutlined,
	AppstoreAddOutlined,
	TransactionOutlined,
	UsergroupAddOutlined,
} from '@ant-design/icons';

// Components
import Loading from '../../Loading';

// Utils
import ROUTES from '../../../utils/const/namerouter';

// Style
import styles from './Styles/index.module.scss';

// const component 
const Statistical = React.lazy(() => import('../../Screen/Statistical'));

function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	};
}

const items = [
	getItem('Thống kê', ROUTES.STATISTICAL, <PieChartOutlined />),
	getItem('Giao dịch', ROUTES.TRANSACTIONS, <TransactionOutlined />),
	getItem('Lịch đáo thẻ', ROUTES.CALENDAR, <CalendarOutlined />),
	getItem('Khách hàng', ROUTES.CUMTOMER, <UsergroupAddOutlined />),
	getItem('Nhân viên', ROUTES.STAFF, <UserOutlined />),
	getItem('Quản lý tài khoản', ROUTES.ACCOUNT_MANAGEMENT, <AppstoreAddOutlined />),
];

function About() {
	return (
		<div>
			<h2>About</h2>
		</div>
	);
}

function Contents({ collapsed }) {
	const navigate = useNavigate();

	const onClickItem = (event) => {
		navigate(event.key);
	};

	return (
		<div className={styles.content}>
			<div
				style={{
					width: !collapsed && 220,
				}}
			>
				<Menu
					className={styles.menuLeft}
					// defaultSelectedKeys={[screen]}
					// defaultOpenKeys={[screen]}
					mode="inline"
					theme="dark"
					inlineCollapsed={collapsed}
					items={items}
					onClick={onClickItem}
				/>
			</div>
			<div className={styles.viewScreen}>
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path={ROUTES.STATISTICAL} element={<About />} />
						<Route path={ROUTES.TRANSACTIONS} element={<Statistical />} />
						<Route path={ROUTES.CALENDAR} element={<About />} />
						<Route path={ROUTES.CUMTOMER} element={<About />} />
						<Route path={ROUTES.STAFF} element={<About />} />
						<Route path={ROUTES.ACCOUNT_MANAGEMENT} element={<About />} />
						<Route path='*' element={<About />} />
					</Routes>
				</Suspense>
			</div>
		</div>
	);
}

Contents.propTypes = {
	collapsed: PropTypes.bool,
};

Contents.defaultProps = {
	collapsed: false,
};

export default Contents;
