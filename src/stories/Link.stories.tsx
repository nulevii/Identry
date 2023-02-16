import React from 'react';
import {type Meta, type Story} from '@storybook/react';
import Link, {type PropTypes} from '../app/components/link';

export default {
	title: 'Link',
	component: Link,
} as Meta;

const Template: Story<PropTypes> = args => <Link {... args} />;

export const LinkWithLabel = Template.bind({});
LinkWithLabel.args = {href: '/', label: 'No account yet', linkLabel: 'Sign up now'};

export const LinkWithoutLabel = Template.bind({});
LinkWithoutLabel.args = {href: '/', linkLabel: 'Forgot password'};

export const CenteredLink = Template.bind({});
CenteredLink.args = {href: '/', linkLabel: 'Forgot password', isOnCenter: true};
