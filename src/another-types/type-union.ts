// Usuarios con id que a veces vienen en forma number y otras como string (10 o "10").
let idUser : number | string;
idUser = 10;
idUser = "10";

function getUsernameById (id: number | string) : string {
    //Haz tus cosas
    return "Un string";
}

getUsernameById(idUser);

//También se puede crear y utilizar un alias para una determinada combinación de tipos. Utilizamos la palabra reservada type.
type IdUser = number | string;

let randomUser : IdUser;
randomUser = 5;
randomUser = "15";

//Se puede definir el nuevo tipo con distintos valores posibles, no necesariamente tipos primitivos.
type SquareSize = "100x100" | "500x500" | "1000x1000";

let smallPicture : SquareSize;
smallPicture = "100x100";
//smallPicture = "200x200";     //Como no se encuentra entre los valores listados en SquareSize el compilador nos señala un error.