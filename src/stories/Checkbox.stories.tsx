import React from 'react';
import {type Meta, type Story} from '@storybook/react';
import Checkbox, {type PropTypes} from '../app/components/checkbox';

export default {
	title: 'Checkbox',
	component: Checkbox,
	argTypes: {handleClick: {action: 'handleClick'}},
} as Meta;

const Template: Story<PropTypes> = args => <Checkbox {... args} />;

export const CheckedWithText = Template.bind({});
CheckedWithText.args = {isChecked: true, label: 'Are you sure?'};

export const UnCheckedWithText = Template.bind({});
UnCheckedWithText.args = {isChecked: false, label: 'Are you sure?'};

export const Checked = Template.bind({});
Checked.args = {isChecked: true};

