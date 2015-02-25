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
		Session.get('booking.form.booking.startDate') :
		App.date.stripTime(this.date);
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
		ret = App.rooms.getAvailabilityData(room, date, quantity);
	}
	if (inRange) {
		ret.classes += ' in-range';
	}
	return ret;
};

var initDatePickers = function(container) {
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
};

var getNights = function() {
	var start = Session.get('booking.form.booking.startDate');
	var end = Session.get('booking.form.booking.endDate');
	// have to round to avoid DST problems
	return Math.round(new Date(end - start) / (1000 * 60 * 60 * 24));
};


App.component('bookings.datepicker').expose({
	getNights: getNights,
	initDatePickers: initDatePickers
});

