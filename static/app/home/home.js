'use strict';

angular.module('myApp.home', [
        'myApp.common.header',
        'myApp.common.footer',
        'myApp.common.products',
        'myApp.common.modal',
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
    .controller('homeCtrl', function($rootScope, $scope, $anchorScroll, AuthenticationService, UserData, TabsData, FilterSortByData, ProductData, ArrayUtils, modalBeanFactory) {
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
                $scope.loggedIn.value = false;
                alert('You have logout successfully!');
            },
            'message': "Kindly register or login to shop with us.",
            'label': "Sign In or Create an account"
        };

        $scope.modalContent = modalBeanFactory;
        $scope.modalContent.setId("header-modal").setHeaderContent("Coming Soon..!!").setBodyContent("You can checkout our accessories collection and some of our latest deals.");

        $scope.buttonClicked = "";

        $scope.ButtonClickMethod = function () {
                alert("your logic goes here");
        };

        // getting logged in user info
        $scope.userInfo = $scope.loggedIn.value ? UserData.getInfo($rootScope.globals.currentUser.authdata) : {};

        // header tabs
        $scope.headerTabs = TabsData.getHeader() || [];

        $scope.subHeaderTabs = TabsData.getSubHeader() || [];

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
        $scope.sortBy =  FilterSortByData.attribute() || [];

        $scope.productList = [];

        ProductData.getList().then(function(response){
            // creating data chunks as per UI
            $scope.productList = ArrayUtils.getDataInChunks(response.data, 4);
        });



        // page text and labels
        $scope.pageText = {
            brandName: "Manpriya Styles",
            shortlist: "shortlist",
            seeMore: "See More"
        };

        // go to top
        $scope.goTop = function goTop() {
            $anchorScroll();
        };

        // nav tabs to set active
        $scope.activated = 0;
        $scope.active = function(index) {
                    $scope.activated = index;
        };

        $scope.selected = 0;
        $scope.select = function select(index) {
            if(index > 0){
                $scope.modalContent.setShown(true);
            }
            $scope.selected = index;
        };

        /*// price range
        $scope.price = {
            midRange: 1000,
            priceMin: 0,
            priceMax: 2000,
            reset: function() {
                $scope.price.midRange = 1000;
            }
        };*/


        // show and hide menu button on toggle
        $scope.toggleMenuFlag = true;

        // show and hide filter section on toggle
        $scope.toggleFilterFlag = true;

        // the number of rows to be shown in the home page
        $scope.offset = 3;

        $scope.dataLoading = false;

        // image path
        $scope.imgSourcePath = "content/img";

        // section of displaying latest offers or ads
        $scope.offers = ProductData.getOffers() || []

        // by default
        var currentPos = 0;
        $scope.currentOffer = $scope.offers[currentPos].sourcePath;

        // select randomly
        $scope.selectOffer = function(indexPos) {
            currentPos = indexPos;
            $scope.currentOffer = $scope.offers[currentPos].sourcePath;
        };

        // go back
        $scope.previousSel = function() {
            currentPos = (currentPos == 0) ? $scope.offers.length - 1 : currentPos - 1;
            $scope.currentOffer = $scope.offers[currentPos].sourcePath;
        };

        // go to next
        $scope.nextSel = function() {
            currentPos = (currentPos == $scope.offers.length - 1) ? 0 : currentPos + 1;
            $scope.currentOffer = $scope.offers[currentPos].sourcePath;
        };

        // subscription for updates
        $scope.subscribe = function() {
            $scope.dataLoading = true;
            AuthenticationService.subscribe($scope.subscribedEmailId, function(response) {
            $scope.dataLoading = false;
                if (response.successMessage) {
                    alert(response.successMessage);
                } else {
                    alert(response.errorMessage || "Something is wrong at our end. Try again later.");
                }
            });
        };
    });