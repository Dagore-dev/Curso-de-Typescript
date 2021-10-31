enum Orientation {
    Landscape,
    Portrait,
    Square,
    Panoramic
}

interface Picture {
    title : string,
    date : string,
    orientation : Orientation
}

function showPicture (picture : Picture) {
    console.log(`title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}`);
}

const myPic = {
    title: "Test title",
    date: "03/2020",
    orientation: Orientation.Square
}

showPicture(myPic);