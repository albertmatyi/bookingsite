'use strict';

Router.route('/booking/success/:_id', {
	name: 'booking.success',
	template: 'bookingSuccess',
	waitOn: function() {
		return Meteor.subscribe('room', this.params._id);
	},
	data: function() {
		return {
			room: App.rooms.collection.findOne(this.params._id)
		};
	}
});



App.component('pages.booking.success').expose({
	title: function() {
		return App.i18n.translate('booking.success.title');
	},
	description: function() {
		return App.i18n.translate('booking.success.description');
	},
	icon: function() {
		return '/images/page_rooms_icon.png';
	}
});
