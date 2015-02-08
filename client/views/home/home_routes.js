'use strict';

Router.map(function() {
	this.route('home', {
		name: 'home',
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
});
