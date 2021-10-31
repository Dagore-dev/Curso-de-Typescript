"use strict";
//Tipo object
var user;
user = {
    id: 1,
    username: "Dagore-dev",
    isPro: true
};
//const username = user.username;   //La declaración de tipo object no otorga los métodos de la clase Object a la variable.
var myObj = {
    id: 1,
    username: "Dagore-dev",
    isPro: true
};
console.log("user instanceof Object: ", user instanceof Object, "\nmyObj instanceof Object: ", myObj instanceof Object);
