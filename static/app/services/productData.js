angular.module('myApp.services.productData', [])

.factory('ProductData', function($http) {
    var product = {};

    product.getList = function() {
        /*          var promise = $http.get('http://cliffton.xyz/api/v1/productList/').then(function(response) {
                       return response.data;
                    }, function (error) {
                      //error
                    })
                    return promise;*/
        return [{
            id: 1,
            isShortListed: true,
            name: "Simple Choker",
            productCode: "A123",
            type: 'Choker',
            price: 220,
            sourcePath: "content/img/image17.jpg",
            isLimited: true
        }, {
            id: 2,
            isShortListed: false,
            name: "Beeded Choker",
            productCode: "C123",
            type: 'Choker',
            price: 250,
            sourcePath: "content/img/image18.jpg",
            isLimited: false
        }, {
            id: 3,
            isShortListed: true,
            name: "Simple choker",
            productCode: "D123",
            type: 'Choker',
            price: 980,
            sourcePath: "content/img/image34.jpg",
            isLimited: false
        }, {
            id: 4,
            isShortListed: false,
            name: "Diamond Ring",
            type: 'Rings',
            productCode: "D123",
            price: 320,
            sourcePath: "content/img/bangle1.jpg",
            isLimited: false
        }, {
            id: 5,
            isShortListed: false,
            name: "Bangles",
            type: 'Bangles',
            productCode: "D123",
            price: 250,
            sourcePath: "content/img/bangle2.jpg",
            isLimited: true
        }, {
            id: 6,
            isShortListed: true,
            type: 'Rings',
            name: "Bangles",
            price: 980,
            productCode: "D123",
            sourcePath: "content/img/image35.jpg",
            isLimited: false
        }, {
            id: 7,
            isShortListed: true,
            name: "Chain",
            type: 'Rings',
            price: 270,
            productCode: "D123",
            sourcePath: "content/img/image15.jpg",
            isLimited: false
        }, {
            id: 8,
            isShortListed: false,
            name: "Beeded chain",
            productCode: "ABC123",
            type: 'Bangles',
            price: 250,
            sourcePath: "content/img/image9.jpg",
            isLimited: false
        }, {
            id: 9,
            isShortListed: false,
            name: "Pattern Chain",
            type: 'Bangles',
            productCode: "PQR123",
            price: 385,
            sourcePath: "content/img/image02.jpg",
            isLimited: true
        }, {
            id: 10,
            isShortListed: false,
            name: "Elegant Chain",
            type: 'Bangles',
            price: 210,
            sourcePath: "content/img/image03.jpg",
            isLimited: false
        }, {
            id: 11,
            isShortListed: true,
            name: "Simple Braclet",
            type: 'Bracelets',
            productCode: "XYZ123",
            price: 290,
            sourcePath: "content/img/image14.jpg",
            isLimited: false
        }, {
            id: 12,
            isShortListed: false,
            name: "Simple Braclet",
            type: 'Bangles',
            price: 685,
            sourcePath: "content/img/image20.jpg",
            isLimited: true
        }, {
            id: 13,
            isShortListed: true,
            price: 190,
            type: 'Bangles',
            sourcePath: "content/img/image26.jpg",
            isLimited: false
        }, {
            id: 14,
            isShortListed: false,
            name: "Chain",
            type: 'Bracelets',
            price: 95,
            sourcePath: "content/img/image23.jpg",
            isLimited: false
        }, {
            id: 15,
            isShortListed: false,
            name: "Chain",
            type: 'Bracelets',
            price: 120,
            sourcePath: "content/img/image24.jpg",
            isLimited: true
        }, {
            id: 16,
            isShortListed: true,
            name: "Chain",
            type: 'Bracelets',
            price: 250,
            sourcePath: "content/img/image11.jpg",
            isLimited: false
        }, {
            id: 17,
            isShortListed: true,
            name: "Chain",
            type: 'Bracelets',
            price: 980,
            productCode: "XYZ123",
            sourcePath: "content/img/image1.png",
            isLimited: false
        }, {
            id: 18,
            isShortListed: true,
            name: "Chain",
            productCode: "XYZ123",
            type: 'Necklace',
            price: 120,
            sourcePath: "content/img/image36.jpg",
            isLimited: false
        }, {
            id: 19,
            isShortListed: true,
            name: "Chain",
            productCode: "XYZ123",
            type: 'Necklace',
            price: 250,
            sourcePath: "content/img/image4.jpg",
            isLimited: true
        }, {
            id: 20,
            isShortListed: true,
            name: "Chain",
            productCode: "XYZ123",
            type: 'Necklace',
            price: 980,
            sourcePath: "content/img/image8.jpg",
            isLimited: false
        }];
    };

    product.getOffers = function() {
        /*var promise = $http.get('http://cliffton.xyz/api/v1/offers/').then(function(response) {
           return response.data;
        }, function (error) {
          //error
        })
        return promise;*/
        return [{
            pos: 0,
            name: 'offer_1.jpg'
        }, {
            pos: 1,
            name: 'offer_2.jpg'
        }, {
            pos: 2,
            name: 'offer_3.png'
        }, {
            pos: 3,
            name: 'offer_4.jpg'
        }];
    };
    return product;
});