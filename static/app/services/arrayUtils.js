angular.module('myApp.services.arrayUtils', [])

.factory('ArrayUtils', function () {
        var transformArr = {};

        transformArr.getDataInChunks = function (arr, len) {
           var chunks = [],
               i = 0,
               n = arr.length;

           while (i < n) {
             chunks.push(arr.slice(i, i += len));
           }

           return chunks;
         }

        return transformArr;
    });