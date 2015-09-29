describe('Controllers ::', function() {
    beforeEach(function() {
        module('simple');
    });

    describe('Simple controller', function() {
        var scope;
        var simpleCtrl;

        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            simpleCtrl = $controller('simpleController', {
                $scope: scope
            });
        }));

        it('should be defined', function() {
            expect(simpleCtrl).toBeDefined();
        });

    });
});