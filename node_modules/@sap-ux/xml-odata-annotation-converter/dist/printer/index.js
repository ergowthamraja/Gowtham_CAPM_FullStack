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
exports.insertWithOptions = exports.insert = exports.escapeAttribute = exports.printCsdlNodeToXmlString = exports.serializeTarget = exports.serializeReference = exports.serializeElement = exports.getNewAnnotationFile = exports.serializeAttribute = void 0;
var serializer_edmx_1 = require("./serializer-edmx");
Object.defineProperty(exports, "serializeAttribute", { enumerable: true, get: function () { return serializer_edmx_1.serializeAttribute; } });
Object.defineProperty(exports, "getNewAnnotationFile", { enumerable: true, get: function () { return serializer_edmx_1.getNewAnnotationFile; } });
Object.defineProperty(exports, "serializeElement", { enumerable: true, get: function () { return serializer_edmx_1.serializeElement; } });
Object.defineProperty(exports, "serializeReference", { enumerable: true, get: function () { return serializer_edmx_1.serializeReference; } });
Object.defineProperty(exports, "serializeTarget", { enumerable: true, get: function () { return serializer_edmx_1.serializeTarget; } });
__exportStar(require("./namespaces"), exports);
var csdl_to_xml_1 = require("./csdl-to-xml");
Object.defineProperty(exports, "printCsdlNodeToXmlString", { enumerable: true, get: function () { return csdl_to_xml_1.printCsdlNodeToXmlString; } });
Object.defineProperty(exports, "escapeAttribute", { enumerable: true, get: function () { return csdl_to_xml_1.escapeAttribute; } });
var document_modifier_1 = require("./document-modifier");
Object.defineProperty(exports, "insert", { enumerable: true, get: function () { return document_modifier_1.insert; } });
Object.defineProperty(exports, "insertWithOptions", { enumerable: true, get: function () { return document_modifier_1.insertWithOptions; } });
//# sourceMappingURL=index.js.map