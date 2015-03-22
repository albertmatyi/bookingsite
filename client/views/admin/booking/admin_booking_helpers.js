'use strict';

Template.adminBookingPrices.rendered = function() {
	$('[data-toggle="tooltip"]').tooltip();
};

Template.adminBookingButtons.helpers({
	acceptDisabled: function() {
		return Session.get('admin.booking.actionInProgress') ? 'disabled' : '';
	}
});
