Package.describe({
	summary: "Font Awesome 4.1's LESS sources. Using this package will allow you reuse mixins and variables. As default, import '/packages/font-awesome-4-less/font-awesome.lessimport'"
});

Package.on_use(function(api) {
	api.use('less', 'client');

	api.addAssets('lib/fonts/fontawesome-webfont.eot', 'client');
	api.addAssets('lib/fonts/fontawesome-webfont.svg', 'client');
	api.addAssets('lib/fonts/fontawesome-webfont.ttf', 'client');
	api.addAssets('lib/fonts/fontawesome-webfont.woff', 'client');
	api.addAssets('lib/fonts/fontawesome-webfont.woff2', 'client');
});

Package.on_test(function(api) {
});
