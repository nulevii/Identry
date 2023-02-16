import React from 'react';
import logo from '../../assets/logo.svg';
import logoText from '../../assets/logo-text.svg';

function Logo() {
	return (
		<a href='/' className='flex items-center mb-24'>
			<img className='w-[41px] h-[47px] block' src={logo} alt='Logo' />
			<img className='w-[184px] h-[53px] pt-2 ml-4 block' src={logoText} alt='Identry' />
		</a>
	);
}

export default Logo;
