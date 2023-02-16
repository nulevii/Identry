import React from 'react';
import {type Meta, type Story} from '@storybook/react';
import Input, {type PropTypes} from '../app/components/text-input';

export default {
	title: 'Text Input',
	component: Input,
} as Meta;

const Template: Story<PropTypes> = args => <Input {... args} />;

export const EmailInput = Template.bind({});
EmailInput.args = {type: 'email', required: false};

export const PasswordInput = Template.bind({});
PasswordInput.args = {type: 'password', required: true};
