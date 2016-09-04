angular.module('myApp.services.authentication', [])

.factory('AuthenticationService', function($http, $cookieStore, $rootScope, $timeout) {
    var service = {};
    var tokenId;

    service.login = function(number, password, callback) {

        /* Dummy authentication for testing, uses $timeout to simulate api call
         ----------------------------------------------*/
        // $timeout(function(){
        //     var response = { success: email === 'test@gmail.com' && password === 'abc123' };
        //     if(!response.success) {
        //         response.message = 'Number or Password entered is incorrect';
        //     }
        //     callback(response);
        // }, 1000);


        /* Use this for real authentication
         ----------------------------------------------*/
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

        /* Dummy authentication for testing, uses $timeout to simulate api call
         ----------------------------------------------*/
        // $timeout(function(){
        //     var response = { success: register.name === 'neville' && register.email === 'test@gmail.com' && register.password === 'abc123'
        //     && register.city === 'mumbai' && register.mobile ==='9892761957'};
        //     if(!response.success) {
        //         response.message = 'Try again later';
        //     }
        //     callback(response);
        // }, 1000);


        /* Use this for real authentication
         ----------------------------------------------*/
        data = {
            password: register.password,
            first_name: register.first_name,
            last_name: register.last_name,
            contact_number: register.mobile,
            email: register.email
        }

        $http.post('http://cliffton.xyz/api/v1/register/', data)
            .success(function(response) {
                callback(response);
            });

    };

    service.setCredentials = function(number) {
        $rootScope.globals = {
            currentUser: {
                number: number,
                authdata: tokenId
            }
        };

        // $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
        $cookieStore.put('globals', $rootScope.globals);
    };

    service.clearCredentials = function() {
        $rootScope.globals = {};
        $cookieStore.remove('globals');
        // $http.defaults.headers.common.Authorization = 'Basic ';
    };

    service.forgotPassword = function(email, callback) {

        /* Dummy authentication for testing, uses $timeout to simulate api call
         ----------------------------------------------*/
        $timeout(function() {
            var response = {
                success: email === 'test@gmail.com'
            };
            if (!response.success) {
                response.message = 'Email id is not registered';
            }
            callback(response);
        }, 1000);


        /* Use this for real authentication
         ----------------------------------------------*/
        //$http.post('/api/authenticate', { email: email})
        //    .success(function (response) {
        //        callback(response);
        //    });

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