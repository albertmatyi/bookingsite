'use strict';

var book = function(data) {
	data.booking.guestId = App.guests.save(data.user);
	var booking = data.booking;

	booking.created = +new Date();

	App.bookings.collection.insert(booking);

	App.bookings.sendNewBookingMails(data);
};

var addDaysAndPrice = function(data) {
// save the price at the time of the booking
	data.booking.days = App.date.getDateDiff(
		data.booking.start, data.booking.end);
	var room = App.rooms.collection.findOne(data.booking.roomId);
	data.booking.price = App.prices.calcPerNight(
		room.prices, room.places,
		data.booking.quantity, data.booking.guests,
		data.booking.start, data.booking.end) * data.booking.days;
};

var validate = function(data) {
	var msg = 'Invalid fields: ';
	var invalidate = function(field, invalid, message) {
		if (invalid) {
			msg += ' ' + field + (message ? '(' + message + ')' : '');
		}
	};
	var valid = App.bookings.isValid(data, invalidate);

	addDaysAndPrice(data);
	if (data.booking.days < 1) {
		msg += ' Invalid stay length: ' + data.booking.days
		valid = false;
	}
	if (data.booking.price < 1) {
		msg += ' Invalid price: ' + data.booking.price
		valid = false;
	}

	if (!valid) {
		throw new Meteor.Error('INVALID_DATA',
			'Please supply valid data', msg);
	}
};

Meteor.methods({
	'bookings.book': function(data) {
		validate(data);
		book(data);
	}
});
