'use strict';

var NigerianPrinceGun = new Mailgun({
	// TODO update to match
	apiKey: 'key-dda9b756ccbbf539f75c0c1f1b71beaf',
	// TODO update to match
	domain: 'sandbox3f5e890f18424d80a3e812f035848ced.mailgun.org'
});

var getMailOptions = function() {
	return {
		addresses: {
			noreply: 'noreply@restatferdinand.ro',
			admin: 'albertmatyi@gmail.com',
			dev: 'albertmatyi@gmail.com'
		}
	};
};

var renderedTemplate = {};

var renderTemplate = function(templateName, data, lang) {
	if (lang) {
		templateName = lang + '/' + templateName;
	}
	templateName = 'templates/' + templateName;
	if (!renderedTemplate[templateName]) {
		SSR.compileTemplate(templateName, Assets.getText(templateName));
		renderedTemplate[templateName] = true;
	}
	return SSR.render(templateName, data);
};
var getPriceData = function(booking) {
	var price = App.currency.convertDefaultTo(
		booking.price, booking.currency, booking.exchangeRates);
	return {
		price: price,
		pricePerDay: Math.round(price / booking.days * 100) / 100,
		currency: booking.currency
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
			'from': getMailOptions().addresses.noreply,
			'html': renderTemplate('bookings/bookings_client_new.html',
				templateData, booking.language),
			'text': renderTemplate('bookings/bookings_client_new.txt',
				templateData, booking.language),
			'subject': renderTemplate('bookings/bookings_client_new.subj',
				templateData, booking.language),
			'tags': ['booking']
		};
		NigerianPrinceGun.send(mailData);
	}
});

