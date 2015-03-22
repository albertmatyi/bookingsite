'use strict';

Template.adminMessageFooter.events({
	'click .send.btn': function(e) {
		var message = $('.admin-message-modal .form-control').serializeObject();
		var guest = this.data.guest;
		message.to = guest.fullName + '<' + guest.email + '>';
		console.log(message);
		e.preventDefault();
		Meteor.call('admin.sendMessage', message, function(err) {
			if (err) {
				App.error.handle(err);
			} else {
				Alerts.add(App.i18n.translate('admin.messageSent'), 'success');
				$(e.currentTarget).parents('.modal').modal('hide');
			}
		});
	}
});

Meteor.startup(function() {
	Meteor.setTimeout(function() {
		$('.send-message').click();
	}, 1000);
});
