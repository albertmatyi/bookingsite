'use strict';


var getFunctionFor = function(action) {
	return function(bookingId) {
		// send out mail
		var booking = App.bookings.collection.findOne(bookingId);
		if (!bookingId || !booking) {
			throw new Meteor.Error('MESSAGE_NO_BOOKING_ID',
				'No booking id received. A message can be sent only with bookingId.');
		}
		var guest = App.guests.collection.findOne(booking.guestId);
		var room = App.rooms.collection.findOne(booking.roomId);

		var templateData = {
			guest: guest,
			room: room,
			booking: booking
		};

		var mailData = {
			'to': guest.email,
			'from': App.mail.getOptions().addresses.noreply,
			'html': App.mail.renderTemplate('bookings/bookings_' + action + '.html',
				templateData, booking.language),
			'text': App.mail.renderTemplate('bookings/bookings_' + action + '.txt',
				templateData, booking.language),
			'subject': App.mail.renderTemplate('bookings/bookings_' + action + '.subj',
				templateData, booking.language),
			'tags': ['booking-' + action]
		};
		console.log(mailData);
		// App.mail.send(mailData);

		// update booking
		App.bookings.collection.update(bookingId, {
			$set: {
				state: newState,
				updated: +new Date()
			}
		});
	};
};
App.auth.meteor.methods({
	'admin.booking.accept': getFunctionFor('accept', 'accepted'),
	'admin.booking.deny': getFunctionFor('deny', 'denied')
});
