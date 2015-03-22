'use strict';

Blaze.registerHelper('moment', function(date, format) {
	return moment(date).format(format || App.date.format);
})
