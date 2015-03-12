'use strict';

Router.route('/contacts', {});

App.component('pages.contacts').expose({
	weight: 10,
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
