'use strict';

Template.admin.events({
	'click .booking-row': function() {
		Router.go('adminBooking', this);
	}
});
