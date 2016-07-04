'use strict';

angular.module('myApp.home', [])

.controller('homeCtrl', function($scope) {

	// header section
	var tabsData =  [{name:"Accessories", id:1, link:"home"},
	{name:"Bags & Clutch", id:2, link:"home"},
	{name:"Watches", id:3, link:"home"},
	{name:"Shoes", id:4, link:"home"},
	{name:"Offer Zone", id:5, link:"home"}
	];

	$scope.headerTabs = tabsData;
  
	$scope.login = {
		label: "LOGIN / SIGN UP"
	};
	
	$scope.cartCount = 3;
	$scope.selected = 0;

	$scope.select= function(index) {
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
	

});