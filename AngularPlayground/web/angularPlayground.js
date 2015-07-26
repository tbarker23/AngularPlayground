/* WebChat Angular Module - Parent Module */


/*this is the module declaration.  this describes the parent app (found in ng-app=""
 * in the index.html file. items in the [] are dependencies and are required 
 * for functionality in the app.  they are all modules described in .js files
 */
angular.module('AngularPlayground',['ngRoute', 'ngResource', 'homepage', 'secondPage'])
        /*
         * .config is how we configure the routeProvider to handle differnt urls
         * passed in after the base url eg /angularPlayground/yourpage will 
         * map to a template url and controller provided below
         */
       .config(['$routeProvider', function ($routeProvider) {
               $routeProvider
                        .when("/", {
                            templateUrl: 'app/homepage/homepage.html',
                            controller: 'homepageController',
                            controllerAs: 'vm'
                         })
                        .when("/secondPage", {
                            templateUrl: 'app/secondpage/secondpage.html',
                            controller: 'secondPageController',
                            controllerAs: 'vm'
                         })
                        .otherwise("/404", {
                            template: "<span> 404 page not found</span>"
                        });
        }]);