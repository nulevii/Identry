import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {editOption, changeType, type ChartType} from '../../utilities/editCharts';

export interface PropTypes {
	title?: string;
	subtitle?: string;
	yTitle?: string;
	xTitle?: string;
	xCategories?: string [];
	yCategories?: string [];
	series: Highcharts.Options['series'];
	isLegend?: boolean;
	type?: ChartType;
	colors?: string[];
	isButtomTooltip?: boolean;
}

function Chart({title = '', subtitle = '', yTitle = '', xTitle = '', xCategories, yCategories, series, isLegend = true, type, colors, isButtomTooltip = false}: PropTypes) {
	let options: Highcharts.Options = {
		title: {
			text: title,
		},
		credits: {
			enabled: false,
		},
		subtitle: {
			text: subtitle,
		},
		yAxis: [{
			title: {
				text: yTitle,
			},
			categories: yCategories,
		}],
		xAxis: [{
			title: {
				text: xTitle,
			},
			categories: xCategories,
		}],
		legend: {enabled: isLegend},
		series,
	};

	if (type) {
		options = changeType(options, type);
	}

	if (colors) {
		options = editOption({options, path: 'colors', value: colors});
	}

	if (isButtomTooltip) {
		options = editOption({
			options, path: 'tooltip', value: {
				positioner(_, __, point) {
					return {
						x: point.plotX,
						y: this.chart.plotHeight + this.chart.plotTop,
					};
				},
			},
		});
	}

	Highcharts.setOptions({
		chart: {
			style: {
				fontFamily: 'Archivo',
			},
		},
	});

	return (
		<>
			<HighchartsReact
				highcharts={Highcharts}
				options={options}
			/>
		</>
	);
}

export default Chart;
