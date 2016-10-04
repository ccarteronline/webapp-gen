(() => {
    'use strict';

    module.exports = {
        buildTest: (appName) => {
            let unitTest =
`(function () {
    'use strict';
    describe('Controller: TestCtrl', function () {

        var scope, vm;

        beforeEach(module('` + appName + `'));

        beforeEach(inject(function ($rootScope, $controller, $location) {
            scope = $rootScope.$new();
            location = $location;
            vm = $controller('TestCtrl', {
                $scope: scope
            });
        }));

        it('should have an intro title', function () {
            expect(vm.introTitle).toEqual('Welcome to ` + appName + `');
        });

        it('should have a sub header text', function () {
            expect(vm.subHeaderText).toEqual('Use this document as a way to quickly start any new project.');
        });

        it('should have items in the list', function () {
            var itemInList = {
                from: 'Billy Leaf',
                message: 'I dont know what to say in my message.'
            }
            expect(vm.list).toContain(itemInList);
        });

    });
})();
`;
            return unitTest;
        }
    }
}());
