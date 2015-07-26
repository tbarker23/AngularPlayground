(function(){
     'use strict'; //dont worry about this for now
    
    /* declare the module for each new component good practice */
    angular.module('homepage',[])
            .controller('homepageController', homepageController); //associate a controller with module via . operator how it is typed here is how it will be referenced throughout the project
    
    homepageController.$inject = ['$scope','HomePageModel'];  //Dependencies for the module '$scope' by defualt 'HomePageModel' communicates with our java back-end to get data.
    
    function homepageController($scope, HomePageModel) {
        var vm = this;  //vm used to reference the controller
        console.log('hompagectrl'); 
        
        
        vm.homepageJSONObject = HomePageModel.getString(); //use the HomePageModel to retrieve the data from java backend.  see homepage-model.js
        
        vm.controllerName= 'homepageController';

        return vm;
    }    
})();