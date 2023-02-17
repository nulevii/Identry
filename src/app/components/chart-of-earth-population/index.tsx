import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import data from '../../constants/data.json';
import {type Data} from '../../constants/data-type';
import {editOption, changeType} from '../../utilities/editCharts';

const years = data.map((element: Data) => element.year.toString());
const peopleQtt = data.map((element: Data) => element.value * 1000000);

const options: Highcharts.Options = {
	title: {
		text: 'Approximate number of people on earth',
	},
	credits: {
		enabled: false,
	},
	subtitle: {
		text: 'Based on data from the worldpopulationreview.com',
	},
	yAxis: [{
		title: {
			text: 'Billions',
		},
	}],
	xAxis: [{
		title: {
			text: '25-year intervals from first A.D. till Now',
		},
		categories: years,
	}],
	series: [{
		type: 'spline',
		data: peopleQtt,
		name: 'People Quantity',
		zones: [{value: 1000000000, color: '#a73737'}, {color: '#a7a537'}],
	}],
};

const areasplineChartOptions = changeType(options, 'areaspline');
const barChartOptions = changeType(options, 'bar');
const columnChartOptions = changeType(options, 'column');

const customCredits = {
	enabled: true,
	text: 'Cherniugov Yevgenii',
	href: 'https://www.linkedin.com/in/yevgenii/',
	style: {color: '#155fcf', fontWeight: '700', fontSize: '15px'},
	position: {verticalAlign: 'top', y: 20},
};
const customCreditsOptions = editOption({options, path: 'credits', value: customCredits});

const zoomChartOptions = editOption({options, path: 'chart', value: {zooming: {type: 'x'}}});
zoomChartOptions.title = {text: 'Try to zoom by mouse selection'};

const styledTooltipOptions = editOption({
	options, path: 'tooltip', value: {
		positioner(_, __, point) {
			return {
				x: point.plotX,
				y: this.chart.plotHeight + this.chart.plotTop,
			};
		},
		formatter() {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			return `So many people ${this.y}`;
		},
		backgroundColor: '#4d65b3',
		borderColor: '#406685',
		borderRadius: 20,
		style: {color: '#ffffff'},
	},
});

styledTooltipOptions.title = {text: 'Custom tooltip'};

const customColorsOptions = editOption({options, path: 'colors', value: ['#a73737', '#eeff00']});
customColorsOptions.yAxis = {...customColorsOptions.yAxis, alternateGridColor: '#a7373746', minorGridLineColor: '#4a3e8f46', gridLineColor: '#a39c34'};
customColorsOptions.title = {text: 'Custom colors'};

const customColorzoneOptions = editOption({options, path: 'title', value: {text: 'Color zones'}});
if (customColorzoneOptions.series !== undefined) {
	customColorzoneOptions.series[0] = {...customColorzoneOptions.series[0]};
}

function Chart() {
	return (
		<>
			<HighchartsReact
				highcharts={Highcharts}
				options={options}
			/>
			<hr className='my-5' />
			<HighchartsReact
				highcharts={Highcharts}
				options={areasplineChartOptions}
			/>
			<hr className='my-5' />
			<HighchartsReact
				highcharts={Highcharts}
				options={barChartOptions}
			/>
			<hr className='my-5' />
			<HighchartsReact
				highcharts={Highcharts}
				options={columnChartOptions}
			/>
			<hr className='my-5' />
			<HighchartsReact
				highcharts={Highcharts}
				options={customCreditsOptions}
			/>
			<hr className='my-5' />
			<HighchartsReact
				highcharts={Highcharts}
				options={zoomChartOptions}
			/>
			<hr className='my-5' />
			<HighchartsReact
				highcharts={Highcharts}
				options={styledTooltipOptions}
			/>
			<hr className='my-5' />
			<HighchartsReact
				highcharts={Highcharts}
				options={customColorsOptions}
			/>
			<HighchartsReact
				highcharts={Highcharts}
				options={customColorzoneOptions}
			/>
		</>
	);
}

export default Chart;
