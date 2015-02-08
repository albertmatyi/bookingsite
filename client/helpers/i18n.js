/**
 * Created by albertmatyi on 2/8/15.
 */
'use strict';

function getStaticTranslation(obj) {
	return obj;
}
var getDynamicTranslation = function(obj, field) {
	var translations = obj.i18n;
	if (!translations) {
		return field;
	}
	var localized = translations[App.i18n.locale];
	if (!localized) {
		return field;
	}
	return localized[field] || field;
};
Blaze.registerHelper('i18n', function(obj, field) {
	if (_.isString(obj)) {
		return getStaticTranslation(obj);
	} else {
		return getDynamicTranslation(obj, field);
	}
});

App.component('i18n').expose({
	locale: 'en'
});
