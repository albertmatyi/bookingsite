'use strict';

Template.bookingForm.helpers({});


Template.bookingForm.rendered = function() {
	App.bookings.datepicker.initDatePickers(this.firstNode);
	var $controls = $('.form-control', this.firstNode);
	$controls.trigger('change');
	var $firstField = $controls.first();
	setTimeout(function() {
		$firstField.focus();
	}, 50);
};

Template.bookingForm.helpers({
	maxQuantity: function() {
		return this.room.quantity || 1;
	},
	maxGuests: function() {
		var quantity = Session.get('booking.form.booking.quantity') || 1;
		return quantity * this.room.places;
	},
	bookingStart: function() {
		return App.date.toStr(+new Date() + 1000 * 60 * 60 * 24);
	},
	bookingEnd: function() {
		return App.date.toStr(+new Date() + 1000 * 60 * 60 * 24 * 2);
	}
});

Template.bookingFormNumberOptions.helpers({
	numbers: function() {
		var nrs = [];
		for (var i = 1; i <= this.n; i++) {
			nrs.push({
				number: i
			});
		}
		return nrs;
	}
});

