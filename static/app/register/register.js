'use strict';

angular.module('myApp.register', ['myApp.services.authentication'])

.controller('registerCtrl', function($scope, $location, $timeout, AuthenticationService) {

$scope.signup = "SIGN UP";
$scope.home = "HOME";
$scope.dataLoading = false;
$scope.isInvalid = false;
$scope.isValid = false;
$scope.errorMessage = "";
$scope.successMessage = "";

$scope.signUp = function () {
    $scope.dataLoading = true;
    AuthenticationService.signUp($scope.register, function(response) {
        if(response.success) {
            $scope.dataLoading = false;
            $scope.isValid = true;
            $scope.successMessage = "Kindly login";
            $timeout(function(){
                $location.path('login');
            }, 2500);

        } else {
            $scope.errorMessage = response.message;
            $scope.dataLoading = false;
            $scope.isInvalid = true;
        }
    });
};

$scope.reset = function(){
    $scope.isInvalid = false;
    $scope.errorMessage = "";
    $scope.isValid = false;
    $scope.successMessage = "";
};

});