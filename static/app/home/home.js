'use strict';

angular.module('myApp.home', ['myApp.services.authentication'])

.controller('homeCtrl', function($scope, $routeParams, AuthenticationService) {

	// header section
	var tabsData =  [{name:"Accessories", id:1, link:"home"},
	{name:"Bags & Clutch", id:2, link:"home"},
	{name:"Watches", id:3, link:"home"},
	{name:"Shoes", id:4, link:"home"},
	{name:"Offer Zone", id:5, link:"home"}
	];

    $scope.loggedInUser = angular.isDefined($routeParams.userId) || false;

	$scope.headerTabs = tabsData;

	$scope.userInfo = "Hello Neville !!";
  
	$scope.login = {
		label: "LOGIN / SIGN UP"
	};

	$scope.logout = function(){
	    // logging out and clearing cookie
	    AuthenticationService.clearCredentials();
	    alert('You have logout successfully!');
	};

	$scope.limitedStock = "Limited Stock";
	
	$scope.cartCount = 0;
	$scope.selected = 0;

	$scope.select = function(index) {
		$scope.selected = index; 
	};

	$scope.shipping = {
		text:"Free Shipping on ALL orders !",
		info:" *T & C apply",
	};
	
	$scope.toggleMenuFlag = true;
	
	// on smaller device
	
	var infoTabs = [{name:"About Us", id:1, link:"about-us"},
	{name:"Blogs", id:2, link:"blogs"},
	{name:"Contact Us", id:3, link:"contact-us"},
	{name:"Delivery & Returns", id:4, link:"delivery-returns"},
	{name:"FAQ's", id:5, link:"faqs"}
	];
	
	$scope.infoTabs = infoTabs;
	
	$scope.brandName = "MANPRIYA STYLES";

	$scope.products =  [{
        id: 1,
        likes: 14,
        price: 250,
        sourcePath: "content/img/image9.jpg",
        isCombo: 0,
        isLimited: false
      },
      {  id: 2,
         likes: 5,
         price: 385,
         sourcePath: "content/img/image02.jpg",
         isCombo: 0,
         isLimited: true
      },
      {  id: 3,
         likes: 3,
         price: 70,
         sourcePath: "content/img/image03.jpg",
         isCombo: 0,
         isLimited: false
      },
      {
        id: 4,
        likes: 4,
        price: 290,
        sourcePath: "content/img/image14.jpg",
        isCombo: 0,
        isLimited: false
      }];

      $scope.products1 = [{
          id: 5,
          likes: 10,
          price: 120,
          sourcePath: "content/img/image17.jpg",
          isCombo: 0,
          isLimited: true
       },
       {  id: 6,
          likes: 14,
          price: 250,
          sourcePath: "content/img/image18.jpg",
          isCombo: 0,
          isLimited: false
       },
       {  id: 7,
          likes: 32,
          price: 980,
          sourcePath: "content/img/image6.jpg",
          isCombo: 1,
          isLimited: false
       }];

       $scope.products2 = [{
         id: 5,
         likes: 10,
         price: 120,
         sourcePath: "content/img/image7.jpg",
         isCombo: 1,
         isLimited: false
      },
      {  id: 6,
         likes: 14,
         price: 250,
         sourcePath: "content/img/image4.jpg",
         isCombo: 0,
         isLimited: true
      },
      {  id: 7,
         likes: 32,
         price: 980,
         sourcePath: "content/img/image8.jpg",
         isCombo: 0,
         isLimited: false
      }];
});