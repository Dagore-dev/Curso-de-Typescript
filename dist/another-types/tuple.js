"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Las tuplas son arrays de elementos que están tipados. Cada elemento debe ser de un tipo distinto.
var entry;
entry = [1, "David"];
//Tuplas con más de dos valores.
var userInfo;
userInfo = [1, "David", true];
//Tuplas de arrays
var array;
array = [__spreadArray([], userInfo, true), [2, "Manuel", false], [3, "Javier", true]];
