"use strict";
//Primitivo null
var nullVar;
nullVar = null;
//nullVar = undefined;      //No es posible la asignación para el tipo null.
var otherNull = null; //Si no se declara de foma el explicita el tipo null no se reconoce y la variable queda definida como any.
otherNull = undefined;
otherNull = "something";
//Primitivo undefined
var undefinedVar = undefined;
//undefinedVar = null;      //No es posible la asignación para el tipo undefined.
var otherUndefined = undefined;
otherUndefined = 1; //Si no se declara de foma el explicita el tipo undefined no se reconoce y la variable queda definida como any.
//Null y undefined como subtipos
var albumName;
//albumName = undefined;    //El useStrict del compilador impide que esta asignación sea posible.
//Con la flag --strictNUllChecks el compilador nos identifica todas las variables con valor null en un archivo TS.
