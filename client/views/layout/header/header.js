/**
 * Created by albertmatyi on 2/8/15.
 */
'use strict';

Template.header.helpers({
	pages: function() {
		return _.where(
			_.map(App.pages, function(el, key) {
				el.routeName = el.routeName || key;
				return el;
			}),
			{includeInMenu: true}
		);
	}
});

Template.header.events({
	'click .menu-open': function() {
		$('.header .menu, .header .menu-close').addClass('active');
		$('body').addClass('modal-open');
	},
	'click .menu-close, click .link': function() {
		$('.header .menu, .header .menu-close').removeClass('active');
		$('body').removeClass('modal-open');
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



