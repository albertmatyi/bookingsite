'use strict';


Meteor.methods({
	'sendContactMessage': function(data) {
		if (data.email.length < 2) {
			throw new Meteor.Error('INVALID_CONTACT_EMAIL',
				'Please supply a valid email');
		}
		if (data.name.length < 2) {
			throw new Meteor.Error('INVALID_CONTACT_NAME',
				'Please supply a valid name');
		}
		if (data.message.length < 2) {
			throw new Meteor.Error('INVALID_CONTACT_MESSAGE',
				'Please supply a valid message');
		}

		var mailData = {
			'to': App.mail.getOptions().addresses.admin,
			'h:Reply-To': data.email,
			'from': App.mail.getOptions().addresses.noreply,
			'html': App.mail.renderTemplate('contact/message.html',
				data),
			'text': App.mail.renderTemplate('contact/message.txt',
				data),
			'subject': App.mail.renderTemplate('contact/message.subj',
				data),
			'tags': ['booking']
		};
		App.mail.send(mailData);
	}
});
