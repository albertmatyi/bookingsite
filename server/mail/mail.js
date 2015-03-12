'use strict';
var NigerianPrinceGun = new Mailgun({
	// TODO update to match
	apiKey: 'key-dda9b756ccbbf539f75c0c1f1b71beaf',
	// TODO update to match
	domain: 'sandbox3f5e890f18424d80a3e812f035848ced.mailgun.org'
});

var getMailOptions = function() {
	return {
		addresses: {
			noreply: 'noreply@restatferdinand.ro',
			admin: 'albertmatyi@gmail.com',
			dev: 'albertmatyi@gmail.com'
		}
	};
};

var renderedTemplate = {};

var renderTemplate = function(templateName, data, lang) {
	if (lang) {
		templateName = lang + '/' + templateName;
	}
	templateName = 'templates/' + templateName;
	if (!renderedTemplate[templateName]) {
		SSR.compileTemplate(templateName, Assets.getText(templateName));
		renderedTemplate[templateName] = true;
	}
	return SSR.render(templateName, data);
};


App.component('mail').expose({
	getOptions: getMailOptions,
	renderTemplate: renderTemplate,
	send: function(data) {
		NigerianPrinceGun.send(data);
	}
});
