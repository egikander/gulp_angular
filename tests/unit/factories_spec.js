describe('Factories::', function() {
    beforeEach(function() {
        module('simple');
    });

    describe('Simple factory', function() {
        var simpleFactory;

        beforeEach(inject(function(_simpleFactory_) {
            simpleFactory = _simpleFactory_;
        }));

        it('should be defined', function() {
            expect(simpleFactory).toBeDefined();
        });
    });
});