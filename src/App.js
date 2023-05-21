// lib
import React from 'react';
import { Routes, Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// core
import useAuthorCore from "cores/hooks/useAuthorCore";

// Utils
import ROUTES from './utils/const/namerouter';

// compononents
import Loading from './components/Loading';

// const route
const Login = React.lazy(() => import('./components/Screen/Login'));
const Main = React.lazy(() => import('./components/Main'));
const TodoApp = React.lazy(() => import('./components/AppTodo'));

function App() {
	const author = useAuthorCore()
	const me = useSelector(store => store.me);
	const [loading, setLoading] = React.useState(true); // Mặc định lúc nào cũng sẽ là loading khi mới vào app

	const onSuccess = React.useCallback(() => {
		setLoading(false);
	}, []);

	const onFalse = React.useCallback(() => {
		setLoading(false);
	}, [])

	// Kiểm tra trạng tái login của ứng dụng
	React.useEffect(() => {
		author.handleCheckLogin(onSuccess, onFalse)
	}, [])

	// Hiển thị loading để làm tăng độ mượn khi người dùng sử dụng
	if (loading) return <Loading style={{ height: window.innerHeight }} />;

	// Những tính năng không cần đăng nhập
	if (!me) {
		return (
			<Routes>
				<Route path={ROUTES.TODOS} element={<TodoApp />} />
				<Route path='*' element={<Login />} />
			</Routes>
		)
	}

	// Những giao diện cần phải đăng nhập mới sử dụng được
	return (
		<Routes>
			<Route path={ROUTES.TODOS} element={<TodoApp />} />
			<Route path='*' element={<Main />} />
		</Routes>
	);
}

export default App;
