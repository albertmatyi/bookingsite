'use strict';

Template.adminBookingPrices.rendered = function() {
	$('[data-toggle="tooltip"]').tooltip();
};

var isBookingHandled = function(booking) {
	return booking.state === 'accepted' || booking.state === 'denied';
};

var handlerDisabled = function() {
	return isBookingHandled(this.booking) ||
	Session.get('admin.booking.actionInProgress') ? 'disabled' : '';
};
Template.adminBookingButtons.helpers({
	acceptDisabled: handlerDisabled,
	denyDisabled: handlerDisabled
});
Template.adminBookingPrices.helpers({
	discountDisabled: function() {
		return isBookingHandled(this.booking) ? 'disabled' : '';
	}
});
