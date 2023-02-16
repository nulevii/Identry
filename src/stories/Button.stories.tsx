import React from 'react';
import {type Meta, type Story} from '@storybook/react';
import Button, {type PropTypes} from '../app/components/button';

export default {
	title: 'Button',
	component: Button,
	argTypes: {handleClick: {action: 'handleClick'}},
} as Meta;
const Template: Story<PropTypes> = args => <Button {... args} />;
export const LoginButton = Template.bind({});
LoginButton.args = {color: 'primary', label: 'Log in', textColor: 'white', type: 'submit'};
export const LoginButtonDisabled = Template.bind({});
LoginButtonDisabled.args = {color: 'black8', label: 'Not Submit', textColor: 'gray', border: true, type: 'button'};
