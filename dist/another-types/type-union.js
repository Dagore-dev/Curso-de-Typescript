"use strict";
// Usuarios con id que a veces vienen en forma number y otras como string (10 o "10").
var idUser;
idUser = 10;
idUser = "10";
function getUsernameById(id) {
    //Haz tus cosas
    return "Un string";
}
getUsernameById(idUser);
var randomUser;
randomUser = 5;
randomUser = "15";
var smallPicture;
smallPicture = "100x100";
//smallPicture = "200x200";     //Como no se encuentra entre los valores listados en SquareSize el compilador nos señala un error.
