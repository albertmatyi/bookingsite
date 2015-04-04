'use strict';

var extractDotNotationKey = function(obj, field) {
	if (!obj) {
		return 'i18n: Undef obj';
	}
	if (!field) {
		return 'i18n: No field specified';
	}
	var keys = field.split('.');
	var value = obj;
	var prekey = '';
	_.each(keys, function(key) {
		var psfx = (prekey ? prekey + '.' : '');
		if (typeof value[psfx + key] !== 'undefined') {
			value = value[psfx + key];
		} else {
			prekey = psfx + key;
		}
	});
	if (typeof value === 'undefined' || _.isObject(value)) {
		App.i18n.missing[prekey] = field;
		return field;
	} else {
		return value;
	}
};
var getTranslation = function(translations, field) {
	if (!translations) {
		return field;
	}
	var localized = translations[App.i18n.selected()];
	if (!localized) {
		return field;
	} else {
		var value = extractDotNotationKey(localized, field);
		return typeof value === 'undefined' ? field : value;
	}
};

var translate = function(obj, field) {
	if (_.isString(obj)) {
		return getTranslation(App.i18n.translations, obj);
	} else if (obj) {
		return getTranslation(obj.i18n, field);
	} else {
		return 'cannot translate undefined';
	}
};
App.component('i18n').expose({
	missing: {},
	translate: translate
});
