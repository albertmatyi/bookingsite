'use strict';
var idToRoot = {
	660001: 'presso',
	64022: 'eating',
	68001: 'about',
	104002: 'partners',
	64035: 'guestbook'
};
var ALBUM_REGEX = /<div.*username="(\w+)".*albumid="(\w+)"[^>]*>.*<\/div>/gi;
var processAlbumInfo = function(content) {
	_.each(content.i18n, function(local) {
		local.description = local.description.replace(ALBUM_REGEX, function() {
			content.album = {
				user: arguments[1],
				id: arguments[2]
			};
			return '';
		});
	});
};
Migrations.add({
	name: 'Import site content data',
	version: 3,

	up: function() {
		App.contents.collection.remove({});
		_.each(App.migrations.data.all.categories, function(cat) {
			var parentId = idToRoot[cat.id];
			_.each(cat.contents, function(content) {
				content = _.pick(content, 'i18n', 'weight');
				processAlbumInfo(content);
				content.parentId = parentId;
				App.contents.collection.insert(content);
			});
		});
	},
	down: function() {
	}
});

//Migrations.migrateTo('3,rerun');
