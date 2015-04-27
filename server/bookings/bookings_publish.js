'use strict';

var getBookingsInRange = function(startDate, endDate) {
	if (!startDate) {
		startDate = moment().format(App.date.format);
	}
	var qry = {end: {$gt: startDate}};
	if (endDate) {
		qry.start = {$lt: endDate};
	}
	// console.log(qry);
	var cursor = App.bookings.collection.find(qry);
	return cursor;
};

Meteor.publish('future-bookings', function() {
	return getBookingsInRange(+new Date(), null);
});

App.auth.meteor.publish('bookings', getBookingsInRange);
Meteor.publish('booking', function(id) {
	var cursor = App.bookings.collection.find(id);
	// console.log(cursor.count());
	return cursor;
});
