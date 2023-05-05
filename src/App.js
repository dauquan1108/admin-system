// lib
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {useSelector} from "react-redux";

// Utils
import ROUTES from './utils/const/namerouter';
import { selectBackgroundImg } from './cores/reducers/backgroundImg';

// const route
const Login = React.lazy(() => import('./components/Screen/Login'));
const Main = React.lazy(() => import('./components/Main'));
const TodoApp = React.lazy(() => import('./components/AppTodo'));

function App() {
	const backgroundImg = useSelector(selectBackgroundImg);
	return (
		<React.Fragment>
			<div className={'background'}>
				<img src={backgroundImg && backgroundImg.img || ''} alt="" />
			</div>
			<Routes>
				<Route path={ROUTES.LOGIN} element={<Login />} />
				<Route path={ROUTES.TODOS} element={<TodoApp />} />
				<Route path='*' element={<Main />} />
			</Routes>
		</React.Fragment>
	);
}

export default App;
