(function(){
     'use strict';
    
    angular.module('homepage',[])
            .controller('homepageController', homepageController);
    
    homepageController.$inject = ['$scope','HomePageModel'];
    
    function homepageController($scope, HomePageModel) {
        console.log('hompagectrl');
        var vm = this;
        
        vm.homepageJSONObject = HomePageModel.getString();
        
        vm.controllerName= 'homepageController';

        return vm;
    }    
})();