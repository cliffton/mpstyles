'use strict';

angular.module('myApp.home', ['myApp.services.authentication', 'myApp.services.arrayUtils'])
.filter('selectedOptions', function() {
    return function(selectedOptions, types) {
        return selectedOptions.filter(function(selectedOptions) {
            var arr = [];
            for(var key in types) {
                if (types.hasOwnProperty(key) && types[key] !== null && types[key] !== "") {
                    arr.push(types[key]);
                }
            }
            if (arr.length ===0 || arr.indexOf(selectedOptions.type) != -1) {
                return true;
            }
            return false;
        });
    };
})
.controller('homeCtrl', function($scope, $routeParams, $anchorScroll, AuthenticationService, ArrayUtils) {
	// header section
	var tabsData =  [{name:"Accessories", id:1, link:"home"},
	{name:"Bags & Clutch", id:2, link:"home"},
	{name:"Watches", id:3, link:"home"},
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
	
	$scope.cartCount = 3;
	$scope.selected = 0;

    $scope.priceRange = 1000;
    $scope.priceMin = 0;
    $scope.priceMax = 2000;

    $scope.resetPriceRange = function(){
        $scope.priceRange = 1000;
    };

	$scope.select = function(index) {
		$scope.selected = index; 
	};

	$scope.shipping = {
		text:"Free Shipping on ALL orders !",
		info:"*T & C"
	};

	$scope.sortByValue = "";

	$scope.seeMore = "See More";
	
	$scope.toggleMenuFlag = true;

	$scope.toggleFilterFlag = true;
	
	// on smaller device
	
	var customerServices = [
	{name:"Delivery & Returns", id:1, link:"customer-services"},
	{name:"Cancellations", id:2, link:"customer-services"},
	{name:"FAQ's", id:3, link:"customer-services"}
	];

	var aboutUs = [
    {name:"Who are we", id:1, link:"about-us"},
    {name:"Happy Customers", id:2, link:"about-us"},
    {name:"Contact Us", id:3, link:"about-us"}
    ];

    var policies = [
    {name:"Shipping Policy", id:1, link:"policies"},
    {name:"Discounting Policies", id:2, link:"policies"},
    {name:"Terms & Conditions", id:3, link:"policies"},
    ];
	
	$scope.footerTabs = {};

	$scope.footerTabs['customerServices'] = customerServices;
	$scope.footerTabs['aboutUs'] = aboutUs;
	$scope.footerTabs['policies'] = policies;

	$scope.brandName = "MANPRIYA STYLES";

    $scope.offset = 3;

    $scope.goTop = function goTop(){
        $anchorScroll();
    };

    $scope.categories = ['Choker','Bracelets','Rings','Bangles','Necklace'];

    $scope.filterCategory = {
        type: {}
    };

    $scope.sortBy = ['Price','Shortlisted','Recent','On Discount'];

    $scope.filterSortBy = {
        sort: {}
    };

    $scope.resetFilterCategory = function() {
        $scope.filterCategory.type = {};
    };

    var data = [ {
                   	    id: 5,
                   	    likes: 10,
                   	    isLiked: true,
                   	    name: "Simple Braclet",
                   	    productCode: "A123",
                   	    type : 'Choker',
                   	    price: 220,
                   	    sourcePath: "content/img/image17.jpg",
                   	    isCombo: 0,
                   	    isLimited: true
                   	}, {
                   	    id: 6,
                   	    likes: 14,
                   	    isLiked: false,
                   	    name: "Beeded chain",
                   	    productCode: "C123",
                   	    type : 'Choker',
                   	    price: 250,
                   	    sourcePath: "content/img/image18.jpg",
                   	    isCombo: 0,
                   	    isLimited: false
                   	}, {
                   	    id: 7,
                   	    likes: 32,
                   	    isLiked: false,
                   	    name: "Chain",
                   	    type: "Choker",
                   	    productCode: "D123",
                   	    type : 'Choker',
                   	    price: 980,
                   	    sourcePath: "content/img/image34.jpg",
                   	    isCombo: 0,
                   	    isLimited: false
                   	}, {
                   	    id: 5,
                   	    likes: 10,
                   	    isLiked: false,
                   	    name: "Chain",
                   	    type : 'Rings',
                   	    price: 320,
                   	    sourcePath: "content/img/bangle1.jpg",
                   	    isCombo: 0,
                   	    isLimited: false
                   	}, {
                   	    id: 6,
                   	    likes: 14,
                   	    isLiked: false,
                   	    name: "Chain",
                   	    type : 'Bangles',
                   	    price: 250,
                   	    sourcePath: "content/img/bangle2.jpg",
                   	    isCombo: 0,
                   	    isLimited: true
                   	}, {
                   	    id: 7,
                   	    likes: 32,
                   	    isLiked: true,
                   	    type: 'Rings',
                   	    price: 980,
                   	    sourcePath: "content/img/image35.jpg",
                   	    isCombo: 0,
                   	    isLimited: false
                   	}, {
                   	    id: 1,
                   	    likes: 14,
                   	    isLiked: false,
                   	    name: "Chain",
                   	    type: 'Rings',
                   	    price: 270,
                   	    sourcePath: "content/img/image15.jpg",
                   	    isCombo: 0,
                   	    isLimited: false
                   	}, {
                                          	    id: 1,
                                          	    likes: 14,
                                          	    name: "Beeded chain",
                                          	    productCode: "ABC123",
                                          	    type: 'Bangles',
                                          	    isLiked: false,
                                          	    price: 250,
                                          	    sourcePath: "content/img/image9.jpg",
                                          	    isCombo: 0,
                                          	    isLimited: false
                                          	}, {
                                          	    id: 2,
                                          	    likes: 5,
                                          	    isLiked: true,
                                          	    name: "Pattern Chain",
                                          	    type: 'Bangles',
                                          	    productCode: "PQR123",
                                          	    price: 385,
                                          	    sourcePath: "content/img/image02.jpg",
                                          	    isCombo: 0,
                                          	    isLimited: true
                                          	}, {
                                          	    id: 3,
                                          	    likes: 3,
                                          	    isLiked: false,
                                          	    name: "Elegant Chain",
                                          	    type: 'Bangles',
                                          	    price: 210,
                                          	    sourcePath: "content/img/image03.jpg",
                                          	    isCombo: 0,
                                          	    isLimited: false
                                          	}, {
                                          	    id: 4,
                                          	    likes: 4,
                                          	    isLiked: false,
                                          	    name: "Simple Braclet",
                                          	    type: 'Bracelets',
                                          	    productCode: "XYZ123",
                                          	    price: 290,
                                          	    sourcePath: "content/img/image14.jpg",
                                          	    isCombo: 0,
                                          	    isLimited: false
                                          	},{
                   	    id: 2,
                   	    likes: 9,
                   	    isLiked: true,
                   	    type: 'Bangles',
                   	    price: 685,
                   	    sourcePath: "content/img/image20.jpg",
                   	    isCombo: 0,
                   	    isLimited: true
                   	}, {
                   	    id: 3,
                   	    likes: 5,
                   	    isLiked: true,
                   	    price: 190,
                   	    type: 'Bangles',
                   	    sourcePath: "content/img/image26.jpg",
                   	    isCombo: 0,
                   	    isLimited: false
                   	}, {
                   	    id: 4,
                   	    likes: 43,
                   	    isLiked: false,
                   	    name: "Chain",
                   	    type: 'Bracelets',
                   	    price: 95,
                   	    sourcePath: "content/img/image23.jpg",
                   	    isCombo: 0,
                   	    isLimited: false
                   	}, {
                   	    id: 5,
                   	    likes: 10,
                   	    isLiked: true,
                   	    name: "Chain",
                   	    type: 'Bracelets',
                   	    price: 120,
                   	    sourcePath: "content/img/image24.jpg",
                   	    isCombo: 0,
                   	    isLimited: true
                   	}, {
                   	    id: 6,
                   	    likes: 14,
                   	    isLiked: false,
                   	    name: "Chain",
                   	    type: 'Bracelets',
                   	    price: 250,
                   	    sourcePath: "content/img/image11.jpg",
                   	    isCombo: 0,
                   	    isLimited: false
                   	}, {
                   	    id: 7,
                   	    likes: 32,
                   	    isLiked: false,
                   	    name: "Chain",
                   	    type: 'Bracelets',
                   	    price: 980,
                   	    sourcePath: "content/img/image1.png",
                   	    isCombo: 0,
                   	    isLimited: false
                   	}, {
                   	    id: 5,
                   	    likes: 10,
                   	    isLiked: false,
                   	    name: "Chain",
                   	    type: 'Necklace',
                   	    price: 120,
                   	    sourcePath: "content/img/image36.jpg",
                   	    isCombo: 0,
                   	    isLimited: false
                   	}, {
                   	    id: 6,
                   	    likes: 14,
                   	    isLiked: false,
                   	    name: "Chain",
                   	    type:'Necklace',
                   	    price: 250,
                   	    sourcePath: "content/img/image4.jpg",
                   	    isCombo: 0,
                   	    isLimited: true
                   	}, {
                   	    id: 7,
                   	    likes: 32,
                   	    isLiked: true,
                   	    name: "Chain",
                   	    type: 'Necklace',
                   	    price: 980,
                   	    sourcePath: "content/img/image8.jpg",
                   	    isCombo: 0,
                   	    isLimited: false
                   	}];

	$scope.productList = ArrayUtils.getDataInChunks(data, 4);

     $scope.imgSourcePath = "content/img";
     $scope.images = [
        {pos:0, name: 'offer_1.jpg'},
        {pos:1, name: 'offer_2.jpg'},
        {pos:2, name: 'offer_3.png'},
        {pos:3, name: 'offer_4.jpg'}
     ];

      // by default
      var currentPos = 0;
      $scope.currentImage = $scope.images[currentPos].name;

      $scope.selectOffer = function(indexPos){
         currentPos = indexPos;
         $scope.currentImage = $scope.images[currentPos].name;
      };

      $scope.previousSel = function () {
         currentPos = (currentPos == 0) ?  $scope.images.length - 1 : currentPos - 1;
         $scope.currentImage = $scope.images[currentPos].name;
      };

      $scope.nextSel = function () {
        currentPos = (currentPos == $scope.images.length-1) ?  0 : currentPos + 1;
        $scope.currentImage = $scope.images[currentPos].name;
      };

    $scope.loggedInMessage = "Hope you have a wonderful experience shopping with us";
    $scope.logoutMessage = "Kindly register or login to shop with us.";
    $scope.showAlert = true;
    $scope.subscribedEmailId = "";
});