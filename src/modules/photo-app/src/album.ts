import { Entity } from "./entity";
import { Picture } from "./picture";

export class Album extends Entity{
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