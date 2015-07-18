/* WebChat Angular Module - Parent Module */

angular.module('AngularPlayground',['ngRoute', 'ngResource', 'homepage', 'secondPage'])
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