'use strict';

App.auth.meteor.methods({
	'admin.sendMessage': function(message, bookingId) {
		if (!message.to || !message.subject || !message.body) {
			throw new Meteor.Error('INCOMPLETE_EMAIL_FIELDS',
				'Not all fields are completed',
				'Please fill out all the fields to send the email');
		}

		if (!bookingId) {
			throw new Meteor.Error('MESSAGE_NO_BOOKING_ID',
				'No booking id received. A message can be sent only with bookingId.');
		}

		message.created = +new Date();

		var mailData = {
			'to': message.to,
			'from': App.mail.getOptions().addresses.noreply,
			'html': message.body.replace(/(?:\n\r|\n|\r)/g, '<br/>'),
			'text': message.body,
			'subject': message.subject,
			'tags': ['admin-message']
		};
		App.mail.send(mailData);
		App.bookings.collection.update(bookingId, {$push: {messages: message}});

	}
});
