import React from 'react';
import {type Colors, bgColors, textColors} from '../../constants/colors';

export interface PropTypes {
	label: string;
	color: Colors['primary'] | Colors['black8'];
	textColor: Colors['white'] | Colors['gray'];
	type: 'submit' | 'button';
	border?: boolean;
	handleClick?: () => void;
}
function Button({label, color, textColor, border, type, handleClick}: PropTypes) {
	const isSubmit = type === 'submit';
	const onButtonClick = () => {
		if (handleClick !== undefined) {
			handleClick();
		}
	};

	return (
		<button onClick={isSubmit ? () => null : onButtonClick} type={type} className={`max-w-[345px] px-6 py-3 mb-4 font-bold ${bgColors[color]} ${textColors[textColor]} ${border ? 'border border-gainsboro py-[10px]' : 'shadow-buttonShadow'}`}>{label}</button>
	);
}

export default Button;
