'use strict';

var MAIL_REGEX =
	/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi; //jshint ignore:line

var invalidate = function(field, invalid) {
//	Session.set('booking.validation.' + field, invalid * new Date());
	var $input = $('*[name="' + field + '"]');
	$input.tooltip(invalid ? 'show' : 'hide');
	var $group = $input.parents('.form-group');
	if (invalid) {
		$group.addClass('has-error');
	} else {
		$group.removeClass('has-error');
	}
};

App.component('booking.form').expose({
	invalidate: invalidate
});

var validate = function(data) {
	var allOk = true;
	var ok = data.user.fullName.match(/[\w -]{3,}/) !== null;
	invalidate('user.fullName', !ok);
	allOk = allOk && ok;

	ok = data.user.email.match(MAIL_REGEX) !== null;
	invalidate('user.email', !ok);
	allOk = allOk && ok;

	ok = data.user.phone.match(/^[\d+\s\-]{5,}$/) !== null;
	invalidate('user.phone', !ok);
	allOk = allOk && ok;

	ok = data.user.citizenship.match(/^[\w\s]{2,}$/) !== null;
	invalidate('user.citizenship', !ok);
	allOk = allOk && ok;

	ok = App.booking.datepicker.isValid(data);
	allOk = allOk && ok;

	invalidate('booking.button', !allOk);
	return allOk;
};

var getData = function(e) {
	var data = $(e.currentTarget).serializeObject();
	_.each(data, function(val, key) {
		delete data[key];
		var keys = key.split('.');
		data[keys[0]] = data[keys[0]] || {};
		data[keys[0]][keys[1]] = val;
	});
	return data;
};
Template.bookingForm.events({
	'submit .booking-form': function(e) {
		e.preventDefault();
		var data = getData(e);
		data.booking.roomId = this._id;
		console.log(data);
		var isValid = validate(data);
		if (isValid) {
			Meteor.call('book', data, function(err) {
				if (err) {
					App.error.handle(err)
				} else {
					alert('booked')
				}
			});
		}
	},
	'blur .datepicker': function(e) {
//		setTimeout(function() {
//			$(e.currentTarget).datepicker('hide');
//		}, 350);
	}
});
