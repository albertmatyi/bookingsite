'use strict';

Migrations.add({
	name: 'Add rooms',
	version: 2,

	up: function() {
		App.rooms.collection.find({}).forEach(function(room) {
			var match = room.album_url.match(/\/(\d{8,})\/(.+)$/);// jshint ignore:line
			var user = match[1];
			var albumId = match[2];
			console.log('Updating room album user/album', user, albumId);
			App.rooms.collection.update(room._id,
				{
					$set: {
						'album': {
							user: user,
							id: albumId
						}
					}
				});
		});
	},

	down: function() {
	}
});

//Migrations.migrateTo('2,rerun');
