import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Home from './views/Home/Home';
import About from './views/About/About';
import CounterRedux from './views/CounterRedux/CounterRedux';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					<Route index={true} element={<Home />} ></Route>
					<Route path='home' element={<Home />} ></Route>
					<Route path='about' element={<About />}></Route>
					<Route path='counter/redux' element={<CounterRedux />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;