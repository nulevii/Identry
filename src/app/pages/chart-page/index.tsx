import React from 'react';
import Logo from '../../components/logo';
import {useNavigate, NavLink, Outlet} from 'react-router-dom';
import Button from '../../components/button';
function BornAndDeathPage() {
	const navigate = useNavigate();
	return (
		<>
			<header className='p-6 flex justify-between items-baseline'>
				<Logo />
				<nav>
					<NavLink to={'/chart/people-qtt'} className='p-2 mr-4 text-white bg-primary rounded-md hover:bg-danger transition-all'>People Quantity</NavLink>
					<NavLink to={'/chart/birth-and-death'} className='p-2 text-white bg-primary rounded-md hover:bg-danger transition-all'>Births and Deaths</NavLink>
				</nav>
			</header>
			<main className='p-6'>
				<Outlet />
			</main>
			<footer className='p-6 flex justify-end items-baseline'>
				<Button handleClick={() => {
					navigate('/login');
				}} label='Log out' color='black8'textColor='gray' type='button' border={true}/>
			</footer>
		</>
	);
}

export default BornAndDeathPage;
