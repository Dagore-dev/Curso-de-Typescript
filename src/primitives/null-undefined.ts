//Primitivo null

let nullVar: null;
nullVar = null;
//nullVar = undefined;      //No es posible la asignación para el tipo null.

let otherNull = null;       //Si no se declara de foma el explicita el tipo null no se reconoce y la variable queda definida como any.
otherNull = undefined;
otherNull = "something";

//Primitivo undefined

let undefinedVar : undefined = undefined;
//undefinedVar = null;      //No es posible la asignación para el tipo undefined.

let otherUndefined = undefined;
otherUndefined = 1;         //Si no se declara de foma el explicita el tipo undefined no se reconoce y la variable queda definida como any.

//Null y undefined como subtipos

let albumName : string;
//albumName = undefined;    //El useStrict del compilador impide que esta asignación sea posible.
//Con la flag --strictNUllChecks el compilador nos identifica todas las variables con valor null en un archivo TS.