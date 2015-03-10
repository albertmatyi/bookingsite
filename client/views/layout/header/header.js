/**
 * Created by albertmatyi on 2/8/15.
 */
'use strict';

Template.header.helpers({
	pages: function() {
		return _.where(
			_.map(App.pages, _.identity),
			{includeInMenu: true}
		);
	}
});

Template.header.events({
	'click .menu-open': function() {
		$('.header .menu, .header .menu-close').addClass('active');
	},
	'click .menu-close, click .link': function() {
		$('.header .menu, .header .menu-close').removeClass('active');
	}
});


Template.headerPageLink.helpers({
	active: function() {
		var current = Router.current();
		if (!current) {
			return;
		}
		var route = current.route;
		if (!route || !route.getName) {
			return;
		}
		return this.routeName === route.getName() ? 'active' : '';
	}
});



