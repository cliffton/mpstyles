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
	  when('/product-description', {
        templateUrl: 'productDescription/productDescription.html',
        controller: 'productDescriptionCtrl'
      }).
	  otherwise({                      
            template: 'Page not found'   
      });
}]);
