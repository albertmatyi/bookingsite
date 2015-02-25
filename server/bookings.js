'use strict';

Meteor.methods({
	'bookings.book': function(data) {
		var msg = 'Invalid fields: ';
		console.log(data);
		var invalidate = function(field, invalid, message) {
			if (invalid) {
				msg += ' ' + field + (message ? '(' + message + ')' : '');
			}
		};
		var valid = App.bookings.isValid(data, invalidate);
		if (valid) {
//			App.bookings.collection.insert(data);
//			App.bookings.sendNewBookingMails();
		} else {
			throw new Meteor.Error('INVALID_DATA',
				'Please supply valid data', msg);
		}
	}
});
