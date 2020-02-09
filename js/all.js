var app = angular.module('demo', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "/home.html",
                controller: "homeController"
            })
            .when("/courses", {
                templateUrl: "/courses.html",
                controller: "coursesController"
            })
            .when("/students", {
                templateUrl: "/students.html",
                controller: "studentsController"
            })
    })


    .controller('homeController', function ($scope) {
        $scope.message = "Home page";
    })
    .controller('coursesController', function ($scope) {
        $scope.courses = ["c sharp", "vb.net", "c language", "javascript", "angular js"];
    })
    .controller('studentsController', function ($scope) {
        $scope.students = [
            {
                names: ["mahesh", "suresh", "david", "clavin", "sara"]
            }
        ];
    });