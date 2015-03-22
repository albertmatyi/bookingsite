'use strict';

Template.adminMessageFooter.helpers({
	sending: function() {
		return Session.get('admin.message.sending');
	}
});


Template.adminMessageFooter.events({
	'click .send.btn': function(e) {
		e.preventDefault();
		var $modal = $(e.currentTarget).parents('.modal');

		var message = $('.admin-message-modal .form-control').serializeObject();
		var guest = this.data.guest;
		message.to = guest.fullName + '<' + guest.email + '>';

		Session.set('admin.message.sending', true);

		Meteor.call('admin.sendMessage',
			message,
			this.data.bookingId,
			function(err) {
				Session.set('admin.message.sending', false);

				if (err) {
					App.error.handle(err);
				} else {
					$modal.modal('hide');
					Alerts.add(App.i18n.translate('admin.messageSent'), 'success');
				}
			});
	}
});
