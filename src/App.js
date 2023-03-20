// lib
import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// Utils
// import ROUTES from './utils/const/namerouter';

// const route
const TodoApp = React.lazy(() => import('./components/AppTodo'));

function App() {
	return (
		<TodoApp />
	);
}

export default App;
