(() => {
    'use strict';
    module.exports = {
        buildAppModule: (appName) => {
            let appJS =
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
