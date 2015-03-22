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
var getRates = function() {
	return data.rates;
};
var convertDefaultTo = function(basePrice, currency, rates) {
	rates = rates || getRates();
	currency = currency;
	if (!currency && Meteor.isClient) {
		currency = App.currency.selected();
	}
	var rate = rates[currency];
	return Math.ceil(basePrice / rate.val) * rate.multiplier;
};

var convert = function(price, srcCurrency, dstCurrency, rates) { // jshint ignore:line
	if (!srcCurrency) {
		throw 'Currencies not defined';
	}
	dstCurrency = dstCurrency;
	rates = rates;
	var rate = rates[srcCurrency];

	var basePrice = price * rate.val / rate.multiplier;
	return convertDefaultTo(basePrice, dstCurrency, rates);
};


var getAllCurrencies = function() {
	return _.map(data.all, function(el) {
		return {
			_id: el,
			name: el
		};
	});
};

App.component('currency').expose({
	convertDefaultTo: convertDefaultTo,
	convert: convert,
	currencies: getAllCurrencies,
	getRates: getRates,
	data: data
});
