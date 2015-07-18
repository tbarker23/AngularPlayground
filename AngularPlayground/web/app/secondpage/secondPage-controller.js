(function () {
    'use strict';
    
    angular.module('secondPage', [])    
            .controller('secondPageController', secondPageController);
    
    secondPageController.$inject = ['$scope', 'secondPageContentModel'];
    
    function secondPageController($scope, secondPageContentModel) {
        var vm = this;
        vm.controllerName = 'secondPageCtrl';
        
        vm.secondPageContent = secondPageContentModel.get();
        //TODO controller logic here
        return vm;
    }
    ;
    
})();