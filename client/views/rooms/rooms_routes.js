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

App.component('pages.rooms').expose({
	title: function() {
		return App.i18n.translate('rooms.title');
	},
	description: function() {
		return App.i18n.translate('rooms.description');
	},
	icon: function() {
		return '/images/page_rooms_icon.png';
	}
});
