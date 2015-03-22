'use strict';

Template.adminBookings.events({
	'click .booking-row': function() {
		Router.go('adminBooking', this);
	}
});
