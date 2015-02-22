'use strict';

Router.route('/book/:_id', {
	name: 'book',
	template: 'book',
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
			bookings: App.bookings.collection.find()
		};
	}
});

