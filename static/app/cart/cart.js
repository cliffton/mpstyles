angular.module('myApp.cart', [])

.controller('cartCtrl', function($scope) {

$scope.home = "Home";
$scope.cart = "Cart";
$scope.shopping_cart = "Shopping Cart";

$scope.items = [{id: 1, name: "Beeded chain", price: 250, quantity: 2}, {id: 2, name: "Choker", price: 172, quantity: 1}, {id: 3, name: "Bracelet", price: 550, quantity: 3}];

$scope.removeItem = function (indexPos){
};

$scope.total = function (){
    return $scope.items.length;
};

});