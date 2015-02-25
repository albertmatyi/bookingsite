'use strict';

var collection = new Meteor.Collection('rooms');

var getBookedDates = function(room) {
	var bookedDates = {};
	App.bookings.collection.find({roomId: room._id})
		.forEach(function(bkng) {
			App.date.iterateBetweenDates(bkng.start, bkng.end, 'str',
				function(dateStr) {
					if (bookedDates[dateStr]) {
						bookedDates[dateStr] = bookedDates[dateStr] + bkng.quantity;
					} else {
						bookedDates[dateStr] = bkng.quantity;
					}
				});
		});
	return bookedDates;
};

var getAvailabilityData = function(room, date, quantity) {
	var bookedDates = getBookedDates(room);
	var available = room.quantity - (bookedDates[App.date.toStr(date)] || 0);
	var allAvailable = room.quantity === available;

	return {
		'enabled': available >= quantity,
		'classes': allAvailable ?
			'available'
			: (available >= quantity ? 'some-available' : 'not-available'),
		'tooltip': available + ' ' + App.i18n.translate('available')
	};
};


App.component('rooms').expose({
	collection: collection,
	getAvailabilityData: getAvailabilityData
});

