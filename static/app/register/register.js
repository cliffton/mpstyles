'use strict';

angular.module('myApp.register', ['myApp.services.authentication'])

.controller('registerCtrl', function($scope, $location, $timeout, AuthenticationService) {
    // sign up text
    $scope.signup = "SIGN UP";
    // home text
    $scope.home = "HOME";
    // dataloading icon
    $scope.dataLoading = false;

    // on signup
    $scope.signUp = function() {
        $scope.dataLoading = true;
        AuthenticationService.signUp($scope.register, function(response) {
            $scope.dataLoading = false;
            if (response === 'valid') {
                $scope.isValid = true;
                $scope.successMessage = "Redirecting you to login Page";
                $timeout(function() {
                    $location.path('login');
                }, 2500);

            } else {
                $scope.errorMessage = response.error;
                $scope.isInvalid = true;
            }
        });
    };

    // removing alert msgs
    $scope.reset = function() {
        $scope.isInvalid = false;
        $scope.isValid = false;
    };

});