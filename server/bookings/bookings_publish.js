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
	return cursor;
};

App.auth.meteor.publish('future-bookings', function() {
	return getBookingsInRange(+new Date(), null);
});

App.auth.meteor.publish('bookings', getBookingsInRange);
App.auth.meteor.publish('booking', function(id) {
	var cursor = App.bookings.collection.find(id);
	console.log(cursor.count());
	return cursor;
});
