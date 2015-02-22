'use strict';

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

var validateQuantitiesInRange = function(data, startDate, endDate) {
	var retVal = true;
	var roomId = Router.current().params._id;
	var room = App.rooms.collection.findOne(roomId);
	App.date.iterateBetweenDates(startDate, endDate, 'date',
		function(date) {
			var availability = getAvailabilityData(room, date, data.booking.quantity);
			if (!availability.enabled) {
				retVal = false;
				return false;
			}
		});

	return retVal;
};

App.component('booking.datepicker').expose({
	isValid: function(data) {
		var DATE_VALIDATOR = {
			'isValid': function(key) {
				var valid = App.date.isValid(data.booking[key]);
				App.booking.form.invalidate('booking.' + key, !valid);
				return valid;
			}
		};

		if (!DATE_VALIDATOR.isValid('start') || !DATE_VALIDATOR.isValid('end')) {
			return false;
		}
		var startD = App.date.toDate(data.booking.start);
		var endD = App.date.toDate(data.booking.end);

		var validRange = startD < endD;
		App.booking.form.invalidate('booking.end', !validRange,
			App.i18n.translate('End date must be greater than start date'));

		var validStart = App.date.yesterday < startD;
		App.booking.form.invalidate('booking.start', !validStart,
			App.i18n.translate('Start date can\'t be in the past.'));

		var validQRange = validateQuantitiesInRange(data, startD, endD);
		App.booking.form.invalidate('booking.start', !validQRange,
			App.i18n.translate('Range can\'t contain overbooked days'));

		return validRange && validStart && validQRange;
	},
	getAvailabilityData: getAvailabilityData
});

