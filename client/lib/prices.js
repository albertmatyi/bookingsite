'use strict';

var specialRepeat = [
	{
		'value': 'no',
		'converter': function(date) {
			return date;
		}
	}, {
		'value': 'week',
		'converter': function(date) {
			return date.getDay();
		}
	}, {
		'value': 'month',
		'converter': function(date) {
			return date.getDate();
		}
	}, {
		'value': 'year',
		'converter': function(date) {
			return App.date.getDayOfYear(date);
		}
	}
];
var specialMap = {};
(function() {
	for (var i = specialRepeat.length - 1; i >= 0; i -= 1) {
		specialMap[specialRepeat[i].value] = specialRepeat[i];
	}
})();

var inCircularRange = function(start, end, val) {
	// eg. start: Tue end: Fri
	var valInNormalRange = (start < end && start <= val && val < end);
	// eg: start: Sat end: Tue
	var valInInverseRange = (start > end && (val < end || val >= start));
	return valInNormalRange || valInInverseRange;
};

var checkIfDateBetween = function(converter, startDate, endDate, date) { //jshint ignore:line
	var start = converter.call(null, startDate);
	var end = converter.call(null, endDate);
	var val = converter.call(null, date);
	return inCircularRange(start, end, val);
};

var specialAppliesTo = function(special, date) {
	special.startDate = special.startDate || App.date.toDate(special.start);
	special.endDate = special.endDate || App.date.toDate(special.end);
	var sr = specialMap[special.repeat];
	return checkIfDateBetween(sr.converter, special.startDate, special.endDate,
		date);
};


var getPriceValuesForDate = function(prices, date) {
	var n = prices.special.length;
	for (var i = 0; i < n; i += 1) {
		var special = prices.special[i];
		if (specialAppliesTo(special, date)) {
			// console.log('\tapply ' + special.repeat + 'ly (' +
			// special.start + ' - ' + special.end + '): ' +
			// special.values);
			return special.values;
		}
	}
	return prices.values;
};

var calcGuestAvg = function(pricesPerDays, guestsIdx, days) {
	return _.reduce(pricesPerDays, function(sum, pricesPerDay) {
			return sum + pricesPerDay[guestsIdx];
		}, 0) / days;
};

var getAvgPricesForDays = function(pricesPerDays) {
	var avg = [];
	var guests = pricesPerDays[0].length;
	var days = pricesPerDays.length;
	// console.log('price matrix: ' + pricesPerDays);
	for (var guestsIdx = guests - 1; guestsIdx >= 0; guestsIdx -= 1) {
		var avgForGuest = calcGuestAvg(pricesPerDays, guestsIdx, days);
		avg.unshift(avgForGuest);
	}
	// console.log('avgs: ' + avg);
	return avg;
};


var getAvgForRange = function(prices, start, end) {
	if (prices.special && prices.special.length > 0 &&
		App.date.isValidRange(start, end)) {
		var pricesPerDays = []; // will contain prices for each day
		App.date.iterateBetweenDates(start, end, 'date', function(date) {
			// for every date, retrieve price values
			// console.log('for date: ' + App.date.toStr(date));
			var vals = getPriceValuesForDate(prices, date);
			// console.log('\twith vals: ' + vals);
			pricesPerDays.push(vals);
		});
		return getAvgPricesForDays(pricesPerDays);
	}
	return prices.values;
};


var calcPerNight = function(prices, quantity, guests, places, start, end) { //jshint ignore:line
	var vals = getAvgForRange(prices, start, end);
	var p = places;
	// every room should have at least 1 guest
	var price = vals[0] * quantity;
	// calculate without these guests
	guests = Math.max(0, guests - quantity);
	// nr of full rooms
	var f = p > 1 ? Math.floor(guests / (p - 1)) : quantity;
	// nr of guests that are not in full rooms
	var rg = p > 1 ? guests % (p - 1) : 0;
	// add prices of full rooms
	price = price - f * vals[0] + f * vals[p - 1];
	// add price of partially filled room
	price = price - vals[0] + vals[rg];
	return App.currency.convertDefaultTo(price);
};

App.component('prices').expose({
	calcPerNight: calcPerNight
});
