/* WebChat Angular Module - Parent Module */

angular.module('AngularPlayground',['ngRoute', 'ngResource', 'homepage'])
       .config(['$routeProvider', function ($routeProvider) {
               $routeProvider
               .when("/", {
                   templateUrl: 'app/homepage/homepage.html',
                   controller: 'homepageController',
                   controllerAs: 'vm'
                })
               .otherwise("/404", {
                    template: "<span> 404 page not found</span>"
                });
        }]);