"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.REPLACE_TEXT = exports.REPLACE_ELEMENT_CONTENT = exports.REPLACE_ELEMENT = exports.REPLACE_ATTRIBUTE = exports.UPDATE_ELEMENT_NAME = exports.UPDATE_ATTRIBUTE_VALUE = exports.MOVE_ELEMENT = exports.INSERT_TARGET = exports.INSERT_ELEMENT = exports.INSERT_ATTRIBUTE = exports.DELETE_ELEMENT = exports.DELETE_ATTRIBUTE = void 0;
var internal_change_1 = require("./internal-change");
Object.defineProperty(exports, "DELETE_ATTRIBUTE", { enumerable: true, get: function () { return internal_change_1.DELETE_ATTRIBUTE; } });
Object.defineProperty(exports, "DELETE_ELEMENT", { enumerable: true, get: function () { return internal_change_1.DELETE_ELEMENT; } });
Object.defineProperty(exports, "INSERT_ATTRIBUTE", { enumerable: true, get: function () { return internal_change_1.INSERT_ATTRIBUTE; } });
Object.defineProperty(exports, "INSERT_ELEMENT", { enumerable: true, get: function () { return internal_change_1.INSERT_ELEMENT; } });
Object.defineProperty(exports, "INSERT_TARGET", { enumerable: true, get: function () { return internal_change_1.INSERT_TARGET; } });
Object.defineProperty(exports, "MOVE_ELEMENT", { enumerable: true, get: function () { return internal_change_1.MOVE_ELEMENT; } });
Object.defineProperty(exports, "UPDATE_ATTRIBUTE_VALUE", { enumerable: true, get: function () { return internal_change_1.UPDATE_ATTRIBUTE_VALUE; } });
Object.defineProperty(exports, "UPDATE_ELEMENT_NAME", { enumerable: true, get: function () { return internal_change_1.UPDATE_ELEMENT_NAME; } });
Object.defineProperty(exports, "REPLACE_ATTRIBUTE", { enumerable: true, get: function () { return internal_change_1.REPLACE_ATTRIBUTE; } });
Object.defineProperty(exports, "REPLACE_ELEMENT", { enumerable: true, get: function () { return internal_change_1.REPLACE_ELEMENT; } });
Object.defineProperty(exports, "REPLACE_ELEMENT_CONTENT", { enumerable: true, get: function () { return internal_change_1.REPLACE_ELEMENT_CONTENT; } });
Object.defineProperty(exports, "REPLACE_TEXT", { enumerable: true, get: function () { return internal_change_1.REPLACE_TEXT; } });
__exportStar(require("./change"), exports);
__exportStar(require("./project-info"), exports);
//# sourceMappingURL=index.js.map