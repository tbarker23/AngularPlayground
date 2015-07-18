(function(){
    'use strict';
    
    angular.module('homepage')
    .factory('HomePageModel', ['$resource', function($resource) {
        var HomePageModelResource = $resource('/AngularPlayground/api/HomePage',{}, {
            getString: {
                method: 'GET',
                isArray: false,
                transformResponse: function(data, header) {
//                    console.log(data);
                    var wrapped = angular.fromJson(data);
                    return wrapped;
                }
            }
      
        }); 
        return HomePageModelResource;
    }]);
    
})();