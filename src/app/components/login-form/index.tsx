import React from 'react';
import Button from '../button';
import TextInput from '../text-input';
import Checkbox from '../checkbox';
import Link from '../link';
function LoginForm() {
	return (
		<form className='h-[404px] font-bold font-si w-[350px] flex flex-col p-6 shadow-popupShadow bg-white'>
			<h2 className='text-[32px] leading-10 mb-6 text-black-100'>Login</h2>
			<TextInput type='email' required={true}/>
			<TextInput type='password' required={true}/>
			<div className='flex justify-between mb-6'>
				<Checkbox isChecked={false} label='Remember me'/>
				<Link href='/' linkLabel='Forgot password?'/>
			</div>
			<Button type='submit' label='Log in' color='primary' textColor='white' />
			<Link href='/' label='No account yet?' linkLabel='Sign up now' isOnCenter={true}/>
		</form>
	);
}

export default LoginForm;
