'use strict';

Router.route('adminFeedbacks', {
	path: 'admin/feedbacks',
	template: 'adminFeedbacks',
	layoutTemplate: 'adminLayout',
	waitOn: function() {
		return Meteor.subscribe('feedbacks.all');
	},
	onBeforeAction: App.login.userCheck,
	data: function() {
		return {feedbacks: App.feedbacks.collection.find()};
	}
});
