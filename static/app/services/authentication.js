angular.module('myApp.services.authentication', [])

.factory('AuthenticationService', function($http, $cookieStore, $rootScope, $timeout) {
    var service = {};
    var tokenId;

    service.login = function(number, password, callback) {
        $http.post('http://cliffton.xyz/api/v1/login/', {
                username: number,
                password: password
            })
            .success(function(response) {
                if(angular.isDefined(response.token)){
                    tokenId = response.token;
                    response.isValid = true;
                }
                callback(response);
            })
            .error(function(response) {
                callback(response);
            });

    };

    service.signUp = function(register, callback) {
        data = {
            password: register.password,
            first_name: register.firstName,
            last_name: register.lastName,
            contact_number: register.mobileNumber,
            email: register.email
        }

        $http.post('http://cliffton.xyz/api/v1/register/', data)
            .success(function(response) {
                callback(response);
            })
            .error(function(response) {
                callback(response)
            });

    };

    service.forgotPassword = function(number, callback) {
        $http.post('http://cliffton.xyz/api/v1/forgotPassword/', number)
        .success(function(response) {
            callback(response);
        })
        .error(function(response) {
            callback(response)
        });
    };

    service.subscribe = function(email) {
        $http.post('http://cliffton.xyz/api/v1/subscribe/', email)
            .success(function(data, status, config, headers) {
                callback('valid');
            })
            .error(function(errorMsg) {
                callback(errorMsg)
            });
    };

    service.setCredentials = function(number) {
        $rootScope.globals = {
            currentUser: {
                number: number,
                authdata: tokenId
            }
        };
        $cookieStore.put('globals', $rootScope.globals);
    };

    // clearing cookie
    service.clearCredentials = function() {
        $rootScope.globals = {};
        $cookieStore.remove('globals');
    };

    return service;
});