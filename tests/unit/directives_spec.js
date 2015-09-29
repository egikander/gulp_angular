describe('Directives::', function() {
    beforeEach(function() {
        module('simple');
    });

    describe('Simple directive', function() {
        var scope;
        var elem;

        beforeEach(inject(function($rootScope, $compile) {
            scope = $rootScope.$new();
            elem = angular.element('<kitty></kitty>');
            $compile(elem)(scope);
            scope.$digest();
        }));

        it('should behave image', function() {
            var img = elem.find('img');
            expect(img.length).toBe(1);
            expect(img.attr('src')).toEqual('assets/img/cat.png');
        });
    });
});