'use strict';

Template.bookingForm.helpers({});

var beforeShowDay = function(date) {
	date = App.date.stripTime(date);
	if (date < App.date.today) {
		return {'enabled': false};
	}
	var isEndDatepicker = this.element ?
	this.element.prop('id').indexOf('end') !== -1 : false;
	// this.date refers to the date that is about to be selected selection
	var startDate = isEndDatepicker ?
		Session.get('booking.form.booking.start') : App.date.stripTime(this.date);
	var endDate = isEndDatepicker ?
		App.date.stripTime(this.date) : Session.get('booking.form.booking.end');
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
		var roomId = Router.current().params._id;
		var quantity = Session.get('booking.form.booking.quantity') || 1;
		var room = App.rooms.collection.findOne(roomId);
		ret = App.booking.datepicker.getAvailabilityData(room, date, quantity);
	}
	if (inRange) {
		ret.classes += ' in-range';
	}
	return ret;
};


Template.bookingForm.rendered = function() {
	$('.datepicker', this.firstNode).datepicker({
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

Template.bookingForm.helpers({
	maxQuantity: function() {
		return this.room.quantity || 1;
	},
	maxGuests: function() {
		var quantity = Session.get('booking.form.booking.quantity') || 1;
		return quantity * this.room.places;
	}
});

Template.bookingFormNumberOptions.helpers({
	numbers: function() {
		var nrs = [];
		var n = this.n + 1;
		while (--n > 0) {
			nrs.push({
				number: n
			});
		}
		return nrs;
	}
});

