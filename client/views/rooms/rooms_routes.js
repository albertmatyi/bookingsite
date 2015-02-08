'use strict';

Router.route('/rooms', function() {
	this.layout('layout');
	this.render('footer', {to: 'footer'});
	this.render('header', {to: 'header'});
	this.render('rooms', {
		data: function() {
			return {};
		}
	});
});
