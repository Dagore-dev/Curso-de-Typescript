"use strict";
//Un enumerado permite definir un conjunto de constantes (clave, valor) a las que se le asigna un valor incremental automáticamente salvo que se indique explicitamente otra cosa.
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panoramic"] = 3] = "Panoramic"; //3
})(PhotoOrientation || (PhotoOrientation = {}));
var landscape = PhotoOrientation.Landscape; //0
console.log("Landscape: ", landscape);
console.log("Panoramic: ", PhotoOrientation.Panoramic);
//Yendo más allá
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 10] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 12] = "Square";
    PictureOrientation[PictureOrientation["Panoramic"] = 13] = "Panoramic"; //13
})(PictureOrientation || (PictureOrientation = {}));
console.log("Landscape: ", PictureOrientation.Landscape);
console.log("Panoramic: ", PictureOrientation.Panoramic);
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Mexico"] = "mex";
    Country["EEUU"] = "usa";
    Country["Espana"] = "esp";
})(Country || (Country = {}));
var country = Country.EEUU;
console.log("Country: ", country);
