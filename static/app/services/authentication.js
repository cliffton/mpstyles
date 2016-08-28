angular.module('myApp.services.authentication', [])

.factory('AuthenticationService', function ($http, $cookieStore, $rootScope, $timeout, Base64) {
        var service = {};

        service.login = function (email, password, callback) {

            /* Dummy authentication for testing, uses $timeout to simulate api call
             ----------------------------------------------*/
            // $timeout(function(){
            //     var response = { success: email === 'test@gmail.com' && password === 'abc123' };
            //     if(!response.success) {
            //         response.message = 'Email or Password entered is incorrect';
            //     }
            //     callback(response);
            // }, 1000);


            /* Use this for real authentication
             ----------------------------------------------*/
            $http.post('http://cliffton.xyz/api/v1/login/', { username: email, password: password })
               .success(function (response) {
                   callback(response);
               });

        };

        service.signUp = function (register, callback) {

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
               .success(function (response) {
                   callback(response);
               });

        };

        service.setCredentials = function (email, password) {
            var authdata = Base64.encode(email + ':' + password);

            $rootScope.globals = {
                currentUser: {
                    email: email,
                    authdata: authdata
                }
            };

            // $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
            // $cookieStore.put('globals', $rootScope.globals);
        };

        service.clearCredentials = function () {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            // $http.defaults.headers.common.Authorization = 'Basic ';
        };

        service.forgotPassword = function(email, callback){

        /* Dummy authentication for testing, uses $timeout to simulate api call
         ----------------------------------------------*/
        $timeout(function(){
            var response = { success: email === 'test@gmail.com'};
            if(!response.success) {
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

        return service;
    })

.factory('Base64', function () {
    /* jshint ignore:start */

    var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    return {
        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output +
                    keyStr.charAt(enc1) +
                    keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) +
                    keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);

            return output;
        },

        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                window.alert("There were invalid base64 characters in the input text.\n" +
                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                    "Expect errors in decoding.");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            do {
                enc1 = keyStr.indexOf(input.charAt(i++));
                enc2 = keyStr.indexOf(input.charAt(i++));
                enc3 = keyStr.indexOf(input.charAt(i++));
                enc4 = keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }

                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";

            } while (i < input.length);

            return output;
        }
    };

    /* jshint ignore:end */
});