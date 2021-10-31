export abstract class Entity {     //El modificador abstract impide que se pueda instanciar esta clase, es decir, su único propósito es ser extendida por otras clases.
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