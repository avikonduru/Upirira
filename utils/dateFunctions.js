const moment = require('moment');

exports.getBeginningOfDayDate = () => {
	let d = new Date();
	d.setHours(0, 0, 0, 0);
	date = d.toISOString();
	return date;
};

exports.getBeginningOfWeekDate = () => {
	let d = new Date();
	var day = d.getDay();
	var diff = d.getDate() - day + (day == 0 ? -6 : 1);
	d.setDate(diff);
	d.setHours(0, 0, 0, 0);
	date = d.toISOString();
	return date;
};

exports.getBeginningOfMonthDate = () => {
	var date = new Date();
	var d = new Date(date.getFullYear(), date.getMonth(), 1);
	d.setHours(0, 0, 0, 0);
	newDate = d.toISOString();
	return newDate;
};

exports.getBeginningOfYearDate = () => {
	var date = new Date();
	var d = new Date(date.getFullYear(), 0, 1);
	d.setHours(0, 0, 0, 0);
	newDate = d.toISOString();
	return newDate;
};

exports.getDays = (startDate, stopDate) => {
	var dateArray = [];
	var currentDate = moment(startDate);
	var stopDate = moment(stopDate);
	while (currentDate <= stopDate) {
		dateArray.push({
			date: moment(currentDate).format(),
			amount: 0
		});
		currentDate = moment(currentDate).add(1, 'days');
	}
	return dateArray;
};
