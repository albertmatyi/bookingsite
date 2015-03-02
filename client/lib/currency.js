'use strict';


var selected = function() {
	return Session.get('currency.selected') || App.currency.data.default;
};

var select = function(val) {
	Session.set('currency.selected', val);
};

App.component('currency').expose({
	selected: selected,
	select: select
});
