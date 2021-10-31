export {};
enum Orientation {
    Landscape,
    Portrait,
    Square,
    Panoramic
}
//Por defecto el modificador de acceso de cada propiedad y método en la clase será public. El constructor en principio hay que mantenerlo público para que el resto de clases que lo hereden puedan emplearlo y modificarlo.
abstract class Entity {     //El modificador abstract impide que se pueda instanciar esta clase, es decir, su único propósito es ser extendida por otras clases.
    private readonly _id: number;
    private _title: string;

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title
    }
    //Métodos getters y setters.
    get id () : number {
        return this._id;
    }

    get title () : string {
        return this._title;
    }
    set title (value: string) {
        this._title = value;
    }
    //Otros métodos públicos.
    toString () : string{
        return `Id: ${this.id}\nTitle: ${this.title}`;
    }
}
//const tryEntity = new Entity(9, "WRONG");     //Intentar instanciar la clase hace que el compilador nos señale un error.
class Album extends Entity{
    private _pictures: Picture[];

    constructor (id: number, title: string) {
        super(id, title);
        this._pictures = []
    }

    get pictures () : Picture[] {
        return this._pictures;
    }
    set pictures (value: Picture[]) {
        this._pictures = value;
    }
    //Usa getters y setters en un método público
    addPicture (pic : Picture) : void{
        this.pictures = [...this.pictures, pic];
    }
}

class Picture extends Entity {
    static readonly orientationOptions = Orientation;   //Un elemento declarado como static se puede emplear directamente en la clase, sin necesidad de crear una instancia.
    private _orientation : Orientation;
    
    constructor (id: number, title: string, orientation : Orientation) { 
        super(id, title);
        this._orientation = orientation;
    }

    get orientation () : number {
        return this._orientation;
    }
    set orientation (value : number) {
        this._orientation = value;
    }

    picSummary () : string {
        return this.toString() + `\nOrientation: ${this.orientation}`;
    }
}

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