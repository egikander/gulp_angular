describe('Simple', function() {

    it('should load and display correct title', function() {
        browser.get('/');
        expect(browser.getTitle()).toBe('SIMPLE App');
    });
});