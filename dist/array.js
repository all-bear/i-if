"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertInArrayIf = void 0;
function insertInArrayIf(condition) {
    var elements = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        elements[_i - 1] = arguments[_i];
    }
    return condition ? elements : [];
}
exports.insertInArrayIf = insertInArrayIf;
