'use strict';

Router.route('/rooms', {
	waitOn: function() {
		return Meteor.subscribe('rooms');
	},
	onBeforeAction: function() {
		this.next();
	},
	data: function() {
		return {
			rooms: App.rooms.collection.find()
		};
	}
});
