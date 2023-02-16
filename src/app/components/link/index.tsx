import React from 'react';

export interface PropTypes {
	label?: string;
	linkLabel: string;
	href: string;
	isOnCenter?: boolean;
}
function Link({href, label, linkLabel, isOnCenter = false}: PropTypes) {
	return (
		<p className={`font-normal text-base leading-6 text-gray select-none ${isOnCenter ? 'mx-auto' : ''}`}>{label} <a href={href} className='text-link'>{linkLabel}</a></p>
	);
}

export default Link;
