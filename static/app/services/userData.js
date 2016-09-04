angular.module('myApp.services.userData', [])

.factory('UserData', function($http) {
    var user = {};

    user.getInfo = function(tokenId) {
        /*          var promise = $http.get('http://cliffton.xyz/api/v1/userInfo/' +tokenId).then(function(response) {
                       return response.data;
                    }, function (error) {
                      //error
                    })
                    return promise;*/
        return {
            id: 1,
            first_name: 'Neville',
            cart_count: 3
        }
    };
    return user;
});