function createPicture (title : string, date : string, size : SquareSize) {
    //Se crea la foto
    console.log(`Foto creada con título: ${title}, fecha: ${date} y tamaño: ${size}.`)
}

createPicture("Mi cumpleaños", "27/12/2020", "500x500");

//Parámetros opcionales
function createPictureWithOptionalParams (title? : string, date? : string, size? : SquareSize) {
    //Se crea la foto
    console.log("Foto creada: ", title, date, size);
}

createPictureWithOptionalParams("Mi cumpleaños", "27/12/2020", "500x500");
createPictureWithOptionalParams("Viaje a Irlanda", "5/06/2021");

//Arrow functions
const createPic = (title : string, date : string, size : SquareSize) : object => {
    return { title, date, size };
}

const picture = createPic("Mi cumpleaños", "27/12/2020", "500x500");
console.log(picture);