import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Navigate} from 'react-router-dom';

import LoginPage from './app/pages/login-page';
import ChartsPage from './app/pages/chart-page';
import PeopleQtt from './app/pages/chart-page/people-qtt';
import BearthAndDeath from './app/pages/chart-page/birth-and-death';
function App() {
	return (
		<Routes>
			<Route path='/login' element={<LoginPage />}/>
			<Route element={<ChartsPage />}>
				<Route path='/chart/people-qtt' element={<PeopleQtt />}/>
				<Route path='/chart/birth-and-death' element={<BearthAndDeath />}/>
			</Route>
			<Route path='/chart/*' element={<Navigate to='/chart/people-qtt'/>}/>
			<Route path='*' element={<Navigate to='/login'/>}/>
		</Routes>
	);
}

export default App;
