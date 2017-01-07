angular.module('myApp.common.footer', [])
.directive('footerTpl', function() {
  return {
    templateUrl: 'common/footer/footerTemplate.html'
  };
});