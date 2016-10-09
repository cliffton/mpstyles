'use strict';

angular.module('myApp.register', ['myApp.services.authentication'])

.controller('registerCtrl', function($scope, $location, $timeout, AuthenticationService) {
    // sign up text
    $scope.signup = "SIGN UP";
    // home text
    $scope.home = "HOME";
    // dataloading icon
    $scope.dataLoading = false;

    $scope.defaultErrorMsg = 'Something went wrong at our end. Try again Later';

    // register object
    $scope.register = {};

    // on signup
    $scope.signUp = function() {
        $scope.dataLoading = true;
        AuthenticationService.signUp($scope.register, function(response) {
            $scope.dataLoading = false;
            if (response.successMessage) {
                $scope.successMessage = response.successMessage;
                $scope.successAlertToggle = true;
                $timeout(function() {
                    $location.path('login');
                }, 2500);
            } else {
                $scope.errorMessage = response.errorMessage || defaultErrorMsg;
                $scope.errorAlertToggle = true;
            }
        });
    };

    // removing alert msgs and setting register to empty object
    $scope.reset = function() {
        $scope.successAlertToggle = false;
        $scope.errorAlertToggle = false;
        $scope.register = {};
    };

});