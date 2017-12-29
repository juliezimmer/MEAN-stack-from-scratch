/*This is where all the Angular code goes.
Start by creating an IIFE-immediately invoked function expression so nothing is leaked to the global scope. */

(function(){
    var app = angular.module('app', ['ngRoute']);

    app.controller('HomeController', function($http){
        var vm = this;
        
        vm.users = []; //a user's array to hold the users
        
        /* to get all the users to put on the DOM in home.html */
        vm.getUsers = function(){
            //call the http.get request
            $http.get('/api/users',).then(function(response){
                vm.users = response.data;
            })
        } 
        vm.getUsers();   
    
    });

    //configure the routes for the client/user/browser
    //$routeProvider service is coming from ngRoute
    //$routeProvider has a method on it called .when, which is used in app.config
    //$routeProvider accepts a route and then an object 
    app.config(function($routeProvider){
        $routeProvider.when('/', {
            controller: 'HomeController',
            controllerAs: 'vm',
            templateUrl: './home.html'
        });
        $routeProvider.otherwise('/'); // if the route doesn't match any of these, go back to the root of the application.
    });
    //wire up the controller
    

});