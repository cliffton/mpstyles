'use strict';

angular.module('myApp.productDescription', [])

.controller('productDescriptionCtrl', function($scope) {

$scope.home = "Home";

$scope.productDetails = {
    	    id: 1,
    	    name: "Beeded chain",
    	    productCode: "ABC123",
    	    price: 250,
    	    sourcePath: "content/img/image5.jpg",
    	    isLimited: false,
    	    stockQuantity: 25,
    	    description: ""
};

});