"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertIf = void 0;
var array_1 = require("./array");
var object_1 = require("./object");
function insertIf(condition) {
    var data = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        data[_i - 1] = arguments[_i];
    }
    return typeof data[0] === "object" ? object_1.insertInObjectIf(condition, data[0]) : array_1.insertInArrayIf.apply(void 0, __spreadArrays([condition], data));
}
exports.insertIf = insertIf;
