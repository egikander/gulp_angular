(function() {
    'use strict';

    var app = angular.module('simple');

    app.directive('kitty', [function() {
        return {
            restrict: 'E',
            templateUrl: 'assets/templates/kitty.html'
        };
    }]);

})();