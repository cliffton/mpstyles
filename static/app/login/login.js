angular.module('myApp.login', ['myApp.services.authentication'])

.controller('loginCtrl', function($scope, $rootScope, $location, AuthenticationService) {

$scope.notMemberNote = "Not a Member ? Register with us";
$scope.forgotPasswordNote = "forgot password ?";
$scope.rememberNote = "remember me";
$scope.home = "HOME";
$scope.dataLoading = false;
$scope.isInvalid = false;
$scope.valid = false;
$scope.errorMessage = "";
$scope.successMessage = "";
$scope.isForgotPassword = false;
$scope.newPasswordMsg = "Password will been sent to your mail";


// reset login status
AuthenticationService.clearCredentials();

$scope.login = function () {
    $scope.dataLoading = true;
    AuthenticationService.login($scope.email, $scope.password, function(response) {
        if(response) {
            // AuthenticationService.setCredentials($scope.email, $scope.password);
            $location.path('/home');
        } else {
            $scope.errorMessage = response.message;
            $scope.dataLoading = false;
            $scope.isInvalid = true;
        }
    });
};

$scope.forgotPassword = function () {
    $scope.dataLoading = true;
    AuthenticationService.forgotPassword($scope.email, function(response) {
        $scope.dataLoading = false;
        if(response.success) {
            $scope.successMessage = "Password is sent";
            $scope.valid = true;
        } else {
            $scope.errorMessage = response.message;
            $scope.isInvalid = true;
        }
    });
};
});