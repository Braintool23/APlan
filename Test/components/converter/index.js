'use strict';

app.converter = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_converter
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
	
	var model = app.converter.converterModel;
	model.set("submit", function() {
    var lbs = model.get("fields.kg") * 2.2046; // get fields.kgs and multiply with 2.2046
    model.set("fields.pound", lbs + " lbs"); // set fields.result
	});

// END_CUSTOM_CODE_converter
(function(parent) {
    var converterModel = kendo.observable({
        fields: {
            pound: '',
            group: '',
            kg: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('converterModel', converterModel);
})(app.converter);

// START_CUSTOM_CODE_converterModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_converterModel