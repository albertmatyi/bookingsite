'use strict';

Router.route('/booking/:_id', {
	name: 'booking',
	template: 'booking',
	waitOn: function() {
		return [
			Meteor.subscribe('room', this.params._id),
			Meteor.subscribe('future-bookings', this.params._id)
		];
	},
	onBeforeAction: function() {
		this.next();
	},
	data: function() {
		var room = App.rooms.collection.findOne(this.params._id);
		Session.set('booking.room', room);
		return {
			bookings: App.bookings.collection.find(),
			room: room
		};
	}
});

App.component('pages.booking').expose({
	title: function() {
		return App.i18n.translate('booking.title');
	},
	description: function() {
		return App.i18n.translate(this.room, 'title');
	},
	icon: function() {
		return '/images/page_rooms_icon.png';
	}
});
