'use strict';
var beforeShowDay = function(date) {
	date = App.date.stripTime(date);
	if (date < App.date.today) {
		return {'enabled': false};
	}
	var isEndDatepicker = this.element ?
	this.element.prop('id').indexOf('end') !== -1 : false;
	// this.date refers to the date that is about to be selected selection
	var startDate = isEndDatepicker ?
		Session.get('booking.form.booking.startDate') : App.date.stripTime(this.date);
	var endDate = isEndDatepicker ?
		App.date.stripTime(this.date) : Session.get('booking.form.booking.endDate');
	var inRange = date >= startDate && date <= endDate;
	var ret = null;
	if (isEndDatepicker) {
		date = App.date.previousDay(date);
		if (date < startDate) {
			ret = {
				'enabled': false,
				'classes': '',
				'tooltip': App.i18n.translate(
					'End date must be greater than start date'
				)
			};
		}
	}
	if (!ret) {
		var quantity = Session.get('booking.form.booking.quantity') || 1;
		var room = Session.get('booking.room');
		ret = App.booking.datepicker.getAvailabilityData(room, date, quantity);
	}
	if (inRange) {
		ret.classes += ' in-range';
	}
	return ret;
};

var initDatePickers = function (container) {
	$('.datepicker', container).datepicker({
		format: App.date.format.toLowerCase(),
		todayHighlight: true,
		todayBtn: false,
		autoclose: true,
		weekStart: 1,
		startDate: App.date.today,
		endDate: undefined,
		keyboardNavigation: true,
		forceParse: false,
		beforeShowDay: beforeShowDay
	});
}    ;

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
	var room = Session.get('booking.room');
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

var getNights = function() {
	var start = Session.get('booking.form.booking.startDate');
	var end = Session.get('booking.form.booking.endDate');
	// have to round to avoid DST problems
	return Math.round(new Date(end - start) / (1000 * 60 * 60 * 24));
};

var isValid = function(data) {
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
};

App.component('booking.datepicker').expose({
	isValid: isValid,
	getNights: getNights,
	getAvailabilityData: getAvailabilityData,
	initDatePickers: initDatePickers
});

