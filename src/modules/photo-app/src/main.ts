import { Picture } from "./picture";
import { Orientation } from "./orientation";
import { Album } from "./album";

const options = Picture.orientationOptions;     //Lectura de una propiedad estática de la clase Picture.
console.log(options);

const birthDay = new Album (3, "Birthday");
const newPic = new Picture (4, "Cake", Orientation.Square);

birthDay.addPicture(newPic);

console.log(birthDay);
console.log(newPic);
console.log(birthDay.toString());
console.log("");
console.log(birthDay.pictures[0].picSummary());