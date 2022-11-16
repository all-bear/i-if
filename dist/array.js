"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertIntoArrayIf = void 0;
function insertIntoArrayIf(condition) {
    var elements = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        elements[_i - 1] = arguments[_i];
    }
    return condition ? elements : [];
}
exports.insertIntoArrayIf = insertIntoArrayIf;
