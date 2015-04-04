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

var sendMailTo = function (type, toAddress, data) {
	var mailData = {
		'to': toAddress,
		'from': App.mail.getOptions().addresses.noreply,
		'html': App.mail.renderTemplate('bookings/bookings_'+type+'_new.html',
			data, data.booking.language),
		'text': App.mail.renderTemplate('bookings/bookings_'+type+'_new.txt',
			data, data.booking.language),
		'subject': App.mail.renderTemplate('bookings/bookings_'+type+'_new.subj',
			data, data.booking.language),
		'tags': ['booking']
	};
	App.mail.send(mailData);
};

App.component('bookings.notifications').expose({
	'sendNewBookingMails': function(guest, booking) {
		var room = App.rooms.collection.findOne(booking.roomId);
		var priceData = getPriceData(booking);
		var templateData = {
			guest: guest,
			booking: booking,
			room: room,
			priceData: priceData,
			ROOT_URL: process.env.ROOT_URL
		};
		var adminMail = App.mail.getOptions().addresses.admin;
		sendMailTo('client', guest.email, templateData, booking);
		sendMailTo('admin', adminMail, templateData, booking);
	}
});


App.component('bookings.notifications').expose({
	getPriceData: getPriceData
});
