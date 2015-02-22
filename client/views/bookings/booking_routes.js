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
		return {
			bookings: App.bookings.collection.find(),
			room: App.rooms.collection.findOne(this.params._id)
		};
	}
});

App.component('pages.booking').expose({
	title: function() {
		return App.i18n.translate('book.title');
	},
	description: function() {
		return App.i18n.translate(this.room, 'title');
	},
	icon: function() {
		return '/images/page_rooms_icon.png';
	}
});
