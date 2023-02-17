export const editOption = ({options, path, value}: {options: Highcharts.Options; path: keyof Highcharts.Options; value: Highcharts.Options[keyof Highcharts.Options]}): Highcharts.Options => {
	const newOptions = structuredClone(options);
	newOptions[path] = value;
	return newOptions as Highcharts.Options;
};

export const changeType = (options: Highcharts.Options, type: 'bar' | 'area' | 'scatter' | 'areaspline' | 'spline' | 'column') => {
	const newTypeOptions = editOption({options, path: 'chart', value: {type}});
	const newSeries = newTypeOptions.series!.map(serie => {
		serie.type = type;
		return serie;
	});
	return editOption({options: newTypeOptions, path: 'series', value: newSeries});
};
