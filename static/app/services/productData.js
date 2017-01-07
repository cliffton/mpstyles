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
            "id": 1,
            "url": "http://cliffton.xyz/api/products/1/",
            "title": "Beeded chain",
            "type": "Necklace",
            "price": 1388,
            "availability": "Sold Out",
            "categories": ["Women"],
            "shortlisted": false,
            "src": "http://cliffton.xyz/media/images/products/2016/10/image0.jpg"
        }, {
            "id": 2,
            "url": "http://cliffton.xyz/api/products/2/",
            "title": "Stylish Choker",
            "type": "Choker",
            "price": 1100,
            "availability": "In Stock",
            "categories": ["Women"],
            "shortlisted": false,
            "src": "http://cliffton.xyz/media/images/products/2016/10/image1.jpg"
        }, {
            "id": 3,
            "url": "http://cliffton.xyz/api/products/3/",
            "title": "Diamond Ring",
            "type": "Rings",
            "price": 75,
            "availability": "In Stock",
            "categories": ["Women"],
            "shortlisted": false,
            "src": "http://cliffton.xyz/media/images/products/2016/10/image2.jpg"
        }, {
            "id": 4,
            "url": "http://cliffton.xyz/api/products/4/",
            "title": "Colorful Bangles",
            "type": "Bangles",
            "price": 95,
            "availability": "In Stock",
            "categories": ["Women"],
            "shortlisted": false,
            "src": "http://cliffton.xyz/media/images/products/2016/10/image3.jpg"
        }, {
            "id": 5,
            "url": "http://cliffton.xyz/api/products/5/",
            "title": "Pattern Chain",
            "type": "Necklace",
            "price": 95,
            "availability": "Limited",
            "categories": ["Women"],
            "shortlisted": false,
            "src": "http://cliffton.xyz/media/images/products/2016/10/image4.jpg"
        }, {
            "id": 6,
            "url": "http://cliffton.xyz/api/products/6/",
            "title": "Pattern Chain",
            "type": "Necklace",
            "price": 175,
            "availability": "In Stock",
            "categories": ["Women"],
            "shortlisted": false,
            "src": "http://cliffton.xyz/media/images/products/2016/10/image5.jpg"
        }, {
            "id": 7,
            "url": "http://cliffton.xyz/api/products/7/",
            "title": "Silver plated Choker",
            "type": "Choker",
            "price": 350,
            "availability": "Limited",
            "categories": ["Women"],
            "shortlisted": false,
            "src": "http://cliffton.xyz/media/images/products/2016/10/image6.jpg"
        }, {
            "id": 8,
            "url": "http://cliffton.xyz/api/products/8/",
            "title": "Black lace Bohemian",
            "type": "Bohemian",
            "price": 500,
            "availability": "Sold Out",
            "categories": ["Women"],
            "shortlisted": false,
            "src": "http://cliffton.xyz/media/images/products/2016/10/image7.jpg"
        }, {
            "id": 9,
            "url": "http://cliffton.xyz/api/products/9/",
            "title": "Black lace Bohemian",
            "type": "Bohemian",
            "price": 500,
            "availability": "Sold Out",
            "categories": ["Women"],
            "shortlisted": false,
            "src": "http://cliffton.xyz/media/images/products/2016/10/image8.jpg"
        }, {
            "id": 10,
            "url": "http://cliffton.xyz/api/products/10/",
            "title": "Black lace Bohemian",
            "type": "Bohemian",
            "price": 500,
            "availability": "Sold Out",
            "categories": ["Women"],
            "shortlisted": false,
            "src": "http://cliffton.xyz/media/images/products/2016/10/image9.jpg"
        }, {
            "id": 11,
            "url": "http://cliffton.xyz/api/products/11/",
            "title": "Ring",
            "type": "Ring",
            "price": 50,
            "availability": "In stock",
            "categories": ["Women"],
            "shortlisted": false,
            "src": "http://cliffton.xyz/media/images/products/2016/10/image10.jpg"
        }, {
            "id": 12,
            "url": "http://cliffton.xyz/api/products/12/",
            "title": "Black lace Bohemian",
            "type": "Bohemian",
            "price": 500,
            "availability": "Limited",
            "categories": ["Women"],
            "shortlisted": false,
            "src": "http://cliffton.xyz/media/images/products/2016/10/image12.jpg"
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