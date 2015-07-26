(function(){
    'use strict';
    
    angular.module('homepage') //reference the already defined module. ***no ,[] in definition for something already created
    .factory('HomePageModel', ['$resource', function($resource) {
            /* 
             * $resource creates a resource object that can communicate with our java
             * backend using an http request in this case a GET
             */  
            var HomePageModelResource = $resource('/AngularPlayground/api/HomePage',{}, {
                /* 
                 * getSting() will be the method we will call to perfom the GET
                 * transformResponse will get the data from the service and process
                 * it
                 */
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
        return HomePageModelResource; //return all contents of .factory as an object for use within the program
    }]);
    
})();