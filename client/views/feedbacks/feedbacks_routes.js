'use strict';


Router.route('/feedbacks', {
	waitOn: function() {
		return Meteor.subscribe('feedbacks.public');
	},
	data: function() {
		return {
			feedbacks: App.feedbacks.collection.find({}, {sort: {created: -1}})
		};
	}
});


App.component('pages.feedbacks').expose({
	weight: 6,
	includeInMenu: true,
	title: function() {
		return App.i18n.translate('feedbacks.title');
	},
	description: function() {
		return App.i18n.translate('feedbacks.description');
	},
	icon: function() {
		return '/images/page_feedbacks_icon.png';
	}
});
