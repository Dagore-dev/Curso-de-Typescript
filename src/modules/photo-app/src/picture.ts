import { Entity } from "./entity";
import { Orientation } from "./orientation";

export class Picture extends Entity {
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