angular.module('myApp.services.filterSortByData', [])

.factory('FilterSortByData', function($http) {
    var filterSortBy = {};

    filterSortBy.categories = function() {
        /*          var promise = $http.get('http://cliffton.xyz/api/v1/filterSortByCategories').then(function(response) {
                       return response.data;
                    }, function (error) {
                      //error
                    })
                    return promise;*/
        return ['Choker', 'Delicate Chain', 'Bohemian'];
    };

    filterSortBy.attribute = function() {
        /*          var promise = $http.get('http://cliffton.xyz/api/v1/filterSortByAttribute').then(function(response) {
                       return response.data;
                    }, function (error) {
                      //error
                    })
                    return promise;*/
        return ['Price', 'Shortlisted', 'Recent', 'On Discount'];
    };
    return filterSortBy;
});