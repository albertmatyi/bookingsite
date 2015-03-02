'use strict';


var validateQuantitiesInRange = function(data, startDate, endDate) {
	var retVal = true;
	var room = App.rooms.collection.findOne(data.booking.roomId);
	App.date.iterateBetweenDates(startDate, endDate, 'date',
		function(date) {
			var availability =
				App.rooms.getAvailabilityData(room, date, data.booking.quantity);
			if (!availability.enabled) {
				retVal = false;
				return false;
			}
		});

	return retVal;
};

var isValid = function(data, invalidateCallback) {
	var DATE_VALIDATOR = {
		'isValid': function(key) {
			var valid = App.date.isValid(data.booking[key]);
			invalidateCallback('booking.' + key, !valid);
			return valid;
		}
	};

	if (!DATE_VALIDATOR.isValid('start') || !DATE_VALIDATOR.isValid('end')) {
		return false;
	}
	var startD = App.date.toDate(data.booking.start);
	var endD = App.date.toDate(data.booking.end);

	var validRange = startD < endD;
	invalidateCallback('booking.end', !validRange,
		App.i18n.translate('End date must be greater than start date'));

	var validStart = App.date.yesterday < startD;
	invalidateCallback('booking.start', !validStart,
		App.i18n.translate('Start date can\'t be in the past.'));

	var validQRange = false;
	if (validStart && validRange) {
		validQRange = validateQuantitiesInRange(data, startD, endD);
		invalidateCallback('booking.start', !validQRange,
			App.i18n.translate('Range can\'t contain overbooked days'));
	}

	return validRange && validStart && validQRange;
};

App.component('bookings.date').expose({
	isValid: isValid
});
