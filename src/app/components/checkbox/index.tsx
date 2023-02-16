import React, {useState} from 'react';
import {MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox} from 'react-icons/md';

export interface PropTypes {
	isChecked: boolean;
	label?: string;
	handleClick?: () => void;
}
function Checkbox({isChecked, label, handleClick}: PropTypes) {
	const [checked, setChecked] = useState(isChecked);
	const onCheckboxClick = () => {
		setChecked(!checked);
		if (handleClick !== undefined) {
			handleClick();
		}
	};

	return (
		<label className='cursor-pointer flex items-center'>
			{checked
				? <MdOutlineCheckBox className='h-[18px] w-[18px] text-gray '/>
				: <MdOutlineCheckBoxOutlineBlank className='h-[18px] w-[18px] text-gray'/>}
			<input checked={checked} onChange={onCheckboxClick} className='hidden' type='checkbox' />
			<p className='ml-2 font-normal text-base leading-6 text-gray select-none'>{label}</p>
		</label>
	);
}

export default Checkbox;
