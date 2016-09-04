angular.module('myApp.services.tabsData', [])

.factory('TabsData', function($http) {
    var tab = {};

    tab.getHeader = function() {
        /*          var promise = $http.get('http://cliffton.xyz/api/v1/headerTab').then(function(response) {
                       return response.data;
                    }, function (error) {
                      //error
                    })
                    return promise;*/
        return [{
            name: "Accessories",
            id: 1,
            link: "home"
        }, {
            name: "Bags & Clutch",
            id: 2,
            link: "home"
        }, {
            name: "Watches",
            id: 3,
            link: "home"
        }, {
            name: "Offer Zone",
            id: 5,
            link: "home"
        }]
    };

    tab.getFooter = function() {
        /*          var promise = $http.get('http://cliffton.xyz/api/v1/footerTab').then(function(response) {
                       return response.data;
                    }, function (error) {
                      //error
                    })
                    return promise;*/
        var footerTabs = {};
        var customerServices = [{
            name: "Delivery & Returns",
            id: 1,
            link: "customer-services"
        }, {
            name: "Cancellations",
            id: 2,
            link: "customer-services"
        }, {
            name: "FAQ's",
            id: 3,
            link: "customer-services"
        }];

        var aboutUs = [{
            name: "Who are we",
            id: 1,
            link: "about-us"
        }, {
            name: "Happy Customers",
            id: 2,
            link: "about-us"
        }, {
            name: "Contact Us",
            id: 3,
            link: "about-us"
        }];

        var policies = [{
            name: "Shipping Policy",
            id: 1,
            link: "policies"
        }, {
            name: "Discounting Policies",
            id: 2,
            link: "policies"
        }, {
            name: "Terms & Conditions",
            id: 3,
            link: "policies"
        }, ];

        footerTabs['customerServices'] = customerServices;
        footerTabs['aboutUs'] = aboutUs;
        footerTabs['policies'] = policies;

        return footerTabs;
    };

    return tab;
});