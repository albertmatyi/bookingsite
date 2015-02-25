/**
 * Created by albertmatyi on 2/25/15.
 */
'use strict';

var getPricePerNight = function() {
	var quantity = Session.get('booking.form.booking.quantity');
	var guests = Session.get('booking.form.booking.guests');
	var end = Session.get('booking.form.booking.endDate');
	var start = Session.get('booking.form.booking.start');
	var room = Session.get('booking.room');
	var perNight = App.prices.calcPerNight(
		room.prices, quantity, guests, room.places, start, end);
	return perNight;
};
Template.bookingPrice.helpers({
	pricePerNight: function() {
		var pricePerNight = getPricePerNight();
		Session.set('booking.form.pricePerNight', pricePerNight);
		return pricePerNight;
	},
	nrOfNights: function() {
		var nights = App.bookings.datepicker.getNights();
		Session.set('booking.form.nights', nights);
		return nights;
	},
	priceTotal: function() {
		var total = Session.get('booking.form.pricePerNight') *
			Session.get('booking.form.nights');
		return total;
	}
});
