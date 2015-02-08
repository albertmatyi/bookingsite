'use strict';

Router.route('/home', {
	path: '/home',
	waitOn: function() {
		return [];
	},
	onBeforeAction: function() {
		this.next();
	},
	data: function() {
		return [];
	},
	onAfterAction: function() {
		console.log('went home');
	}
});
