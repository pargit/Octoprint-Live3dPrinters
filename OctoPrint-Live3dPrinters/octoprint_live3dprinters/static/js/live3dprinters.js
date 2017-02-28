/*
 * View model for OctoPrint-Live3dPrinters
 *
 * Author: Mordechai Pereg
 * License: AGPLv3
 */
$(function() {
    function Live3dprintersViewModel(parameters) {
        var self = this;

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        // TODO: Implement your plugin's view model here.
    }

    // view model class, parameters for constructor, container to bind to
    OCTOPRINT_VIEWMODELS.push([
        Live3dprintersViewModel,

        // e.g. loginStateViewModel, settingsViewModel, ...
        [ /* "loginStateViewModel", "settingsViewModel" */ ],

        // e.g. #settings_plugin_live3dprinters, #tab_plugin_live3dprinters, ...
        [ /* ... */ ]
    ]);
});
