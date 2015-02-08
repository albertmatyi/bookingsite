'use strict';

Router.route('/home', function() {
	this.layout('layout');
	this.render('footer', {to: 'footer'});
	this.render('header', {to: 'header'});
	this.render('home', {
		data: function() {
			return {};
		}
	});
});
