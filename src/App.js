// lib
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Utils
import ROUTES from './utils/const/namerouter';

// const route
const Login = React.lazy(() => import('./components/Screen/Login'));
const Main = React.lazy(() => import('./components/Main'));
const TodoApp = React.lazy(() => import('./components/Todo/TodoApp'));

function App() {
	return (
		<Routes>
			<Route path={ROUTES.LOGIN} element={<Login />} />
			<Route path={ROUTES.TODOS} element={<TodoApp />} />
			<Route path='*' element={<Main />} />
		</Routes>
	);
}

export default App;
