describe('Filters::', function() {
    beforeEach(function() {
        module('simple');
    });

    describe('Simple filter', function() {
        var simpleFilter;

        beforeEach(inject(function(_simpleFilter_) {
            simpleFilter = _simpleFilter_;
        }));

        it('should be defined', function() {
            expect(simpleFilter).toBeDefined();
        });
    });
});