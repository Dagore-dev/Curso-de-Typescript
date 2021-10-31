"use strict";
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Landscape"] = 0] = "Landscape";
    Orientation[Orientation["Portrait"] = 1] = "Portrait";
    Orientation[Orientation["Square"] = 2] = "Square";
    Orientation[Orientation["Panoramic"] = 3] = "Panoramic";
})(Orientation || (Orientation = {}));
function showPicture(picture) {
    console.log("title: " + picture.title + ", date: " + picture.date + ", orientation: " + picture.orientation);
}
var myPic = {
    title: "Test title",
    date: "03/2020",
    orientation: Orientation.Square
};
showPicture(myPic);
