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
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
	UserOutlined,
	LoginOutlined,
	PieChartOutlined,
	CalendarOutlined,
	AppstoreAddOutlined,
	TransactionOutlined,
	UsergroupAddOutlined,
	AreaChartOutlined,
} from '@ant-design/icons';

// Components
import MenuTop from './MenuTop';
import Loading from '../../Loading';
import MenuLeftTop from "./MenuLeftTop";

// Reducers
import { selectBackgroundImg } from "../../../cores/reducers/backgroundImg";

// Selector
import selectorDevice from "../../../cores/selector/selectorDevice";

// Custom hooks
import useDispatchCore from "../../../cores/hooks/useDispathCore";

// Utils
import ROUTES from '../../../utils/const/namerouter';

// Style
import styles from './Styles/index.module.scss';

// const component
const Statistical = React.lazy(() => import('../../Screen/Statistical'));
const Management = React.lazy(() => import('../../Screen/Management'))
const Customer = React.lazy(() => import('../../Screen/Customer'));
const Staff = React.lazy(() => import('../../Screen/Staff'));
const Debts = React.lazy(() => import('../../Screen/Debts'));
const Daothe = React.lazy(() => import('../../Screen/Daothe'));
const General = React.lazy(() => import('../../Screen/General'));

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
	getItem('MAIN MENU', 'main', null, [
		getItem('Thống kê', ROUTES.STATISTICAL, <PieChartOutlined />),
		getItem('Giao dịch', ROUTES.TRANSACTIONS, <TransactionOutlined />),
		getItem('Lịch đáo thẻ', ROUTES.DAOTHE, <CalendarOutlined />),
		getItem('Khách hàng', ROUTES.CUSTOMER, <UsergroupAddOutlined />),
		getItem('Nhân viên', ROUTES.STAFF, <UserOutlined />),
		getItem('Tiền chưa thu', ROUTES.DEBTS, <AreaChartOutlined />),
	], 'group'),

	getItem('SETTING', 'setting', null, [
		getItem('Quản lý', ROUTES.ACCOUNT_MANAGEMENT, <AppstoreAddOutlined />)
	], 'group'),
	getItem('Đăng xuất', 'main', <LoginOutlined />)
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
	const dispatch = useDispatchCore();

	const getListDevice = () => {
		// Lấy danh sách thiết bị
		const params = { limit: 100, page: 1 };
		dispatch.dispatchCore(dispatch.TYPE.Device, dispatch.METHOD.GET_LIST, {}, params, {}, null, null); // get danh sách thiết bị
	};

	// Danh sách thiết bị.
	const optionsDevicePost = useSelector(selectorDevice);

	React.useLayoutEffect(() => {
		// Call API Lấy danh sách thiết bị
		!optionsDevicePost.length && getListDevice();
	}, []);

	const onClickItem = (event) => {
		navigate(event.key);
	};

	const backgroundImg = useSelector(selectBackgroundImg);

	return (
		<React.Fragment>
			<div className={styles.background}>
				<img src={backgroundImg && backgroundImg.img || ''} alt="" />
			</div>
			<div className={styles.content}>
				<div
					className={styles.menuLeft}
				>
					<div className={styles.menuLeftTop}>
						<MenuLeftTop />
					</div>
					<Menu
						className={styles.menuLeftBottom}
						// defaultSelectedKeys={[screen]}
						// defaultOpenKeys={[screen]}
						mode="inline"
						inlineCollapsed={collapsed}
						items={items}
						onClick={onClickItem}
					/>
				</div>
				<div className={styles.viewScreen}>
					<MenuTop />
					<div className={styles.viewScreenContent}>
						<Suspense fallback={<Loading />}>
							<Routes>
								<Route path={ROUTES.STATISTICAL} element={<General />} />
								<Route path={ROUTES.TRANSACTIONS} element={<Statistical />} />
								<Route path={ROUTES.DAOTHE} element={<Daothe />} />
								<Route path={ROUTES.CUSTOMER} element={<Customer />} />
								<Route path={ROUTES.STAFF} element={<Staff />} />
								<Route path={ROUTES.DEBTS} element={<Debts />} />
								<Route path={ROUTES.ACCOUNT_MANAGEMENT} element={<Management />} />
								<Route path='*' element={<About />} />
							</Routes>
						</Suspense>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

Contents.propTypes = {
	collapsed: PropTypes.bool,
};

Contents.defaultProps = {
	collapsed: false,
};

export default Contents;
