'use strict';

angular.module('myApp.home', [
        'myApp.services.authentication',
        'myApp.services.userData',
        'myApp.services.tabsData',
        'myApp.services.filterSortByData',
        'myApp.services.productData',
        'myApp.services.arrayUtils'
    ])
    .filter('selectedOptions', function() {
        return function(selectedOptions, types) {
            return selectedOptions.filter(function(selectedOptions) {
                var arr = [];
                for (var key in types) {
                    if (types.hasOwnProperty(key) && types[key] !== null && types[key] !== "") {
                        arr.push(types[key]);
                    }
                }
                if (arr.length === 0 || arr.indexOf(selectedOptions.type) != -1) {
                    return true;
                }
                return false;
            });
        };
    })
    .controller('homeCtrl', function($rootScope, $scope, $anchorScroll, AuthenticationService, UserData, TabsData, FilterSortByData, ProductData, ArrayUtils) {
        // show and hide login/logoff alert on page
        $scope.showAlert = true;

        // check if user info is present in cookie and set log in message
        $scope.loggedIn = {
            'value': angular.isDefined($rootScope.globals.currentUser),
            'message': "Hope you have a wonderful experience shopping with us."
        };

        // when user logs of
        $scope.loggedOff = {
            'logout': function() {
                // logging out and clearing cookie
                AuthenticationService.clearCredentials();
                alert('You have logout successfully!');
            },
            'message': "Kindly register or login to shop with us.",
            'label': "LOGIN / SIGN UP"
        };

        // getting logged in user info
        $scope.userInfo = $scope.loggedIn.value ? UserData.getInfo($rootScope.globals.currentUser.authdata) : {};

        // header tabs
        $scope.headerTabs = TabsData.getHeader() || [];

        // footer tabs
        $scope.footerTabs = TabsData.getFooter() || {};

        // filter data based on categories
        $scope.filterBy = {
            categories: FilterSortByData.categories() || [],
            selected: {},
            reset: function() {
                $scope.filterBy.selected = {};
            }
        };

        // sort data based on attributes
        $scope.sortBy = {
            attributes: FilterSortByData.attribute() || [],
            value: ""
        };

        // get list of products
        var data = ProductData.getList();

        // creating data chunks as per UI
        $scope.productList = ArrayUtils.getDataInChunks(data, 4);

        // page text and labels
        $scope.pageText = {
            brandName: "Manpriya Styles",
            limitedStock: "Limited Stock",
            shipping: "Free Shipping on ALL orders !",
            seeMore: "See More"
        };

        // go to top
        $scope.goTop = function goTop() {
            $anchorScroll();
        };

        // nav tabs to set active
        $scope.selected = 0;
        $scope.select = function(index) {
            $scope.selected = index;
        };

        // price range
        $scope.price = {
            midRange: 1000,
            priceMin: 0,
            priceMax: 2000,
            reset: function() {
                $scope.price.midRange = 1000;
            }
        };
        // show and hide menu button on toggle
        $scope.toggleMenuFlag = true;

        // show and hide filter section on toggle
        $scope.toggleFilterFlag = true;

        // the number of rows to be shown in the home page
        $scope.offset = 3;

        // image path
        $scope.imgSourcePath = "content/img";

        // section of displaying latest offers or ads
        $scope.offers = ProductData.getOffers() || []

        // by default
        var currentPos = 0;
        $scope.currentOffer = $scope.offers[currentPos].name;

        // select randomly
        $scope.selectOffer = function(indexPos) {
            currentPos = indexPos;
            $scope.currentOffer = $scope.offers[currentPos].name;
        };

        // go back
        $scope.previousSel = function() {
            currentPos = (currentPos == 0) ? $scope.offers.length - 1 : currentPos - 1;
            $scope.currentOffer = $scope.offers[currentPos].name;
        };

        // go to next
        $scope.nextSel = function() {
            currentPos = (currentPos == $scope.offers.length - 1) ? 0 : currentPos + 1;
            $scope.currentOffer = $scope.offers[currentPos].name;
        };

        // subscription for updates
        $scope.subscribe = function() {
            AuthenticationService.subscribe($scope.subscribedEmailId, function(response) {
                if (response === 'valid') {
                    alert("You have subscribed to our newsletter successfully");
                } else {
                    alert("Kindly enter a valid email id");
                }
            });
        };
    });