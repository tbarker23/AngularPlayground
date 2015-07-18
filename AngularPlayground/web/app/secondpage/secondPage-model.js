(function () {
    'use strict';
    
    angular.module('secondPage')
            .factory('secondPageContentModel', ['$resource', function ($resource) {
                    var secondPageContentModelResource = $resource('/AngularPlayground/api/secondPageResource', {}, {
                        get: {
                            method: 'GET',
                            isArray: false,
                            transformResponse: function (data, header) {
                                var wrapped = angular.fromJson(data);
                                return wrapped;
                            }
                        },
                        post: {
                            method: 'POST',
                            isArray: false,
                        }
                        
                    }); 
                    return secondPageContentModelResource;
                }]);
    
})();