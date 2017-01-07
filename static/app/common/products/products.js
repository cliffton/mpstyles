angular.module('myApp.common.products', [])
.directive('productsTpl', function() {
  return {
    templateUrl: 'common/products/productsTemplate.html'
  };
});