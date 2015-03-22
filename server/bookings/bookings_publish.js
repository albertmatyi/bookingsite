'use strict';

var getBookingsInRange = function(startDate, endDate) {
	// TODO return bookings in range
	if (!startDate) {
		startDate = moment().format(App.date.format);
	}
	var qry = {end: {$gt: startDate}};
	if (endDate) {
		qry.start = {$lt: endDate};
	}
	var cursor = App.bookings.collection.find(qry);
	console.log(qry, cursor.count());
	return cursor;
};

App.auth.meteor.publish('future-bookings', function() {
	return getBookingsInRange(+new Date(), null);
});

App.auth.meteor.publish('bookings', getBookingsInRange);
