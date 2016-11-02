angular.module('myApp.login', ['myApp.services.authentication'])

.controller('loginCtrl', function($scope, $location, AuthenticationService) {

    var defaultErrorMsg = 'Something went wrong at our end.';

    // all the note msgs to be displayed on login page
    $scope.note = {
        'notMember': "Not a Member ? Register with us",
        'forgotPassword': "Forgot Password",
        'newPasswordMsg': "Password will been sent to your mail",
        'home': "HOME",
        'customerSupport': "Contact- customersupport@manpriyastyles.com"
    };

    $scope.mobileNo = "";

    // dataLoading icon
    $scope.dataLoading = false;

    // whether to show forgot password section or no
    $scope.isForgotPassword = false;


    // reset login status
    AuthenticationService.clearCredentials();

    // on login
    $scope.login = function() {
        $scope.dataLoading = true;
        AuthenticationService.login($scope.mobileNo, $scope.password, function(response) {
            $scope.dataLoading = false;
            if (response.isValid) {
                AuthenticationService.setCredentials($scope.mobileNo);
                $location.path('/home');
            } else {
                $scope.errorMessage = response.error || defaultErrorMsg;
                $scope.errorAlertToggle = true;
            }
        });
    };

    // on forgot password
    $scope.forgotPassword = function() {
        $scope.dataLoading = true;
        AuthenticationService.forgotPassword($scope.mobileNo, function(response) {
            $scope.dataLoading = false;
            if (response.successMessage) {
                $scope.successMessage = response.successMessage;
                $scope.successAlertToggle = true;
            } else {
                $scope.errorMessage = response.errorMessage || defaultErrorMsg;
                $scope.errorAlertToggle = true;
            }
        });
    };
});