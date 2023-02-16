import React from 'react';
import LoginForm from '../components/login-form';
import Logo from '../components/logo';
function LoginPage() {
	return (
		<main className='w-screen h-screen flex flex-col items-center justify-center bg-whiteSmoke'>
			<Logo />
			<LoginForm />
		</main>
	);
}

export default LoginPage;
