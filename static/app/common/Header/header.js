angular.module('myApp.common.header', [])
.directive('headerTpl', function() {
  return {
    templateUrl: 'common/header/headerTemplate.html'
  };
});