'use strict';

var collection = new Meteor.Collection('rooms');

App.component('rooms').expose({
	collection: collection
});

