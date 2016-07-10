angular.module('myApp.login', ['myApp.services.authentication'])

.controller('loginCtrl', function($scope, $rootScope, $location, AuthenticationService) {

$scope.notMemberNote = "Not a Member ? Register with us";
$scope.forgotPasswordNote = "forgot password ?";
$scope.rememberNote = "remember me";
$scope.home = "HOME";
$scope.dataLoading = false;
$scope.isInvalid = false;
$scope.errorMessage = "";


// reset login status
AuthenticationService.clearCredentials();

$scope.login = function () {
    $scope.dataLoading = true;
    AuthenticationService.login($scope.email, $scope.password, function(response) {
        if(response.success) {
            AuthenticationService.setCredentials($scope.email, $scope.password);
            $location.path('secure/home/1');
        } else {
            $scope.errorMessage = response.message;
            $scope.dataLoading = false;
            $scope.isInvalid = true;
        }
    });
};
});