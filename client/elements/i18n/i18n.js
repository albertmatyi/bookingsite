/**
 * Created by albertmatyi on 3/16/15.
 */
'use strict';

Session.set('i18n.language', 'en');
Blaze.registerHelper('i18n', App.i18n.translate);

Template.i18nLanguageSelector.helpers({
	language: function() {
		return App.i18n.selected();
	},
	languages: function() {
		return _.map(App.i18n.languages(), function(lang) {
			return {_id: lang};
		});
	}
});

App.component('i18n').expose({
	languages: function() {
		return ['en', 'hu', 'ro'];
	},
	selected: function() {
		return Session.get('i18n.language');
	}
});

Template.i18nLanguageSelectorLanguage.events({
	'click .language': function(e) {
		e.preventDefault();
		Session.set('i18n.language', this._id);
	}
});
