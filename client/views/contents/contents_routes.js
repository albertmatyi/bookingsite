'use strict';

Router.route('/contents/:pageName', {
	template: 'contents',
	waitOn: function() {
		return Meteor.subscribe('contents', this.params.pageName);
	},
	onBeforeAction: function() {
		this.next();
	},
	data: function() {
		return {
			pageName: this.params.pageName,
			contents: App.contents.collection.find(
				{parentId: this.params.pageName},
				{sort: {weight: -1}}
			)
		};
	}
});

Router.route('/presso', {
	onBeforeAction: function() {
		Router.go('/contents/presso');
	}
});
App.component('pages.presso').expose({
	includeInMenu: true,
	title: function() {
		return App.i18n.translate('contents.presso.title');
	},
	description: function() {
		return App.i18n.translate('contents.presso.description');
	},
	icon: function() {
		return '/images/page_presso_icon.png';
	}
});
