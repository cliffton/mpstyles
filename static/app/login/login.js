angular.module('myApp.login', ['myApp.services.authentication'])

.controller('loginCtrl', function($scope, $rootScope, $location, AuthenticationService) {
    // all the note msgs to be displayed
    $scope.note = {
        'notMember': "Not a Member ? Register with us",
        'forgotPassword': "Forgot Password",
        'newPasswordMsg': "Password will been sent to your mail",
    };
    // home
    $scope.home = "HOME";

    // dataLoading icon
    $scope.dataLoading = false;

    // whether to show forgot password section or no
    $scope.isForgotPassword = false;


    // reset login status
    AuthenticationService.clearCredentials();

    // on login
    $scope.login = function() {
        $scope.dataLoading = true;
        AuthenticationService.login($scope.number, $scope.password, function(response) {
            $scope.dataLoading = false;
            if (response === 'valid') {
                AuthenticationService.setCredentials($scope.number);
                $location.path('/secure/home');
            } else {
                $scope.errorMessage = response.error;
                $scope.errorAlertToggle = true;
            }
        });
    };

    // on forgot password
    $scope.forgotPassword = function() {
        $scope.dataLoading = true;
        AuthenticationService.forgotPassword($scope.number, function(response) {
            $scope.dataLoading = false;
            if (response === 'valid') {
                $scope.successMessage = "Password has been sent to your mail";
                $scope.successAlertToggle = true;
            } else {
                $scope.errorMessage = response.error;
                $scope.errorAlertToggle = true;
            }
        });
    };
});