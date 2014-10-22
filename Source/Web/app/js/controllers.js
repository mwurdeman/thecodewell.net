var theCodeWellControllers = angular.module('theCodeWellControllers', []);

theCodeWellControllers.controller('homeController', ['$scope',
    function($scope) {
        $scope.message = "Home Page";
    }
]);

theCodeWellControllers.controller('contactController', ['$scope',
    function($scope) {
        $scope.message = "Contact Info";
    }
]);

theCodeWellControllers.controller('aboutController', ['$scope',
    function($scope) {
        $scope.message = "About Info";
    }
]);

