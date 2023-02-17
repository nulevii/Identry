import React from 'react';
import {Routes, Route} from 'react-router-dom';
import LoginPage from './app/pages/login-page';
import ChartsPage from './app/pages/hight-charts-page';
import {Navigate} from 'react-router-dom';
function App() {
	return (
		<Routes>
			<Route path='/login' element={<LoginPage />}/>
			<Route path='/chart' element={<ChartsPage />}/>
			<Route path='*' element={<Navigate to='/login'/>}/>
		</Routes>
	);
}

export default App;
