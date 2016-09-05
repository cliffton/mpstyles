angular.module('myApp.services.authentication', [])

.factory('AuthenticationService', function($http, $cookieStore, $rootScope, $timeout) {
    var service = {};
    var tokenId;

    service.login = function(number, password, callback) {
        $http.post('http://cliffton.xyz/api/v1/login/', {
                username: number,
                password: password
            })
            .success(function(data, status, config, headers) {
                tokenId = data.token;
                callback('valid');
            })
            .error(function(errorMsg) {
                callback(errorMsg)
            });

    };

    service.signUp = function(register, callback) {
        data = {
            password: register.password,
            first_name: register.first_name,
            last_name: register.last_name,
            contact_number: register.mobile,
            email: register.email
        }

        $http.post('http://cliffton.xyz/api/v1/register/', data)
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

    service.clearCredentials = function() {
        $rootScope.globals = {};
        $cookieStore.remove('globals');
    };

    service.forgotPassword = function(number, callback) {

        $http.post('http://cliffton.xyz/api/v1/forgotPassword/', number)
        .success(function(data, status, config, headers) {
            callback('valid');
        })
        .error(function(errorMsg) {
            callback(errorMsg)
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

    return service;
});