angular.module('myApp.common.modal', []).factory("modalBeanFactory", function modalBeanFactory() {
    var properties = {
        "id": undefined,
        "isShown": false,
        "headerContent": undefined,
        "bodyContent": undefined,
        "footerContent": undefined,
        "isFooterShown": false,
    };
    var bean = {
        /**
         * Function to set id
         * @param {string} id - id
         * @returns {Object} - the object on which the method was invoked. Returned to facilitate method chaining
         */
        setId: function (id) {
            properties.id = id;
            return bean;
        },

        /**
         * Function to return id
         * @returns {string} - id
         */
        getId: function () {
            return properties.id;
        },

        /**
         * This function will set the isShown attribute of modal component
         * @param {boolean} isShown - true/false
         */
        setShown: function setShown(isShown) {
            properties.isShown = isShown;
            return bean;
        },

        /**
         * This function will return the boolean value indicating whether the component is shown or no.
         * @returns {boolean}
         */
        isShown: function isShown() {
            return properties.isShown;
        },

        /**
         * Function to set label
         * @param {string} label - label
         * @returns {Object} - the object on which the method was invoked. Returned to facilitate method chaining
         */
        setHeaderContent: function setHeaderContent(headerContent) {
            properties.headerContent = headerContent;
            return bean;
        },

        /**
         * Function to return label
         * @returns {string} - label
         */
        getHeaderContent: function getHeaderContent() {
            return properties.headerContent;
        },

        /**
         * Function to set label
         * @param {string} label - label
         * @returns {Object} - the object on which the method was invoked. Returned to facilitate method chaining
         */
        setBodyContent: function setBodyContent(bodyContent) {
            properties.bodyContent = bodyContent;
            return bean;
        },

        /**
         * Function to return label
         * @returns {string} - label
         */
        getBodyContent: function getBodyContent() {
            return properties.bodyContent;
        },

        /**
         * This function will set the isFooterShown attribute of modal component
         * @param {boolean} isFooterShown - true/false
         */
        setFooterShown: function setFooterShown(isFooterShown) {
            properties.isFooterShown = isFooterShown;
            return bean;
        },

        /**
         * This function will return the boolean value indicating whether the component is shown or no.
         * @returns {boolean}
         */
        isFooterShown: function isFooterShown() {
            return properties.isFooterShown;
        }
    };
    return bean;

}).directive('modal', function () {
    return {
      templateUrl: "common/modal/modalTemplate.html",
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:{
        config: "=properties"
      },
      link: function postLink(scope, element, attrs) {
        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.config.setShown(true);
          });
        });

        $(element).on('hidden.bs.modal', function(){
            scope.$apply(function(){
                scope.config.setShown(false);
            });
        });

        scope.$watch(function watchOnShown() {
            return scope.config.isShown();
        }, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });
      }
    };
});