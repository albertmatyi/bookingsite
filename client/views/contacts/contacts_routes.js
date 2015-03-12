'use strict';

Router.route('/contacts', {});

App.component('pages.contacts').expose({
	routeName: 'contacts',
	includeInMenu: true,
	title: function() {
		return App.i18n.translate('contacts.title');
	},
	description: function() {
		return App.i18n.translate('contacts.description');
	},
	icon: function() {
		return '/images/page_contacts_icon.png';
	}
});
