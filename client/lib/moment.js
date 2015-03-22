'use strict';

Blaze.registerHelper('moment', function(date, format) {
	if (!format || format.hash) {
		format = App.date.format;
	}
	return moment(date).format(format);
});
