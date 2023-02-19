import React from 'react';
import Chart from '../../components/chart';
import {type IBirthsAndDeaths} from '../../constants/data-type';
import {colors} from '../../constants/colors';
import birthAndDeathQtt from '../../constants/birth-and-death.json';

const years = birthAndDeathQtt.map((element: IBirthsAndDeaths) => element.year.toString());
const births = birthAndDeathQtt.map((element: IBirthsAndDeaths) => element.birthNumber);
const deaths = birthAndDeathQtt.map((element: IBirthsAndDeaths) => element.deathNumber);
const series: Highcharts.Options['series'] = [{
	type: 'spline',
	data: births,
	name: 'Births per year',
	color: colors.success,
}, {
	type: 'spline',
	data: deaths,
	name: 'Deaths per year',
	color: colors.danger,
}];

function BearthAndDeath() {
	return (
		<>
			<Chart series={series} title='Approximate number of births and deaths in the world per year' subtitle='Based on data from the  World Health Organization (WHO)' xCategories={years}
				xTitle='5-year intervals from 1950 till 2021' yTitle='Millions' type='column' colors={[colors.info]} />
			<hr className='my-5' />
			<Chart series={series} title='Approximate number of births and deaths in the world per year' subtitle='Based on data from the  World Health Organization (WHO)' xCategories={years}
				xTitle='5-year intervals from 1950 till 2021' yTitle='Millions' type='areaspline' colors={[colors.info]} isButtomTooltip={true} />
		</>
	);
}

export default BearthAndDeath;
