'use strict';

var prevClass;
var $body = $('body');

var setPageClass = function() {
	var pageClass = 'page-' + this.route.getName();
	if (!$body.hasClass(pageClass)) {
		$body.removeClass(prevClass);
		$body.addClass(pageClass);
		console.log('adding class', pageClass);
		prevClass = pageClass;
	}
};

Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
	onAfterAction: setPageClass,
	yieldRegions: {
		footer: {to: 'footer'},
		header: {to: 'header'}
	}
});

// http://stackoverflow.com/questions/23575826/meteorjs-iron-router-waiton-and-using-as-data-on-rendered
Router.onBeforeAction('loading');
