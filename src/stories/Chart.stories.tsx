import React from 'react';
import {type Meta, type Story} from '@storybook/react';
import Chart, {type PropTypes} from '../app/components/chart';
import data from '../app/constants/people-qtt.json';
import {type IPeopleQtt, type IBirthsAndDeaths} from '../app/constants/data-type';
import {colors} from '../app/constants/colors';
import birthAndDeathQtt from '../app/constants/birth-and-death.json';
const birthsAndDeathsYears = birthAndDeathQtt.map((element: IBirthsAndDeaths) => element.year.toString());
const births = birthAndDeathQtt.map((element: IBirthsAndDeaths) => element.birthNumber);
const deaths = birthAndDeathQtt.map((element: IBirthsAndDeaths) => element.deathNumber);
const PeopleQttYears = data.map((element: IPeopleQtt) => element.year.toString());
const peopleQtt = data.map((element: IPeopleQtt) => element.value * 1000000);

export default {
	title: 'Chart',
	component: Chart,
	argTypes: {handleClick: {action: 'handleClick'}},
} as Meta;

const Template: Story<PropTypes> = args => <Chart {... args} />;

export const PeopleQuantity = Template.bind({});
PeopleQuantity.args = {series: [{
	type: 'spline',
	data: peopleQtt,
	name: 'People Quantity',
	zones: [{value: 1000000000, color: colors.info}, {color: colors.link}],
}], title: 'Approximate number of people on earth', subtitle: 'Based on data from the worldpopulationreview.com', xCategories: PeopleQttYears,
xTitle: '25-year intervals from first A.D. till Now', yTitle: 'Billions', isLegend: false, type: 'areaspline', colors: [colors.info], isButtomTooltip: true};

export const BirthsAndDeaths = Template.bind({});
BirthsAndDeaths.args = {series: [{
	type: 'spline',
	data: births,
	name: 'Births per year',
	color: colors.success,
}, {
	type: 'spline',
	data: deaths,
	name: 'Deaths per year',
	color: colors.danger,
}], title: 'Approximate number of births and deaths in the world per year', subtitle: 'Based on data from the  World Health Organization (WHO)', xCategories: birthsAndDeathsYears,
xTitle: '5-year intervals from 1950 till 2021', yTitle: 'Millions', isLegend: false, type: 'areaspline', colors: [colors.info], isButtomTooltip: true};

