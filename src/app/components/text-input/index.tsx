import React from 'react';
import {MdOutlineMailOutline} from 'react-icons/md';
import {VscKey} from 'react-icons/vsc';

export interface PropTypes {
	type: 'email' | 'password';
	required: boolean;
}
function TextInput({type, required}: PropTypes) {
	const isEmail = type === 'email';
	const isPassword = type === 'password';
	return (
		<label className='mb-4 relative'>
			<p className='text-sm leading-[22px] capitalize font-normal text-gray select-none'>{type} {required && <span className='text-danger leading-[22px] text-base'>*</span>}</p>
			<input type={type} required={required} className='h-10 w-full  pl-10 pr-3 py-2 rounded-none border shadow-inputShadow text-base font-normal text-black-100 border-gainsboro bg-white outline-0 ' />
			{isEmail && <MdOutlineMailOutline className='absolute top-8  left-3 h-5 w-5 text-gainsboro'/>}
			{isPassword && <VscKey className='absolute left-3 top-8 h-5 w-5 text-gainsboro'/>}
		</label>
	);
}

export default TextInput;
