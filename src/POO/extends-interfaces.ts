export {};//Simplemente para crear un nuevo contexto

enum Orientation {
    Landscape,
    Portrait,
    Square,
    Panoramic
}

interface Album {
    readonly id: number,
    title: string,
}

interface Picture extends Album{
    orientation: Orientation
}

const myPicture : Picture = {
    id: 15,
    title: "Test title",
    orientation: Orientation.Square
};