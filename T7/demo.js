/// <reference path="Scripts/angular.js" />

//import { error } from "jquery";
//var MyApp = angular.module("MyApp", ['ngRoute', 'AlumnoService']);
var MyApp = angular.module("MyApp", ['ngRoute']);

MyApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/Añadir', {
                templateUrl: 'Vista/añadir.html',
                controller: 'AddController'
            })
            .when('/Home', {
                templateUrl: 'Vista/home.html',
                controller: 'HomeController'
            })
            .otherwise({
                redirectTo: '/Home'
            });

    }]);
    

MyApp.controller("AddController", function ($scope, AlumApi) {
   // $scope.message = "en Añadir";
    /*$scope.addAlumno = function () {
        var alumniToAdd = {
            'Nombre': $scope.name,
            'Edad': $scope.age,
            'Carrera': $scope.carrera,
            'Promedio': $scope.calif
        };*/
        AlumApi.AddAlumno()
            .success(function (response) {
                alert("alumno añadido");
                /*$scope.name = undefined;
                $scope.age = undefined;
                $scope.carrera = undefined;
                $scope.calif = undefined;*/
            }).
            error(function (response) {
                alert("error al añadir");
            });
    }

});


MyApp.controller("HomeController", function ($scope, AlumApi) {
    //$scope.message = "en Home";
    /*
    function getAlumnos() {
        AlumApi.getAlumnos().success(function (almns) {
            $scope.almns = almns;
        })
            .error(function (error) {
                $scope.status = 'Unable to load almns data' + error.message;
            })
    }*/

});
