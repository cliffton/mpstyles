angular.module('myApp.services.productData', [])

.factory('ProductData', function($http) {
    var product = {};

    product.getList = function() {
        var promise = $http.get('/json/productList/accessories.json').then(function(response) {
           return response.data;
        }, function (error) {
          //error
        });
        return promise;
    };

    product.getOffers = function() {
        /*var promise = $http.get('http://cliffton.xyz/api/v1/offers/').then(function(response) {
           return response.data;
        }, function (error) {
          //error
        })
        return promise;*/
        return [{
            "id": 0,
            isLiked: false,
            price: 199,
            sourcePath: 'offer1.jpg',
            name: 'Elegant choker'
        }, {
            "id": 1,
            isLiked: false,
            price: 99,
            sourcePath: 'offer2.jpg',
            name: 'Elegant choker'
        }, {
            "id": 2,
            isLiked: false,
            price: 225,
            sourcePath: 'offer3.jpg',
            name: 'Anklets'
        }, {
            "id": 3,
            isLiked: false,
            price: 350,
            sourcePath: 'offer4.jpg',
            name: 'Gold Bracelets'
        },{
            "id": 4,
            isLiked: false,
            price: 500,
            sourcePath: 'offer5.jpg',
            name: 'Thin Chain'
        }];
    };
    return product;
});