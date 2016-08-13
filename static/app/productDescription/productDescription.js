'use strict';

angular.module('myApp.productDescription', [])

.controller('productDescriptionCtrl', function($scope) {

$scope.home = "Home";

$scope.productDetails = {
    	    id: 1,
    	    name: "Beeded chain",
    	    productCode: "ABC123",
    	    price: 250,
    	    color: "Grey / Black",
    	    inStock: 25,
    	    warranty: "not applicable",
    	    COD: "available",
    	    size: "standard",
    	    sourcePath: "content/img/image5.jpg",
    	    isLimited: false,
    	    stockQuantity: 25,
    	    description: "Collect all of our hand-thrown vessels for endless arrangement possibilities, whether filled with flowers or dressed with beads."
};

$scope.availableColorOptions = [
  {id: '1', name: 'Black'},
  {id: '2', name: 'Grey'}
];

$scope.selectedOption = $scope.availableColorOptions[0];

$scope.paymentMode = {
        type: 'online_banking'
};
});