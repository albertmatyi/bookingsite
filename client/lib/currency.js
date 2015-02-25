'use strict';

// TODO load dynamic rates
var data = {
	'default': 'RON',
	'all': ['EUR', 'RON', 'HUF'],
	'selected': 'EUR',
	'rates': {
		'HUF': {'val': 1.442, 'multiplier': 100},
		'RON': {'val': 1, 'multiplier': 1},
		'EUR': {'val': 4.4143, 'multiplier': 1}
	}
};

var selected = function() {
	return Session.get('currency.selected') || data.default;
};
var getRates = function() {
	return data.rates;
};
var convertDefaultTo = function(basePrice, currency, rates) {
	rates = rates || getRates();
	currency = currency || selected();
	var rate = rates[currency];
	return Math.ceil(basePrice / rate.val) * rate.multiplier;
};

App.component('currency').expose({
	convertDefaultTo: convertDefaultTo
});
