'use strict';


var definePage = function(pageName, weight) {
	Router.route('/' + pageName, {
		template: 'contents',
		waitOn: function() {
			return Meteor.subscribe('contents', pageName);
		},
		data: function() {
			return {
				pageName: pageName,
				contents: App.contents.collection.find(
					{parentId: pageName},
					{sort: {weight: 1}}
				)
			};
		}
	});
	App.component('pages.' + pageName).expose({
		includeInMenu: true,
		weight: weight,
		title: function() {
			return App.i18n.translate('contents.' + pageName + '.title');
		},
		description: function() {
			return App.i18n.translate('contents.' + pageName + '.description');
		},
		icon: function() {
			return '/images/page_' + pageName + '_icon.png';
		}
	});
};

definePage('presso', 4);
