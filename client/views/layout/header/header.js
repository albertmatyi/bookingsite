/**
 * Created by albertmatyi on 2/8/15.
 */
'use strict';

Template.header.helpers({
	pages: function() {
		return [
			{
				routeName: 'rooms',
				title: 'Rooms'
			}
//			, {
//				routeName: 'rooms',
//				title: 'Rooms'
//			}
		];
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



