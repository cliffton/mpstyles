'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngCookies',
  'myApp.home',
  'myApp.login',
  'myApp.register',
  'myApp.aboutUs',
  'myApp.blogs',
  'myApp.contactUs',
  'myApp.deliveryReturns',
  'myApp.faqs',
  'myApp.productDescription',
  'myApp.cart',
  'myApp.version'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'login/login.html',
        controller: 'loginCtrl'
      }).
      when('/register', {
        templateUrl: 'register/register.html',
        controller: 'registerCtrl'
      }).
      when('/home', {
        templateUrl: 'home/home.html',
        controller: 'homeCtrl'
      }).
      when('/secure/:userId/home', {
        templateUrl: 'home/home.html',
        controller: 'homeCtrl'
      }).
      when('/secure/:userId/cart', {
          templateUrl: 'cart/cart.html',
          controller: 'cartCtrl'
      }).
	  when('/about-us', {
        templateUrl: 'aboutUs/aboutUs.html',
        controller: 'aboutUsCtrl'
      }).
	  when('/blogs', {
        templateUrl: 'blogs/blogs.html',
        controller: 'blogsCtrl'
      }).
	  when('/contact-us', {
        templateUrl: 'contactUs/contactUs.html',
        controller: 'contactUsCtrl'
      }).
	  when('/delivery-returns', {
        templateUrl: 'deliveryReturns/deliveryReturns.html',
        controller: 'deliveryReturnsCtrl'
      }).
	  when('/faqs', {
        templateUrl: 'faqs/faqs.html',
        controller: 'faqsCtrl'
      }).
	  when('/secure/:productId/product-description', {
        templateUrl: 'productDescription/productDescription.html',
        controller: 'productDescriptionCtrl'
      })
	  .otherwise({ redirectTo: '/home' });
}])
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if user is not logged in and trying to access cart or product description page
               var isSecured = next.indexOf('/secure') !== -1;
            if (!$rootScope.globals.currentUser && isSecured) {
                /* save the user's location to take him back to the same page after he has logged-in */
                $rootScope.savedLocation = $location.url();
                $location.path('/login');
            }
        });
    }]);
