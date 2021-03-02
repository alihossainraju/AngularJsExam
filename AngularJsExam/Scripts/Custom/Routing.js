

angular.module('my-tourists', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                redirectTo: function () {
                    return '/home';
                }
            })
            .when('/home', {
                templateUrl: '/Template/Home.html',
                controller: 'HomeController'
            })
            .when('/about', {
                templateUrl: '/Template/About.html',
                controller: 'AboutController'
            })
            .when('/order/:id', {
                templateUrl: '/Template/Order.html',
                controller: 'OrderController'
            })
            .otherwise({
                templateUrl: '/Template/Error.html',
                controller: 'ErrorController'
            })

        $locationProvider.html5Mode(false).hashPrefix('!');
    })
    .controller('HomeController', function ($scope) {
        $scope.Message = "This is HOME page";
    })
    .controller('AboutController', function ($scope) {
        $scope.Message = "This is ABOUT page";
    })
    .controller('OrderController', function ($scope, $routeParams) {        
        $scope.Message = "This is ORDER Page with query string id value " + $routeParams.id;
    })
    .controller('ErrorController', function ($scope) {
        $scope.Message = "404 Not Found!";
    });
