'use strict';

Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
	yieldRegions: {
		footer: {to: 'footer'},
		header: {to: 'header'}
	}
});

// http://stackoverflow.com/questions/23575826/meteorjs-iron-router-waiton-and-using-as-data-on-rendered
Router.onBeforeAction('loading');
