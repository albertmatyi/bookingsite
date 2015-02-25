/**
 * Created by albertmatyi on 2/25/15.
 */
'use strict';

var MAIL_REGEX =
	/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi; //jshint ignore:line

var isValid = function(data, invalidateCallback) {
	var invalidateCallback = invalidateCallback || function() {
			console.warn('Invalid booking data', arguments);
		};
	var allOk = true;
	var ok = data.user.fullName.match(/[\w -]{3,}/) !== null;
	invalidateCallback('user.fullName', !ok);
	allOk = allOk && ok;

	ok = data.user.email.match(MAIL_REGEX) !== null;
	invalidateCallback('user.email', !ok);
	allOk = allOk && ok;

	ok = data.user.phone.match(/^[\d+\s\-]{5,}$/) !== null;
	invalidateCallback('user.phone', !ok);
	allOk = allOk && ok;

	ok = data.user.citizenship.match(/^[\w\s]{2,}$/) !== null;
	invalidateCallback('user.citizenship', !ok);
	allOk = allOk && ok;

	ok = App.bookings.date.isValid(data, invalidateCallback);
	allOk = allOk && ok;

	return allOk;
};

App.component('bookings').expose({
	isValid: isValid
});
