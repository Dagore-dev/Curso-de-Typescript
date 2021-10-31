"use strict";
function createPicture(title, date, size) {
    //Se crea la foto
    console.log("Foto creada con t\u00EDtulo: " + title + ", fecha: " + date + " y tama\u00F1o: " + size + ".");
}
createPicture("Mi cumpleaños", "27/12/2020", "500x500");
//Parámetros opcionales
function createPictureWithOptionalParams(title, date, size) {
    //Se crea la foto
    console.log("Foto creada: ", title, date, size);
}
createPictureWithOptionalParams("Mi cumpleaños", "27/12/2020", "500x500");
createPictureWithOptionalParams("Viaje a Irlanda", "5/06/2021");
//Arrow functions
var createPic = function (title, date, size) {
    return { title: title, date: date, size: size };
};
var picture = createPic("Mi cumpleaños", "27/12/2020", "500x500");
console.log(picture);
