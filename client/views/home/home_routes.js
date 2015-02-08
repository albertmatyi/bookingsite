'use strict';

Router.route('/home', function() {
	this.layout('layout');
	this.render('home', {
		data: function() {
			return {};
		}
	});
});
