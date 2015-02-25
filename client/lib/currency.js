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

var getAllCurrencies = function() {
	return _.map(data.all, function(el) {
		return {
			_id: el,
			name: el
		};
	});
};
var select = function(val) {
	Session.set('currency.selected', val);
};
App.component('currency').expose({
	convertDefaultTo: convertDefaultTo,
	currencies: getAllCurrencies,
	selected: selected,
	select: select
});
