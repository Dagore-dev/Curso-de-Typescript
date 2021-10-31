"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Landscape"] = 0] = "Landscape";
    Orientation[Orientation["Portrait"] = 1] = "Portrait";
    Orientation[Orientation["Square"] = 2] = "Square";
    Orientation[Orientation["Panoramic"] = 3] = "Panoramic";
})(Orientation || (Orientation = {}));
var myPicture = {
    id: 15,
    title: "Test title",
    orientation: Orientation.Square
};
