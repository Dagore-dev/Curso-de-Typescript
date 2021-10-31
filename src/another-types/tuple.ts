//Las tuplas son arrays de elementos que están tipados. Cada elemento debe ser de un tipo distinto.
let entry : [number, string];
entry = [1, "David"];

//Tuplas con más de dos valores.
let userInfo : [number, string, boolean];
userInfo = [1, "David", true];

//Tuplas de arrays
let array : [number, string, boolean][];
array = [[...userInfo], [2, "Manuel", false], [3, "Javier", true]];