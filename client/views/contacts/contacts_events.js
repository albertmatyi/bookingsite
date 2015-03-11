'use strict';

Template.contacts.events({
	'click .show-send-message.btn': function() {
		App.modal.show('contactsSendMessage', {
			title: App.i18n.translate('contacts.sendMessageTitle')
		});
	}
});
