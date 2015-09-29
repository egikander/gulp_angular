(function() {
    'use strict';

    var app = angular.module('simple');

    app.controller('simpleController', ['$scope', function($scope) {
        var ctrl = this;

        ctrl.message = 'Hello kitty!';

        //Controller code here
    }]);

})();