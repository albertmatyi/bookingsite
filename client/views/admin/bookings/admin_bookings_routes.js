'use strict';

Router.route('/admin/bookings', {
	name: 'adminBookings',
	layoutTemplate: 'adminLayout',
	waitOn: function() {
		var today = moment(+new Date()).format(App.date.format);
		return [
			Meteor.subscribe('guests'),
			Meteor.subscribe('bookings', today),
			Meteor.subscribe('rooms')
		];
	},
	onBeforeAction: function() {
		if (Meteor.userId()) {
			this.next();
		} else {
			Router.go('login');
		}
	},
	data: function() {
		return {
			bookings: App.bookings.collection.find()
		};
	}
});

