'use strict';

var prevClass;

var setPageClass = function() {
	var $body = $('body');
	var pageClass = 'page-' + this.route.getName();
	if (!$body.hasClass(pageClass)) {
		$body.removeClass(prevClass);
		$body.addClass(pageClass);
		prevClass = pageClass;
	}
};

Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
	onAfterAction: setPageClass,
});

// http://stackoverflow.com/questions/23575826/meteorjs-iron-router-waiton-and-using-as-data-on-rendered
Router.onBeforeAction('loading');

Router.route('/', {
	onBeforeAction: function() {
		Router.go('/rooms');
	}
});
