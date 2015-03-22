'use strict';

Template.adminBookingPrices.events({
	'keyup .discount-input, change .discount-input': function(e) {
		var discount = parseInt($(e.currentTarget).val()) || 0;
		App.bookings.collection.update(this.booking._id,
			{$set: {discount: discount}});
	}
});

Template.adminBookingButtons.events({
	'click .send-message.btn': function() {
		App.modal.show('adminMessage', {
			data: {guest: this.guest},
			title: App.i18n.translate('Send message'),
			footerTemplate: 'adminMessageFooter'
		});
	}
});

