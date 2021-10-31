"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Landscape"] = 0] = "Landscape";
    Orientation[Orientation["Portrait"] = 1] = "Portrait";
    Orientation[Orientation["Square"] = 2] = "Square";
    Orientation[Orientation["Panoramic"] = 3] = "Panoramic";
})(Orientation || (Orientation = {}));
var Entity = (function () {
    function Entity(id, title) {
        this._id = id;
        this._title = title;
    }
    Object.defineProperty(Entity.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    Entity.prototype.toString = function () {
        return "Id: " + this.id + "\nTitle: " + this.title;
    };
    return Entity;
}());
var Album = (function (_super) {
    __extends(Album, _super);
    function Album(id, title) {
        var _this = _super.call(this, id, title) || this;
        _this._pictures = [];
        return _this;
    }
    Object.defineProperty(Album.prototype, "pictures", {
        get: function () {
            return this._pictures;
        },
        set: function (value) {
            this._pictures = value;
        },
        enumerable: false,
        configurable: true
    });
    Album.prototype.addPicture = function (pic) {
        this.pictures = __spreadArray(__spreadArray([], this.pictures, true), [pic], false);
    };
    return Album;
}(Entity));
var Picture = (function (_super) {
    __extends(Picture, _super);
    function Picture(id, title, orientation) {
        var _this = _super.call(this, id, title) || this;
        _this._orientation = orientation;
        return _this;
    }
    Object.defineProperty(Picture.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (value) {
            this._orientation = value;
        },
        enumerable: false,
        configurable: true
    });
    Picture.prototype.picSummary = function () {
        return this.toString() + ("\nOrientation: " + this.orientation);
    };
    Picture.orientationOptions = Orientation;
    return Picture;
}(Entity));
var options = Picture.orientationOptions;
console.log(options);
var birthDay = new Album(3, "Birthday");
var newPic = new Picture(4, "Cake", Orientation.Square);
birthDay.addPicture(newPic);
console.log(birthDay);
console.log(newPic);
console.log(birthDay.toString());
console.log("");
console.log(birthDay.pictures[0].picSummary());
