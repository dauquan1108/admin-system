import React, { Suspense } from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// Component
import App from './App';
import Loading from './components/Loading';

// store
import store from 'cores/reducers';

// Style
import './index.css';
import './styles/core.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<BrowserRouter>
			<Suspense fallback={<Loading style={{ height: window.innerHeight }} />}>
				<App />
			</Suspense>
		</BrowserRouter>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
