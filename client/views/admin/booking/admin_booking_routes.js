'use strict';

var calculatePrices = function(booking) {
	// calculate prices in app default currency
	booking.pricePerNight = Math.round(booking.price * 100 / booking.days) / 100;
	booking.discount = booking.discount || 0;
	booking.total = booking.price - booking.discount;
	booking.totalPricePerNight =
	Math.round(booking.total * 100 / booking.days) / 100;
	// calculate prices in selected "admin" currency
	var curr = App.currency.selected();
	var cdt = App.currency.convertDefaultTo;
	booking.current = {
		price: cdt(booking.price, curr, booking.rates),
		pricePerNight: cdt(booking.pricePerNight, curr, booking.rates),
		discount: cdt(booking.discount, curr, booking.rates),
		total: cdt(booking.total),
		totalPricePerNight: // jshint
		cdt(booking.totalPricePerNight, curr, booking.rates),
		currency: curr
	};

	//calculate prices in booking currency
	booking.price= cdt(booking.price, booking.currency, booking.rates);
	booking.pricePerNight= cdt(booking.pricePerNight, 
			booking.currency, booking.rates);
	booking.discount= cdt(booking.discount, booking.currency, booking.rates);
	booking.total= cdt(booking.total, booking.currency, booking.rates);
	booking.totalPricePerNight= // jshint
		cdt(booking.totalPricePerNight, booking.currency, booking.rates);
	};
	var setState = function(booking) {
		booking.state = booking.state || 'new';
		booking.stateName = App.i18n.translate('admin.state.' + booking.state);

		booking.stateIcon = App.admin.booking.STATE_ICONS[booking.state];
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
			setState(booking);
			return {
				booking: booking,
				room: App.rooms.collection.findOne(booking.roomId),
				guest: App.guests.collection.findOne(booking.guestId)
			};
		}
	});
