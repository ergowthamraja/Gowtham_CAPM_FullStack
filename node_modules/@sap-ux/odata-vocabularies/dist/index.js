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
exports.VocabularyService = exports.TYPE_DEFINITION_KIND = exports.TERM_KIND = exports.ENUM_TYPE_KIND = exports.COMPLEX_TYPE_KIND = void 0;
__exportStar(require("./types/vocabulary-service"), exports);
var odata_annotation_core_types_1 = require("@sap-ux/odata-annotation-core-types");
Object.defineProperty(exports, "COMPLEX_TYPE_KIND", { enumerable: true, get: function () { return odata_annotation_core_types_1.COMPLEX_TYPE_KIND; } });
Object.defineProperty(exports, "ENUM_TYPE_KIND", { enumerable: true, get: function () { return odata_annotation_core_types_1.ENUM_TYPE_KIND; } });
Object.defineProperty(exports, "TERM_KIND", { enumerable: true, get: function () { return odata_annotation_core_types_1.TERM_KIND; } });
Object.defineProperty(exports, "TYPE_DEFINITION_KIND", { enumerable: true, get: function () { return odata_annotation_core_types_1.TYPE_DEFINITION_KIND; } });
var vocabulary_service_1 = require("./vocabulary-service");
Object.defineProperty(exports, "VocabularyService", { enumerable: true, get: function () { return vocabulary_service_1.VocabularyService; } });
//# sourceMappingURL=index.js.map