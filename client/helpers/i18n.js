/**
 * Created by albertmatyi on 2/8/15.
 */
'use strict';

var extractDotNotationKey = function(obj, field) {
	var keys = field.split('.');
	var value = field;
	var prekey = '';
	_.each(keys, function(key) {
		var psfx = (prekey ? prekey + '.' : '');
		if (obj[psfx + key]) {
			obj = obj[key]
		} else {
			prekey = psfx + key;
		}
	});
	return obj || value;
};
var getTranslation = function(translations, field) {
	if (!translations) {
		return field;
	}
	var localized = translations[App.i18n.getLocale()];
	if (!localized) {
		return field;
	} else {
		return extractDotNotationKey(localized, field) || field;
	}
};

var translate = function(obj, field) {
	if (_.isString(obj)) {
		return getTranslation(App.i18n.translations, obj);
	} else {
		return getTranslation(obj.i18n, field);
	}
};
Blaze.registerHelper('i18n', translate);

App.component('i18n').expose({
	getLocale: function() {
		return 'en';
	},
	translate: translate
});
