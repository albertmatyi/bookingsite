'use strict';

Migrations.add({
	name: 'Add rooms',
	version: 1,

	up: function() {
		App.rooms.collection.remove({});
		_.map(App.migrations.data.all.categories, function(cat) {
			_.map(cat.bookables, function(room) {
				var cleanRoom = _.omit(room, 'id', 'category');
				App.rooms.collection.insert(cleanRoom);
			});
		});
	},

	down: function() {
	}
});

//Migrations.migrateTo('1,rerun');
