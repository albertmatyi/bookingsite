'use strict';

Template.bookingForm.helpers({});


Template.bookingForm.rendered = function() {
	App.booking.datepicker.initDatePickers(this.firstNode);
	$('.form-control', this.firstNode).trigger('change');
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
		for (var i = 1; i <= this.n; i++) {
			nrs.push({
				number: i
			});
		}
		return nrs;
	}
});

