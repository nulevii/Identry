import React from 'react';
import Chart from '../../components/chart';
import data from '../../constants/people-qtt.json';
import {type IPeopleQtt} from '../../constants/data-type';
import {colors} from '../../constants/colors';
const years = data.map((element: IPeopleQtt) => element.year.toString());
const peopleQtt = data.map((element: IPeopleQtt) => element.value * 1000000);

function PeopleQtt() {
	return (
		<>
			<Chart series={[{
				type: 'spline',
				data: peopleQtt,
				name: 'People Quantity',
			}]} title='Approximate number of people on earth' subtitle='Based on data from the worldpopulationreview.com' xCategories={years}
			xTitle='25-year intervals from first A.D. till Now' yTitle='Billions' isLegend={false} type='column' colors={[colors.warning]} />
			<hr className='my-5' />
			<Chart series={[{
				type: 'spline',
				data: peopleQtt,
				name: 'People Quantity',
				zones: [{value: 1000000000, color: colors.warning}, {color: colors.success}],
			}]} title='Approximate number of people on earth' subtitle='Chart devided on 2 zones, above and below 1 billion people' xCategories={years}
			xTitle='25-year intervals from first A.D. till Now' yTitle='Billions' isLegend={false} type='areaspline' colors={[colors.info]} isButtomTooltip={true} />
		</>
	);
}

export default PeopleQtt;
