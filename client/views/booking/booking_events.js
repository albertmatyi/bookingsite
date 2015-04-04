'use strict';


var invalidate = function(field, invalid, msg) {
	var $input = $('*[name="' + field + '"]');
	if (msg) {
		$input.attr('title', msg).tooltip('fixTitle');
	}
	$input
		.tooltip({trigger: 'manual'})
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
		switch (fieldName) {
			case 'booking.guests':
			case 'booking.quantity':
				Session.set('booking.form.' + fieldName, parseInt(strVal, 10));
				break;
			case 'booking.start':
				var date = App.date.toDate(strVal);
				var endDate = Session.get('booking.form.booking.endDate');
				var endIsAfter = endDate > date;
				if (!endIsAfter) {
					var newDate = App.date.toStr(+date + App.date.DAY);
					$('input[name="booking.end"]')
						.val(newDate)
						.trigger('change');
				} // jshint ignore: line
			case 'booking.end':
				date = date || App.date.toDate(strVal);
				Session.set('booking.form.' + fieldName + 'Date', date);		 // jshint ignore: line
			default:
				Session.set('booking.form.' + fieldName, strVal);
		}
	},
	'submit .booking-form': function(e) {
		e.preventDefault();
		var data = getData(e);
		var roomId = this.room._id;
		data.booking.roomId = roomId;
		data.booking.currency = App.currency.selected();
		data.booking.language = App.i18n.selected();
		var isValid = App.bookings.isValid(data, invalidate);
		if (isValid) {
			Meteor.call('bookings.book', data, function(err) {
				if (err) {
					App.error.handle(err);
				} else {
					Router.go('booking.success', {_id: roomId});
					Alerts.add(App.i18n.translate('booking.bookingSuccess'), 'success');
				}
			});
		} else {
			invalidate('booking.button', true);
		}
	}
});
