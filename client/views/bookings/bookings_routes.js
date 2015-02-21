'use strict';

Router.route('/book/:_id', {
	template: 'book',
	waitOn: function() {
		return Meteor.subscribe('future-bookings', this.params.id);
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

