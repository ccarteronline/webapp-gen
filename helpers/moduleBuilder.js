(function() {
    'use strict';
    module.exports = {
        buildAppModule: function (appName) {
            var appJS =
`(function() {
    'use strict';
    angular
        .module('` + appName + `', [])
        .run(function ($log) {
            $log.debug('` + appName + ` is running');
        })

})();`;
            return appJS
        }
    }
}());
