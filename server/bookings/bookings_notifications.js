'use strict';

var getPriceData = function(booking) {
	var price = App.currency.convertDefaultTo(
		booking.price, booking.currency, booking.exchangeRates);
	var discount = App.currency.convertDefaultTo(
		booking.discount || 0, booking.currency, booking.exchangeRates);
	var total = price - discount;
	return {
		price: price,
		pricePerNight: Math.round(price / booking.days * 100) / 100,
		currency: booking.currency,
		discount: discount,
		total: total,
		totalPricePerNight: Math.round(total / booking.days * 100) / 100
	};
};
App.component('bookings.notifications').expose({
	'sendNewBookingMails': function(guest, booking) {
		var room = App.rooms.collection.findOne(booking.roomId);
		var priceData = getPriceData(booking);
		var templateData = {
			guest: guest,
			booking: booking,
			room: room,
			priceData: priceData
		};
		var mailData = {
			'to': guest.email,
			'from': App.mail.getOptions().addresses.noreply,
			'html': App.mail.renderTemplate('bookings/bookings_client_new.html',
				templateData, booking.language),
			'text': App.mail.renderTemplate('bookings/bookings_client_new.txt',
				templateData, booking.language),
			'subject': App.mail.renderTemplate('bookings/bookings_client_new.subj',
				templateData, booking.language),
			'tags': ['booking']
		};
		App.mail.send(mailData);
	}
});


App.component('bookings.notifications').expose({
	getPriceData: getPriceData
});
