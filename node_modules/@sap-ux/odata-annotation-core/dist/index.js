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
exports.isElementWithName = exports.getSingleTextNode = exports.getElementAttributeValue = exports.getElementAttribute = exports.elementsWithName = exports.elements = exports.rangeContained = exports.isBefore = exports.positionContainedStrict = exports.positionContained = exports.positionAt = exports.getIndentLevel = exports.indent = exports.getPositionData = exports.findPathToPosition = exports.toFullyQualifiedPath = exports.parsePath = exports.toAliasQualifiedName = exports.getAllNamespacesAndReferences = exports.getAliasInformation = exports.resolveName = exports.toFullyQualifiedName = exports.parseIdentifier = void 0;
var names_1 = require("./names");
Object.defineProperty(exports, "parseIdentifier", { enumerable: true, get: function () { return names_1.parseIdentifier; } });
Object.defineProperty(exports, "toFullyQualifiedName", { enumerable: true, get: function () { return names_1.toFullyQualifiedName; } });
Object.defineProperty(exports, "resolveName", { enumerable: true, get: function () { return names_1.resolveName; } });
Object.defineProperty(exports, "getAliasInformation", { enumerable: true, get: function () { return names_1.getAliasInformation; } });
Object.defineProperty(exports, "getAllNamespacesAndReferences", { enumerable: true, get: function () { return names_1.getAllNamespacesAndReferences; } });
Object.defineProperty(exports, "toAliasQualifiedName", { enumerable: true, get: function () { return names_1.toAliasQualifiedName; } });
var paths_1 = require("./paths");
Object.defineProperty(exports, "parsePath", { enumerable: true, get: function () { return paths_1.parsePath; } });
Object.defineProperty(exports, "toFullyQualifiedPath", { enumerable: true, get: function () { return paths_1.toFullyQualifiedPath; } });
var search_1 = require("./search");
Object.defineProperty(exports, "findPathToPosition", { enumerable: true, get: function () { return search_1.findPathToPosition; } });
Object.defineProperty(exports, "getPositionData", { enumerable: true, get: function () { return search_1.getPositionData; } });
var text_document_utils_1 = require("@sap-ux/text-document-utils");
Object.defineProperty(exports, "indent", { enumerable: true, get: function () { return text_document_utils_1.indent; } });
Object.defineProperty(exports, "getIndentLevel", { enumerable: true, get: function () { return text_document_utils_1.getIndentLevel; } });
Object.defineProperty(exports, "positionAt", { enumerable: true, get: function () { return text_document_utils_1.positionAt; } });
Object.defineProperty(exports, "positionContained", { enumerable: true, get: function () { return text_document_utils_1.positionContained; } });
Object.defineProperty(exports, "positionContainedStrict", { enumerable: true, get: function () { return text_document_utils_1.positionContainedStrict; } });
Object.defineProperty(exports, "isBefore", { enumerable: true, get: function () { return text_document_utils_1.isBefore; } });
Object.defineProperty(exports, "rangeContained", { enumerable: true, get: function () { return text_document_utils_1.rangeContained; } });
var annotation_file_1 = require("./annotation-file");
Object.defineProperty(exports, "elements", { enumerable: true, get: function () { return annotation_file_1.elements; } });
Object.defineProperty(exports, "elementsWithName", { enumerable: true, get: function () { return annotation_file_1.elementsWithName; } });
Object.defineProperty(exports, "getElementAttribute", { enumerable: true, get: function () { return annotation_file_1.getElementAttribute; } });
Object.defineProperty(exports, "getElementAttributeValue", { enumerable: true, get: function () { return annotation_file_1.getElementAttributeValue; } });
Object.defineProperty(exports, "getSingleTextNode", { enumerable: true, get: function () { return annotation_file_1.getSingleTextNode; } });
Object.defineProperty(exports, "isElementWithName", { enumerable: true, get: function () { return annotation_file_1.isElementWithName; } });
__exportStar(require("./utils"), exports);
__exportStar(require("@sap-ux/odata-annotation-core-types"), exports);
//# sourceMappingURL=index.js.map