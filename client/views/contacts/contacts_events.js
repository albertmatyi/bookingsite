'use strict';

Template.contacts.events({
	'click .show-send-message.btn': function() {
		App.modal.show('contactsSendMessage', {
			title: App.i18n.translate('contacts.sendMessageTitle')
		});
	}
});

Template.contactsSendMessageFooter.events({
	'click .send-message.btn': function(e) {
		e.preventDefault();
		var data = {
			name: $('.modal #contact-name').val(),
			email: $('.modal #contact-email').val(),
			message: $('.modal #contact-message').val()
		};
		Meteor.call('sendContactMessage', data, function(err) {
			if (err) {
				App.error.handle(err);
			} else {
				Alerts.add(App.i18n.translate('contacts.messageSuccess'), 'success');
				App.modal.hide($(e.currentTarget).parents('.modal'));
			}
		});
	}
});
