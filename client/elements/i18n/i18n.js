/**
 * Created by albertmatyi on 3/16/15.
 */
'use strict';

var EXP = {years: 1};
if (!Cookie.get('i18n.language')) {
	Cookie.set('i18n.language', 'en', EXP);
}
Blaze.registerHelper('i18n', App.i18n.translate);

Template.i18nLanguageSelector.helpers({
	language: function() {
		return App.i18n.selected();
	},
	languages: function() {
		return _.filter(
			_.map(App.i18n.languages(), function(lang) {
				return {_id: lang};
			}), function(e) {
				return e._id !== App.i18n.selected();
			});
	}
});

App.component('i18n').expose({
	languages: function() {
		return ['en', 'hu', 'ro'];
	},
	selected: function() {
		return Cookie.get('i18n.language');
	}
});

Template.i18nLanguageSelectorLanguage.events({
	'click .language': function(e) {
		e.preventDefault();
		Cookie.set('i18n.language', this._id, EXP);
	}
});
