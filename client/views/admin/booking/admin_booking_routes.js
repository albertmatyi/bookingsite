'use strict';


var calculatePrices = function(booking) {
	booking.pricePerNight = Math.round(booking.price * 100 / booking.days) / 100;
	booking.discount = booking.discount || 0;
	booking.total = booking.price - booking.discount;
	booking.totalPricePerNight = Math.round(booking.total * 100 / booking.days) / 100;

	booking.current = {
		price: App.currency.convertDefaultTo(booking.price),
		pricePerNight: App.currency.convertDefaultTo(booking.pricePerNight),
		discount: App.currency.convertDefaultTo(booking.discount),
		total: App.currency.convertDefaultTo(booking.total),
		totalPricePerNight: App.currency.convertDefaultTo(booking.totalPricePerNight),
		currency: App.currency.selected()
	};
};
Router.route('/admin/booking/:_id', {
	name: 'adminBooking',
	template: 'adminBooking',
	layoutTemplate: 'adminLayout',
	waitOn: function() {
		return [
			Meteor.subscribe('guests'),
			Meteor.subscribe('booking', this.params._id),
			Meteor.subscribe('rooms')
		];
	},
	data: function() {
		var booking = App.bookings.collection.findOne(this.params._id);
		if (!booking) {
			return {};
		}
		calculatePrices(booking);
		return {
			booking: booking,
			room: App.rooms.collection.findOne(booking.roomId),
			guest: App.guests.collection.findOne(booking.guestId)
		};
	}
});
