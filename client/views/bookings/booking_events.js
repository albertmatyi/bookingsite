'use strict';


var invalidate = function(field, invalid, msg) {
	var $input = $('*[name="' + field + '"]');
	if (msg) {
		$input.attr('title', msg).tooltip('fixTitle');
	}
	$input
		.tooltip(invalid ? 'show' : 'hide');
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
	'change .form-control': function(e) {
		var $el = $(e.currentTarget);
		var fieldName = $el.attr('name');
		var strVal = $el.val();
		if (fieldName === 'booking.guests' ||
			fieldName === 'booking.quantity') {
			Session.set('booking.form.' + fieldName, parseInt(strVal, 10));
		} else {
			Session.set('booking.form.' + fieldName, strVal);
		}
		if (fieldName === 'booking.start' || fieldName === 'booking.end') {
			var date = App.date.toDate(strVal);
			Session.set('booking.form.' + fieldName + 'Date', date);
		}
	},
	'click .btn': function(e) {
		if (e.originalEvent && e.originalEvent.detail) {
			// famous click bugfix
			// http://stackoverflow.com/questions/24020535/famo-us-fastclick-firing-two-clicks-on-mobile
			e.preventDefault();
			e.stopPropagation();
			return false;
		} else {
			console.log('normal-click');
		}
	},
	'submit .booking-form': function(e) {
		e.preventDefault();
		var data = getData(e);
		data.booking.roomId = this.room._id;
		data.booking.currency = App.currency.selected();
		data.booking.language = App.i18n.getLocale();
		var isValid = App.bookings.isValid(data, invalidate);
		if (isValid) {
			Meteor.call('bookings.book', data, function(err) {
				if (err) {
					App.error.handle(err)
				} else {
					alert('booked')
				}
			});
		} else {
			invalidate('booking.button', true);
		}
	}
});
