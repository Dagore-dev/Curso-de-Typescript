"use strict";
function showInfo(_a) {
    var id = _a.id, username = _a.username, firstName = _a.firstName;
    console.log("User information:", "\n        id: " + id + "\n        username: " + username + "\n        firstname: " + firstName + "\n    ");
}
showInfo({ id: 1, username: "Dagore-dev", firstName: "David" });
var unusable;
unusable = undefined;
function handleError(code, message) {
    throw new Error("Error code: " + code + ". " + message + ".");
}
try {
    handleError(404, "Not found");
}
catch (error) { }
function sumNumber(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
}
sumNumber(10);
