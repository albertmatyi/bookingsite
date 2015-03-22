'use strict';

Template.adminBookingPrices.events({
	'keyup .discount-input, change .discount-input': function(e) {
		var discount = parseInt($(e.currentTarget).val()) || 0;
		App.bookings.collection.update(this.booking._id,
			{$set: {discount: discount}});
	}
});

var handlerFor = function(action) {
	return function() {
		if (confirm(App.i18n.translate('admin.booking.' + action + 'Confirm'))) {
			Session.set('admin.booking.actionInProgress', true);
			Meteor.call('admin.booking.' + action, this.booking._id, function(err) {
				Session.set('admin.booking.actionInProgress', false);
				if (err) {
					App.error.handle(err);
				} else {
					Alerts.add(App.i18n.translate('admin.booking.actionSuccess'),
						'success');
				}
			});
		}
	};
};

Template.adminBookingButtons.events({
	'click .accept.btn': handlerFor('accept'),
	'click .deny.btn': handlerFor('deny'),
	'click .send-message.btn': function() {
		App.modal.show('adminMessage', {
			data: {guest: this.guest, bookingId: this.booking._id},
			title: App.i18n.translate('Send message'),
			footerTemplate: 'adminMessageFooter'
		});
	}
});
