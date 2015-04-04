'use strict';

Template.adminBookings.events({
	'click .booking-row': function() {
		Router.go('adminBooking', this);
	}
});

Template.adminBookingsFilters.events({
	'click .load-bookings.btn': function (e) {
		e.preventDefault();
		Meteor.subscribe('bookings', 
			$('#booking-between-start').val(), 
			$('#booking-between-end').val());
	}
});