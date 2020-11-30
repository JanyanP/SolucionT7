/// <reference path="cookies.js" />
/// <reference path="demo.js" />
/// <reference path="scripts/angular.js" />
var AlumnoService = angular.module('AlumnoService', []);

AlumnoService.factory('AlumApi', function () {
    //var urlBase = "https://localhost:44300/api";
    var AlumApi = {};
    /*AlumApi.getAlumnos = function () {
        //return $http.get(urlBase + '/Alumnos');

    };
    */
    AlumApi.AddAlumno = function () {
        //NINGUNO DE LOS MÉTODOS PARA LAS COOKIES FUNCIONÓ
            //cargarCookies();
        /*
        setCookie("nombreAlumno", alum.Nombre, 10);
        setCookie("edadAlumno", alum.Edad, 10);
        setCookie("carreraAlumno", alum.Carrera, 10);
        setCookie("promedioAlumno", alum.Promedio, 10);*/
        //return $http.post(urlBase + '/Alumnos/', alum);
    };



    return AlumApi;
});