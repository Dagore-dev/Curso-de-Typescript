//Un enumerado permite definir un conjunto de constantes (clave, valor) a las que se le asigna un valor incremental automáticamente salvo que se indique explicitamente otra cosa.
enum PhotoOrientation {
    Landscape,             //0
    Portrait,              //1
    Square,                //2
    Panoramic              //3
}

const landscape = PhotoOrientation.Landscape;//0

console.log("Landscape: ", landscape);
console.log("Panoramic: ", PhotoOrientation.Panoramic);

//Yendo más allá
enum PictureOrientation {
    Landscape = 10,        //10
    Portrait,              //11
    Square,                //12
    Panoramic              //13
}

console.log("Landscape: ", PictureOrientation.Landscape);
console.log("Panoramic: ", PictureOrientation.Panoramic);

enum Country {
    Bolivia = "bol",
    Colombia = "col",
    Mexico = "mex",
    EEUU = "usa",
    Espana = "esp"
}

const country : Country = Country.EEUU;

console.log("Country: ", country);