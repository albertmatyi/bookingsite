'use strict';
App.component('modal').expose({
	show: function(templateName, options) {
		var footerTemplateName = Template[templateName + 'Footer'] ? templateName + 'Footer' : null;
		var headerTemplateName = Template[templateName + 'Header'] ? templateName + 'Header' : null;
		options = _.extend(
			{
				bodyTemplate: templateName,
				footerTemplate: footerTemplateName,
				headerTemplate: headerTemplateName,
				data: {}
			},
			options
		);
		options.view = Blaze.renderWithData(Template.modal, options, document.body);
		$('body > .modal').last().modal('show');
	}
});

Template.modal.events({
	'click .close[data-dismiss=modal], click .btn': function(e) {
		if (!e.isDefaultPrevented() && this.view) {
			$(e.currentTarget).parents('.modal').modal('hide');
		}
	},
	'hidden.bs.modal .modal': function() {
		Blaze.remove(this.view);
	}
});
